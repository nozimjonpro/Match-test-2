import { Matches } from "../interfaces/matches.interface";
import Loading from "./Loading";
import Accordion from "./Accordion";
import { useState } from "react";

type TableProps = {
  matches: Matches[];
  loading: boolean;
};

const Table = ({ matches, loading }: TableProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className="w-full h-full overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      {loading ? (
        <div className="h-full w-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <table className="w-full">
          <tbody className="">
            {matches?.length ? (
              matches.map((match, i) => (
                <Accordion
                  match={match}
                  key={i}
                  index={i}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
