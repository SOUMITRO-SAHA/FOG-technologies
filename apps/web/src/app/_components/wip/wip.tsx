import React from "react";

const WIP = () => {
  return (
    <div className="bg-yellow-400/80 w-full text-center font-bold p-2 rounded-lg text-gray-800">
      <div className="animate-pulse">
        <p className="text-lg">This feature is under development.</p>
        <p>Please check back later for updates.</p>
      </div>
    </div>
  );
};

export default WIP;
