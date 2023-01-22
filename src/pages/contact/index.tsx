import WithPageTransition from "../../layouts/root/WithPageTransition";
import type { NextPageWithLayout } from "../_app";

const Contact: NextPageWithLayout = () => {
  return (
    <div className="container m-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return <WithPageTransition>{page}</WithPageTransition>;
};
