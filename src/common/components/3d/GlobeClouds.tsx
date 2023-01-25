/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRef, useEffect, FC } from "react";
import type { GlobeMethods, GlobeProps } from "react-globe.gl";
import Globe from "react-globe.gl";
import * as THREE from "three";

type FCwithRef<P = {}, R = {}> = React.FunctionComponent<
  P & { ref?: React.MutableRefObject<R | undefined> }
>;

const GlobeClouds = () => {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  console.log(globeRef);

  useEffect(() => {
    if (!globeRef?.current) return;

    const globe: GlobeMethods = globeRef.current;

    console.log(globe);

    // if (!globe || !globe?.controls()) return;

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;

    // Add clouds sphere
    const CLOUDS_IMG_URL = "./clouds.png"; // from https://github.com/turban/webgl-earth
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(
          globe.getGlobeRadius() * (1 + CLOUDS_ALT),
          75,
          75
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      })();

      // Add geolocation pointer
      const pointer = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 16, 16),
        new THREE.MeshBasicMaterial({ color: "red" })
      );
      pointer.position.set(0, 0, 0);
      globe.scene().add(pointer);
    });
  }, []);

  return (
    <Globe
      //   width={100}
      //   height={100}
      backgroundColor="rgba(0,0,0,0)"
      ref={globeRef}
      animateIn={false}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    />
  );
};

export default GlobeClouds;
