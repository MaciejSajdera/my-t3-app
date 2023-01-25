/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useRef, useState } from "react";
import type { GlobeMethods } from "react-globe.gl";
import Globe from "react-globe.gl";
import * as THREE from "three";
import Modal from "../ui/Modal";
import useClickOutsideOf from "../../hooks/useClickOutsideOf";
import { useKeyDown } from "../../hooks/useKeyDown";

type Props = {
  globeLayer: string;
};

const markerSvg = `<svg viewBox="-4 0 36 36">
<path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
<circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;

// Gen random data
const N = 1;
const gData = [...Array(N).keys()].map(() => ({
  lat: 50.049683,
  lng: 19.944544,
  size: 25,
  color: ["red"],
}));

const GlobeClouds = ({ globeLayer }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickOutside = () => {
    setIsOpen((prevState) => !prevState);
  };
  useKeyDown((e) => e.key === "Escape" && setIsOpen(false));
  const modalRef = useClickOutsideOf(handleClickOutside);

  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  console.log(globeRef);

  useEffect(() => {
    if (!globeRef?.current) return;

    const globe = globeRef.current;

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
    <>
      <Modal ref={modalRef} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex-column m-0 flex content-center items-center p-12 text-2xl text-black">
          <p>Może w czwartek coś kurde ten?</p>
        </div>
      </Modal>
      <Globe
        //   width={100}
        //   height={100}
        backgroundColor="rgba(0,0,0,0)"
        ref={globeRef}
        animateIn={false}
        globeImageUrl={globeLayer}
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        htmlElementsData={gData}
        htmlElement={(d) => {
          const el = document.createElement("div");
          el.innerHTML = markerSvg;
          //@ts-ignore
          el.style.color = d.color;
          //@ts-ignore
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          el.style.width = `${d.size}px`;

          el.style.pointerEvents = "auto";
          el.style.cursor = "pointer";
          // el.onclick = () => console.info(d);
          el.onclick = () => setIsOpen(() => true);
          return el;
        }}
      />
    </>
  );
};

export default GlobeClouds;
