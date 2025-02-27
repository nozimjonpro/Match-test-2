const Status = ({ title, color }: { title: string; color: string }) => {
  return (
    <div
      className="sm:min-w-24 min-w-20 max-w-28 sm:py-1.5 py-1 rounded-sm text-center"
      style={{ backgroundColor: color }}
    >
      <span className="text-white font-semibold sm:text-sm text-xs tracking-wider">
        {title}
      </span>
    </div>
  );
};

export default Status;
