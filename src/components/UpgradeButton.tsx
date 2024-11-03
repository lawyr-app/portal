import Link from "next/link";
import React from "react";

const UpgradeButton = () => {
  return (
    <Link href="/">
      <button className="relative inline-flex h-7 overflow-hidden rounded-full p-[1px] ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white  px-3 py-1 text-[12px] font-medium text-black backdrop-blur-3xl">
          Using limited Free plan. Upgrade
        </span>
      </button>
    </Link>
  );
};

export default UpgradeButton;
