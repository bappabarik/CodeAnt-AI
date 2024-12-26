import assets from "../../assets/assets";
import Input from "./Input";

const SearchBar = ({ setRepos, allRepos }) => {
  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();

    if (keyword === "") {
      setRepos(allRepos);
    } else {
      const filteredRepos = allRepos.filter(
        (repo) =>
          repo.name.toLowerCase().includes(keyword) ||
          repo.language.toLowerCase().includes(keyword)
      );
      setRepos(filteredRepos);
    }
  };

  return (
    <div className="relative w-80">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <assets.icons.searchIcon className="text-[rgba(65,70,81,1)] text-xl" />
      </div>
      <Input
        type={"text"}
        placeholder={"Search Repositories"}
        className="block w-full pl-10 pr-4 py-2 text-[rgba(65,70,81,1)] bg-white border border-[rgba(213,215,218,1)] shadow-sm rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
