

import { useEffect } from "react";
import WithPageTransition from "../../layouts/root/WithPageTransition";
import type { NextPageWithLayout } from "../_app";
import { MouseTrails } from "../../common/components/3d/MouseTrails";

const Trails: NextPageWithLayout = () => {
  return (
    <div className="container m-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        trails
      </h1>
      <MouseTrails />
    </div>
  );
};

export default Trails;

Trails.getLayout = function getLayout(page) {
  return <WithPageTransition>{page}</WithPageTransition>;
};
