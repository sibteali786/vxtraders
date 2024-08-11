import { AssetPreview } from "@/components/common/assetPreview";
import { MainHeading } from "@/components/common/mainHeading";
import { PreviewSkeleton } from "@/components/common/previewSkeleton";
import { trpc } from "@/trpc";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Assuming you are using ShadCN's Input component

export function SelectAsset() {
  const [searchTerm, setSearchTerm] = useState("");
  const assets = trpc.searchAssets.useQuery({ keyword: searchTerm });

  return (
    <div className="pt-4 pb-[80px] px-default">
      <MainHeading title="Select Assets" />
      <Input
        type="text"
        className="w-full p-2 border border-border rounded-lg"
        placeholder="Search for assets"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mt-[38px] flex flex-col gap-4">	
        {assets.isFetching
          ? Array(15)
              .fill(0)
              .map((_, i) => <PreviewSkeleton key={i} />)
          : assets.data?.assets.map((asset, i) => <AssetPreview key={i} asset={asset} />)}
      </div>

      <div className="w-full p-6"></div>
    </div>
  );
}
