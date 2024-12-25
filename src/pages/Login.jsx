import StatisticsSection from "../components/statistics/StatisticsSection";
import LoginSection from "../components/login/LoginSection";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <StatisticsSection />
      <div className="flex flex-col w-1/2 width-full p-6 gap-3 items-center justify-center min-h-screen bg-[#fafafa]">
        <LoginSection />
        <p className="mt-4 text-sm">
          By signing up, you agree to the{" "}
          <a href="#" className="font-bold">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
