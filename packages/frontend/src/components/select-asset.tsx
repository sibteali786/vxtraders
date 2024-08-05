import { trpc } from "@/trpc";
import { PreviewSkeleton } from "./preview-skeleton";
import { AssetPreview } from "./asset-preview";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

export function SelectAsset() {
  const location = useLocation();
  const assets = trpc.searchAssets.useQuery({ keyword: '' });

  useEffect(() => {
    assets.refetch();
  }, [location]);

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
