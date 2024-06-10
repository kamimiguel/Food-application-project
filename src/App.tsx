import "./App.css";
import Navbar from "@/components/navbar";
import useFetchOutlets from "./hooks/api/fetch-outlets";
import Loader from "@/components/loader";
import OutletWrapper from "@/components/outlet-wrapper";

function App() {
  const { outlets, isLoading } = useFetchOutlets();

  // if (outlets) console.log(outlets);

  return (
    <>
      <div className="bg-slate-100 min-h-[100vh]">
        <Navbar />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="max-w-5xl mx-auto">
            {outlets && outlets.length > 0 ? (
              <OutletWrapper outlets={outlets} />
            ) : (
              "none"
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
