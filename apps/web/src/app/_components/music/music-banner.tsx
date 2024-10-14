import { Skeleton } from "@/components/ui/skeleton";
import { VerifiedIcon } from "@/constant/icons";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IMusicBanner {
  image: string;

  isVarified?: boolean;
  artist?: string;
  isLoading?: boolean;
  artistImage?: string;
  listener?: string;
}

const MusicBanner: React.FC<IMusicBanner> = ({
  isLoading,
  image,
  isVarified,
  artist,
  artistImage,
  listener,
}) => {
  return (
    <div
      className="grid grid-cols-3 mx-12 mt-32 h-72 bg-cover bg-center rounded-2xl text-popover bg-black/40"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {isLoading ? (
        <div className="col-span-2 flex items-start justify-center flex-col mx-auto p-4 rounded-2xl">
          <p className="flex items-center gap-2 text-white">
            <Skeleton className="w-6 h-6 rounded-full" />

            <Skeleton className="w-52 h-6 rounded-full" />
          </p>

          <h3 className="text-3xl font-semibold my-3 text-white">
            <Skeleton className="w-64 h-8 rounded-full" />
          </h3>

          <p className="flex items-center space-x-1 text-white">
            <Skeleton className="w-64 h-4 rounded-full" />
          </p>
        </div>
      ) : (
        <div className="col-span-2 flex items-start justify-center flex-col mx-auto p-4 rounded-2xl">
          {isVarified && (
            <p className="flex items-center gap-2 text-white">
              <VerifiedIcon className="w-6 h-6" />
              <span>Verified Artist</span>
            </p>
          )}
          <h3 className="text-3xl font-semibold my-3 text-white">{artist}</h3>
          <p className="flex items-center space-x-1 text-white">
            <span>{listener}</span>
            <span>monthly listeners</span>
          </p>
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          {artistImage && (
            <Image
              src={artistImage}
              alt={artist ?? "Artist"}
              width={150}
              height={150}
              className="rounded-full"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MusicBanner;
