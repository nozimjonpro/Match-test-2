import { useState } from "react";
import Refresh from "./assets/img/Refresh.svg";
import Dropdown from "./components/Dropdown";
import Table from "./components/Table";
import { MatchResponse, StatusType } from "./interfaces/matches.interface";
import Toast from "./components/Toast";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [activeStatus, setActiveStatus] = useState<StatusType>({
    title: "",
    type: "all",
  });

  const { data, loading, error, refetch } = useFetch<MatchResponse>(
    "https://app.ftoyd.com/fronttemp-service/fronttemp"
  );

  const matches = data?.data.matches.filter((el) => {
    if (activeStatus.type === "all") {
      return true;
    } else {
      return activeStatus.type === el.status;
    }
  });

  return (
    <div className="w-full h-screen bg-dark md:p-10 sm:p-6 py-4 px-3">
      <Toast error={error} />
      <div className="h-full flex flex-col">
        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-2.5 justify-between items-center mb-8">
          <div className="flex items-center sm:flex-row flex-col sm:gap-y-0 gap-y-3.5 gap-x-6 w-full">
            <h1 className="text-white md:text-header text-header-mobile italic">
              Match Tracker
            </h1>
            <Dropdown
              activeStatus={activeStatus}
              setActiveStatus={setActiveStatus}
            />
          </div>
          <button
            className="flex items-center justify-center sm:max-w-48 w-full p-3.5 gap-x-2.5 bg-danger rounded-sm cursor-pointer active:opacity-90"
            onClick={() => refetch()}
          >
            <span className="text-lg font-semibold text-white">Обновить</span>{" "}
            <img src={Refresh} alt="Refresh icon" width={26} height={26} />
          </button>
        </div>
        <Table matches={matches || []} loading={loading} />
      </div>
    </div>
  );
}

export default App;
