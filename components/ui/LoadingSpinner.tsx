import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-row gap-4">
        <div className="w-12 h-12 rounded-full animate-spin border-y border-solid border-cyan-500 border-t-transparent shadow-md"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
