import { AssetPreview } from "@/components/common/assetPreview";
import { MainHeading } from "@/components/common/mainHeading";
import { PreviewSkeleton } from "@/components/common/previewSkeleton";
import { trpc } from "@/trpc";

export function SelectAsset() {
  const assets = trpc.searchAssets.useQuery({ keyword: "" });

  return (
    <div className="pt-4 pb-[80px] space-y-4 px-default">
      <MainHeading title="Select Asset" />
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        placeholder="Search for an asset"
      />
      <div className="space-y-2">
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
