/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import * as THREE from "three";
import * as topojson from "topojson-client";
import type * as GeoJSON from "geojson";
import type { Objects, Topology } from "topojson-specification";
import { GeometryCollection } from "topojson-specification";

const polygonsMaterial = new THREE.MeshLambertMaterial({
  color: "darkslategrey",
  side: THREE.DoubleSide,
});

const fetchLand = async () => {
  try {
    const result = await fetch("//unpkg.com/world-atlas/land-110m.json", {
      method: "GET",
    });

    const landTopo: Topology<Objects<GeoJSON.GeoJsonProperties>> =
      await result.json();

    if (!landTopo?.objects) return;

    return landTopo;
  } catch (error) {
    console.log(error);
  }
};

function GlobeComponent() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  const [landPolygons, setLandPolygons] = useState([]);

  useEffect(() => {
    // load data

    fetchLand()
      .then((landTopo) => {
        if (!landTopo?.objects?.land) return;

        setLandPolygons(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          topojson.feature(landTopo, landTopo.objects.land).features
        );

        // Auto-rotate
        const globe = globeRef?.current;

        if (globe) {
          globe.controls().autoRotate = true;
          globe.controls().autoRotateSpeed = 0.35;
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Globe
      ref={globeRef}
      backgroundColor="rgba(0,0,0,0)"
      showGlobe={false}
      showAtmosphere={false}
      polygonsData={landPolygons}
      polygonCapMaterial={polygonsMaterial}
      polygonSideColor={() => "rgba(0, 0, 0, 0)"}
      rotateSpeed={0.5}
      autoRotate={true}
      autoRotateSpeed={0.5}
    />
  );
}

export default GlobeComponent;
