import { Sandwich } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 text-xl">
      <div className="font-bold text-amber-500">
        <Sandwich />
      </div>
      <div className="font-semibold text-rose-500 ">FoodOutlets</div>
    </div>
  );
};

export default Logo;
