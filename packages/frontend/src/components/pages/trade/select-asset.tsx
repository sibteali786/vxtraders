import { AssetPreview } from "@/components/common/asset-preview";
import { PreviewSkeleton } from "@/components/common/preview-skeleton";
import { trpc } from "@/trpc";

export function SelectAsset() {
  const assets = trpc.searchAssets.useQuery({ keyword: '' });

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Select Asset</h1>
      <input type="text" className="w-full p-2 border rounded-lg" placeholder="Search for an asset" />
      <div className="space-y-2">
        {assets.isFetching ?
          Array(15).fill(0).map((_, i) => (<PreviewSkeleton key={i} />)) :
          assets.data?.assets.map((asset, i) => (<AssetPreview key={i} asset={asset} />))}
      </div>

      <div className="w-full p-6"></div>
    </div>
  )
}
