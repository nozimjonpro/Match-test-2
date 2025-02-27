import { useState } from "react";
import { Matches } from "../interfaces/matches.interface";
import TeamIcon from "../assets/img/TeamIcon.png";
import Status from "./Status";
import AccordionContent from "./AccordionContent";

const colors = {
  finished: "#EB0237",
  ongoing: "#43AD28",
  scheduled: "#EB6402",
};

type AccordionProps = {
  match: Matches;
  index: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const Accordion = ({
  match,
  index,
  openIndex,
  setOpenIndex,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <tr
      className="w-full bg-dark-2 flex flex-col md:p-4 sm:p-3 p-2 mt-3 first:mt-0 rounded-sm"
      data-id={`${index}`}
      onClick={() => {
        setOpenIndex(index);
        setIsOpen(!isOpen);
      }}
    >
      <td className="flex justify-between gap-x-2">
        <div className="flex items-center gap-x-1.5 sm:gap-x-3.5">
          <img
            className="sm:w-12 sm:h-12 w-7 h-7"
            src={TeamIcon}
            alt="Team icon"
            width={48}
            height={48}
          />
          <p
            className="text-white font-semibold md:text-base text-sm truncate"
            title={match.homeTeam.name}
          >
            {match.homeTeam.name}
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-white font-semibold md:text-xl text-base tracking-widest">
            {match.homeScore}:{match.awayScore}
          </p>
          <Status
            title={match.status}
            color={colors[match.status.toLowerCase() as keyof typeof colors]}
          />
        </div>
        <div className="flex items-center gap-x-3.5">
          <p
            className="text-white font-semibold md:text-base text-sm truncate"
            title={match.awayTeam.name}
          >
            {match.awayTeam.name}
          </p>
          <img
            className="sm:w-12 sm:h-12 w-7 h-7"
            src={TeamIcon}
            alt="Team icon"
            width={48}
            height={48}
          />
        </div>
      </td>
      <td>
        <div
          className={`grid transition-[grid-template-rows] duration-300 w-full ${
            openIndex === index && isOpen
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden w-full">
            <div className="flex lg:flex-row flex-col justify-between sm:gap-y-5 gap-y-2 md:gap-y-8 gap-x-8 w-full md:p-4 pt-4">
              <AccordionContent match={match} place="homeTeam" />
              <div className="flex lg:hidden justify-between gap-x-2.5 items-center">
                <div className="h-px w-full bg-[#13181F]"></div>
                <span className="text-gray-bold text-sm font-semibold">VS</span>
                <div className="h-px w-full bg-[#13181F]"></div>
              </div>
              <AccordionContent match={match} place="awayTeam" />
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Accordion;
