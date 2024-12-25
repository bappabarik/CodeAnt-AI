import StatCard from "./StatCard";
import assets from "../../assets/assets";

const StatisticsSection = () => {
  return (
    <div className="relative md:flex flex-col items-center justify-center min-h-screen w-[50%] hidden border-[1px] border-[rgba(233,234,235,1)]">
      <div className="absolute flex flex-col top-48">
        <StatCard>
          <div className="flex gap-2 pl-5 pr-16 mb-4">
            <img src={assets.logos.AntLogo} alt="" />
            <h3 className="text-lg font-bold text-gray-800">
              AI to Detect & Autofix Bad Code
            </h3>
          </div>
          <hr className="border-[1px] border-[rgba(230,232,240,1)]" />
          <div className="grid grid-cols-3 gap-4 pl-5 pr-8 py-2 mt-5">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">30+</p>
              <p className="text-sm text-gray-500">Language Support</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">10K+</p>
              <p className="text-sm text-gray-500">Developers</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">100K+</p>
              <p className="text-sm text-gray-500">Hours Saved</p>
            </div>
          </div>
        </StatCard>
        <div className="absolute -right-6 top-[9.6rem]">
          <StatCard>
            <div className="flex items-start py-0 px-8 space-x-12">
              <div>
                <img src={assets.icons.PieChartIcon} alt="" className="mb-4" />
                <p className="font-bold">Issues Fixed</p>
                <p className="text-3xl font-bold text-gray-800">500K+</p>
              </div>
              <div>
                <p className="text-blue-600 font-bold">↑14%</p>
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
