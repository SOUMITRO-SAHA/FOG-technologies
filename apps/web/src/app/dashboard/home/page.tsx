"use client";

import HeaderTop from "@/app/_components/home/headertop";
import MusicBanner from "@/app/_components/music/music-banner";
import MusicList from "@/app/_components/music/music-list";
import { useGraphQLResponse } from "@/context/graphql";

const musicBanner = {
  image: "",
  isVarified: true,
  artist: "Artist Name",
  artistImage: "",
  listener: "10,000",
};

const HomePage = () => {
  const { data, isLoading } = useGraphQLResponse();
  return (
    <main className="h-full mx-8 my-6 overflow-y-auto">
      {/* Header Top */}
      <HeaderTop />

      {/* Music Banner*/}
      <MusicBanner {...musicBanner} />

      {/* Music List */}
      <MusicList musicList={[]} isLoading={isLoading} />
    </main>
  );
};

export default HomePage;
