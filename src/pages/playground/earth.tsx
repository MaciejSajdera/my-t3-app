import Head from "next/head";
import { personalData } from "../../common/lib/data/personal";
import WithPageTransition from "../../layouts/root/WithPageTransition";
import type { NextPageWithLayout } from "../_app";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useGlobalStore from "../../common/hooks/zustand/useGlobalStore";
import { set } from "zod";
const GlobeHallow = dynamic(
  () => import("../../common/components/3d/GlobeHallow"),
  { ssr: false }
);
const GlobeClouds = dynamic(
  () => import("../../common/components/3d/GlobeClouds"),
  { ssr: false }
);
const GlobeDark = dynamic(
  () => import("../../common/components/3d/GlobeDark"),
  { ssr: false }
);

const EarthPage: NextPageWithLayout = () => {
  const isThemeToggleChecked = useGlobalStore(
    (state) => state.isThemeToggleChecked
  );

  const lightEarth =
    "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg";
  const darkEarth = "//unpkg.com/three-globe/example/img/earth-night.jpg";

  const [globeLayer, setGlobeLayer] = useState(darkEarth);

  useEffect(() => {
    if (isThemeToggleChecked) {
      setGlobeLayer(lightEarth);
    } else {
      setGlobeLayer(darkEarth);
    }
  }, [isThemeToggleChecked]);

  return (
    <>
      <Head>
        <title>Earth</title>
      </Head>
      <div className="container flex">
        {/* <div className="m-auto flex items-center gap-12 px-4 py-16">
          <GlobeHallow />
        </div> */}

        {/* <div className="m-auto flex items-center gap-12 px-4 py-16">
          <GlobeClouds />
        </div> */}
        <div className="m-auto flex items-center gap-12 px-4 py-16">
          <GlobeDark globeLayer={globeLayer} />
        </div>
      </div>
    </>
  );
};

EarthPage.getLayout = function getLayout(page) {
  return <WithPageTransition>{page}</WithPageTransition>;
};

export default EarthPage;
