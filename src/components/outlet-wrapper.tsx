import { Outlet } from "@/types";
import OutletItem from "./outlet-item";

const OutletWrapper = ({ outlets }: { outlets: Outlet[] }) => {
  return (
    <div className="w-4/5 h-full mx-auto flex items-center flex-wrap">
      {outlets.map((outlet) => (
        <OutletItem key={outlet.id} outlet={outlet} />
      ))}
    </div>
  );
};

export default OutletWrapper;
