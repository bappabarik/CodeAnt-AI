import { useState } from "react";
import TabSelector from "./TabSelector";
import AuthProviderButton from "./AuthProviderButton";
import assets from "../../assets/assets";

const LoginSection = () => {
  const [activeTab, setActiveTab] = useState("SAAS");

  const saasAuthProviders = [
    {
      icon: <assets.logos.GitHubLogo className=" text-2xl" />,
      label: "Sign in with GitHub",
      provider: "github",
    },
    {
      icon: <assets.logos.BitbucketLogo className=" text-2xl text-[#2684FF]" />,
      label: "Sign in with Bitbucket",
      provider: "bitbucket",
    },
    {
      icon: (
        <assets.logos.AzureDevopsLogo className=" text-2xl text-[#008AD7]" />
      ),
      label: "Sign in with Azure DevOps",
      provider: "azure-devops",
    },
    {
      icon: <img src={assets.logos.GitLabLogo} alt="" />,
      label: "Sign in with GitLab",
      provider: "gitlab",
    },
  ];

  const selfHostedAuthProviders = [
    {
      icon: <img src={assets.logos.GitLabLogo} alt="" />,
      label: "Sign in with Self Hosted GitLab",
      provider: "self-hosted-gitlab",
    },
    {
      icon: <assets.logos.SSOLogo className=" text-2xl" />,
      label: "Sign in with SSO",
      provider: "sso",
    },
  ];

  const handleLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Replace with `authService.loginWithProvider(provider)`
  };

  const authProviders =
    activeTab === "SAAS" ? saasAuthProviders : selfHostedAuthProviders;

  return (
    <div className="shadow-[0_1px_2px_rgba(10,13,18,0.05)] bg-white rounded-xl w-full flex items-center justify-center flex-col space-y-4 border-[1px] border-[rgba(233,234,235,1)">
      <div className="border-[1px] border-b-[rgba(213,215,218,1)] rounded-t-xl p-4 gap-4 w-full flex flex-col items-center justify-center">
        <span className="flex gap-4 items-center justify-center my-5">
          <img
            src={assets.logos.AntLogo}
            alt=""
            className="w-[35.62px] h-[40px]"
          />
          <img src={assets.logos.CodeAntAILogo} alt="" />
        </span>
        <h1 className="md:text-3xl text-2xl font-bold mb-4">
          Welcome to CodeAnt AI
        </h1>
        {/* Tab Selector */}
        <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      {/* <hr className="border-[1px] border-[rgba(230,232,240,1)]" /> */}
      <div className="flex flex-col gap-4 py-6 h-[326px]">
        {authProviders.map(({ icon, label, provider }) => (
          <AuthProviderButton
            key={provider}
            icon={icon}
            label={label}
            onClick={() => handleLogin(provider)}
          />
        ))}
      </div>
    </div>
  );
};

export default LoginSection;
