import WithPageTransition from "../../layouts/root/WithPageTransition";
import type { NextPageWithLayout } from "../_app";

const Todos: NextPageWithLayout = () => {
  return (
    <div className="container m-auto flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Mini Projects
      </h1>
    </div>
  );
};

export default Todos;

Todos.getLayout = function getLayout(page) {
  return <WithPageTransition>{page}</WithPageTransition>;
};
