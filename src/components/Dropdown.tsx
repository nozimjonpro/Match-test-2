import ArrowDown from "../assets/img/ArrowDown.svg";
import { statuses } from "../assets/data";
import { useState } from "react";
import { StatusType } from "../interfaces/matches.interface";

type DropdownProps = {
  activeStatus: StatusType;
  setActiveStatus: React.Dispatch<React.SetStateAction<StatusType>>;
};

const Dropdown = ({ activeStatus, setActiveStatus }: DropdownProps) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="relative sm:w-max w-full">
      <div
        className="flex justify-between items-center gap-x-3 cursor-pointer h-full bg-dark-2 p-4 rounded-sm w-full min-w-[180px]"
        onClick={() => setIsClicked(!isClicked)}
      >
        <span className="text-silver font-medium select-none">
          {activeStatus.title || statuses[0].title}
        </span>
        <img
          className={`transition-transform duration-300 select-none ${
            isClicked ? "rotate-180" : "rotate-0"
          }`}
          src={ArrowDown}
          alt="arrow icon"
        />
      </div>
      <ul
        className={`flex flex-col bg-dark-3 rounded-sm absolute w-full top-[calc(100%+8px)] transition duration-300 ${
          isClicked
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ boxShadow: "0px 2px 4px 0px rgba(13, 16, 19, 0.35)" }}
      >
        {statuses.map((el, i) => (
          <li
            className="w-full p-3 cursor-pointer text-silver hover:text-white hover:bg-dark-2 transition-colors duration-200"
            key={i}
            onClick={() => {
              setActiveStatus(el);
              setIsClicked(false);
            }}
          >
            <span className="">{el.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
