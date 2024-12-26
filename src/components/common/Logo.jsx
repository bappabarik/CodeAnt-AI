import assets from "../../assets/assets.jsx";

const Logo = () => (
  <div className="flex gap-4 mb-6 mt-2">
    <img src={assets.logos.AntLogo} alt="" />
    <img src={assets.logos.CodeAntAILogo} className="w-28" alt="" />
  </div>
);

export default Logo;
