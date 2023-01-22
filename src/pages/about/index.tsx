import WithPageTransition from "../../layouts/root/WithPageTransition";
import type { NextPageWithLayout } from "../_app";

const About: NextPageWithLayout = () => {
  return (
    <div className="container m-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1>About</h1>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <WithPageTransition>{page}</WithPageTransition>;
};
