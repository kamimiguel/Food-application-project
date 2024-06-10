import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center px-2 mx-3 bg-white overflow-hidden rounded-full shadow border-[1px] border-slate-200 hover:shadow-lg group transition ">
      <Search className="text-slate-400 w-6 h-6 group-hover:text-slate-600 group-hover:scale-110 transition " />
      <Input
        className="bg-none border-none outline-none ring-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-56"
        placeholder="Search..."
      />
    </div>
  );
};
export default SearchBar;
