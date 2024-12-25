import StatisticsSection from "../components/statistics/StatisticsSection";
import LoginSection from "../components/login/LoginSection";

const Login = () => {
  return (
    <div className="flex gap-2">
      <StatisticsSection />
      <div className="flex flex-col md:w-1/2 w-full md:p-4 py-20 px-4 gap-3 items-center justify-center">
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
