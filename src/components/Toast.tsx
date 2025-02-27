import { useEffect, useState } from "react";
import Alert from "../assets/img/Alert.png";

const Toast = ({ error }: { error: unknown }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (error) {
      const timer1 = setTimeout(() => {
        setVisible(true);
      }, 2000);

      const timer2 = setTimeout(() => {
        setVisible(false);
      }, 5000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [error]);

  return (
    <div
      className={`bg-dark-3 p-6 flex items-center gap-x-2.5 w-max rounded-sm fixed z-20 top-10 right-10 transition-transform duration-300 ${
        visible ? "translate-x-0" : "translate-x-[calc(100%+40px)]"
      }`}
    >
      <img
        className="w-7 h-7"
        src={Alert}
        alt="alert icon"
        width={28}
        height={28}
      />
      <p className="text-lg font-medium text-white">
        Ошибка: не удалось загрузить информацию
      </p>
    </div>
  );
};

export default Toast;
