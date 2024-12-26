import assets from "../../assets/assets";
import Button from "../common/Button";
import SearchBar from "../common/SearchBar";
import RepoCard from "./RepoCard";
import "../../styles/RepoList.css";

const RepoList = ({
  repos,
  handleRefresh,
  loading,
  setRepos,
  allRepos,
  setAllRepos,
}) => {
  return (
    <div className="w-full bg-white rounded-t-lg">
      <div className="grid md:grid-cols-2 grid-c-1 w-full md:p-6 p-4 gap-5">
        <div className=" flex flex-col gap-1">
          <p className="text-xl font-bold text-[rgba(24,29,39,1)]">
            Repositories
          </p>
          <p className="text-sm text-[rgba(65,70,81,1)]">
            {repos.length} Total Repositories
          </p>
        </div>
        <div className=" flex gap-2 items-end justify-end item-left flex-wrap">
          <Button
            icon={
              <assets.icons.refreshIcon className={loading && "animate-spin"} />
            }
            label={"Refresh All"}
            className={
              "font-normal shadow-sm border w-auto border-[rgba(213,215,218,1)]"
            }
            onclick={handleRefresh}
          />
          <Button
            icon={<assets.icons.plusIcon />}
            label={"Add Repositories"}
            className={
              "font-normal shadow-sm w-auto bg-[rgba(21,112,239,1)] text-white"
            }
          />
        </div>
        <SearchBar
          setRepos={setRepos}
          repos={repos}
          allRepos={allRepos}
          setAllRepos={setAllRepos}
        />
      </div>
      <ul>
        {!loading ? (
          repos?.map((repo) => (
            <li key={repo.id}>
              <RepoCard
                title={repo.name}
                status={repo.status ? "Public" : "Private"}
                language={repo.language}
                size={repo.memory}
                date={"Updated 6 days ago"}
              />
            </li>
          ))
        ) : (
          <h1 className="m-20">Loading...</h1>
        )}
      </ul>
    </div>
  );
};

export default RepoList;
