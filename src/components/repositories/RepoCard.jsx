import assets from "../../assets/assets";

const RepoCard = ({ title, status, language, size, timestamp }) => {
  const timeAgo = (timestamp) => {
    const currentDate = new Date();
    const targetDate = new Date(timestamp * 1000);
    const timeDifference = currentDate - targetDate;

    // Calculate the number of days
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysAgo > 0) {
      return `Updated ${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
    } else {
      return "Updated today";
    }
  };

  return (
    <div className="w-full hover:bg-gray-100 bg-white cursor-pointer md:p-6 p-3 border-b gap-4 flex flex-col">
      <div className=" flex gap-3 items-center">
        <p className="md:text-xl text-lg text-[rgba(24,29,39,1)] font-semibold">
          {title}
        </p>
        <span className="rounded-full h-6 w-16 leading-6 text-center border border-[rgba(178,221,255,1)] bg-[rgba(239,248,255,1)] text-sm text-[rgba(23,92,211,1)]">
          {status}
        </span>
      </div>
      <div className="flex space-x-8 items-center md:text-md text-sm text-[rgba(24,29,39,1)]">
        <span className="flex items-center justify-center gap-2 text-[rgba(24,29,39,1)]">
          {language}{" "}
          <div className="w-2 h-2 bg-[rgba(21,112,239,1)] rounded-full"></div>
        </span>
        <span className="flex items-center gap-2 justify-center text-[rgba(24,29,39,1)]">
          {" "}
          <assets.icons.dbIcon /> {size}KB
        </span>
        <span className="text-[rgba(24,29,39,1)]">{timeAgo(timestamp)}</span>
      </div>
    </div>
  );
};

export default RepoCard;
