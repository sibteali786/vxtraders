import { AssetPreview } from "@/components/common/assetPreview";
import { MainHeading } from "@/components/common/mainHeading";
import { trpc } from "@/trpc";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Assuming you are using ShadCN's Input component
import { Error } from "@/components/common/error/Error";
import { NoData } from "@/components/common/empty-state/NoData";
import { PreviewSkeleton } from "@/components/common/previewSkeleton";

export function SelectAsset() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, isError, data } = trpc.searchAssets.useQuery({ keyword: searchTerm });
  return (
    <div className="pb-[80px] px-default ">
      <MainHeading title="Select Assets" />
      <Input
        type="text"
        className="w-full p-2 border border-border rounded-lg"
        placeholder="Search for assets"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mt-[38px] flex flex-col gap-4 my-auto">
        {isLoading ? (
          Array(15)
            .fill(0)
            .map((_, i) => <PreviewSkeleton key={i} />)
        ) : isError ? (
          <Error
            title="Oops, something went wrong"
            buttonText="Refresh"
            onClick={() => window.location.reload()}
          >
            {"Seems like there was an issue. Please refresh the page to resume!"}
          </Error>
        ) : !data || data.assets.length === 0 ? (
          <NoData
            illustrationSrc="/NoAssets.png"
            title="No Assets"
            message={`No results to show for ${searchTerm} asset.`}
          />
        ) : (
          data?.assets.map((asset, i) => <AssetPreview key={i} asset={asset} />)
        )}
      </div>
    </div>
  );
}
