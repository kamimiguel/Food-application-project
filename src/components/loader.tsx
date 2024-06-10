import { GridLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <GridLoader color="#fb923c" />
    </div>
  );
};

export default Loader;
