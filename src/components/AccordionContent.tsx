import Avatar from "../assets/img/avatar.png";
import { Matches } from "../interfaces/matches.interface";

type AccordionContentProps = {
  match: Matches;
  place: "homeTeam" | "awayTeam";
};
const AccordionContent = ({ match, place }: AccordionContentProps) => {
  return (
    <div className="lg:w-1/2 w-full grid grid-cols-3 lg:grid-cols-2 gap-2 xl:grid-cols-3">
      {match[place].players.map((player, i) => (
        <div
          className="flex items-center gap-x-2 justify-between md:flex-row flex-col bg-dark-3 p-2 rounded-sm"
          key={i}
        >
          <div className="flex gap-x-2 items-center">
            <img
              className="sm:w-9 w-8 sm:h-9 h-8"
              src={Avatar}
              alt="Player's avatar"
              width={36}
              height={36}
            />
            <p
              className="text-off-white font-semibold truncate sm:text-base text-sm"
              title={player.username}
            >
              {player.username}
            </p>
          </div>
          <p>
            <span className="text-off-white opacity-40 text-xs sm:text-sm">
              Убийств:
            </span>
            <span className="text-gray-50 font-semibold ml-1 sm:text-base text-sm">
              {player.kills}
            </span>
          </p>
        </div>
      ))}
      <div className="flex items-center gap-x-3 lg:gap-x-4 justify-between bg-dark-3 p-2 rounded-sm col-span-3 lg:col-span-2 xl:col-span-3">
        <p className="text-center flex-1/2">
          <span className="text-off-white opacity-40 text-xs sm:text-sm">
            Points:
          </span>
          <span className="text-gray-50 font-semibold ml-1 md:text-base text-sm">
            {match[place].points}
          </span>
        </p>
        <p className="divider text-center flex-1/2">
          <span className="text-off-white opacity-40 text-xs sm:text-sm">
            Место:
          </span>
          <span className="text-gray-50 font-semibold ml-1 md:text-base text-sm">
            {match[place].place}
          </span>
        </p>
        <p className="divider text-center flex-1/2">
          <span className="text-off-white opacity-40 text-xs sm:text-sm">
            Всего убийств:
          </span>
          <span className="text-gray-50 font-semibold ml-1 md:text-base text-sm">
            {match[place].total_kills}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AccordionContent;
