import Image from "next/image";
import React from "react";

interface MusicCardProps {
  label: string;
  image: string;
  artist: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ label, image, artist }) => {
  return (
    <div className="min-h-[200px] w-full rounded bg-[#6B0000] shadow-xl border-ss-primary border-[1px] text-popover">
      <p className="w-full text-center my-2 text-xs font-[500]">Now Playing</p>
      <Image src={image ?? ""} alt={label} className="w-[80%] h-32" />

      <div className="flex flex-col items-center justify-center">
        <h3 className="text-sm font-[500]">{label}</h3>
        <p className="text-ss-muted text-xs">{artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;
