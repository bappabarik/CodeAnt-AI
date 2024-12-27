import StatCard from "./StatCard";
import assets from "../../assets/assets";
import { useState, useEffect } from "react";
import axios from "axios";

const StatisticsSection = () => {
  const [loading, setLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);
  const [stats, setStats] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = import.meta.env.VITE_MOCK_DATA_API_URL;

      try {
        const statsData = JSON.parse(localStorage.getItem("stats"));
        if (!statsData) {
          const response = await axios.get(apiUrl);
          console.log("Data fetched successfully:", response.data[0]);
          setStats(response.data[0]);
          setLoading(false);
          localStorage.setItem("stats", JSON.stringify(response.data[0]));
        } else {
          setStats(statsData);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 500);

    const randomInterval = setInterval(() => {
      setRandomNumber((prev) => prev + Math.floor(Math.random() * 10));
    }, 50); // increase every 50ms

    // Clear interval once data is loaded
    return () => clearInterval(randomInterval);
  }, []);

  return (
    <div className="relative md:flex flex-col items-center justify-center min-h-screen w-1/2 border-[1px] border-[rgba(233,234,235,1)] hide">
      <div className="absolute flex flex-col top-48">
        <StatCard>
          <div className="flex gap-2 pl-5 pr-16 mb-4">
            <img src={assets.logos.AntLogo} alt="" />
            <h3 className="md:text-lg font-bold text-gray-800">
              AI to Detect & Autofix Bad Code
            </h3>
          </div>
          <hr className="border-[1px] border-[rgba(230,232,240,1)]" />
          <div className="grid grid-cols-3 gap-4 pl-5 pr-8 py-2 mt-5">
            {[
              {
                title: "Language Support",
                value: `${loading ? randomNumber : stats?.languageSupport}+`,
              },
              {
                title: "Developers",
                value: `${loading ? randomNumber : stats?.developers}K`,
              },
              {
                title: "Hours Saved",
                value: `${loading ? randomNumber : stats?.hoursSaved}K`,
              },
            ].map(({ title, value }) => (
              <div className="text-center w-[123px]" key={title}>
                <p className="text-xl font-bold text-gray-800">{value}</p>
                <p className="text-sm text-[rgba(23,23,23,1)]">{title}</p>
              </div>
            ))}
          </div>
        </StatCard>
        <div className="absolute -right-6 top-[9.6rem]">
          <StatCard>
            <div className="flex items-start py-0 px-8 space-x-12">
              <div>
                <img src={assets.icons.PieChartIcon} alt="" className="mb-4" />
                <p className="font-bold">Issues Fixed</p>
                <p className="text-3xl font-bold text-gray-800 w-[108px]">
                  {loading ? randomNumber : stats?.issuesFixed}K+
                </p>
              </div>
              <div>
                <p className="text-blue-600 font-bold w-[40px]">
                  ↑{loading ? randomNumber : stats?.thisWeek}%
                </p>
                <p className="text-sm">This week</p>
              </div>
            </div>
          </StatCard>
        </div>
      </div>
      {/* Watermark positioned at the bottom-left corner */}
      <img
        src={assets.logos.AntLogoWatermark}
        alt=""
        className="absolute bottom-0 left-0"
      />
    </div>
  );
};
export default StatisticsSection;
