import { useSelector } from "react-redux";
import Container from "../components/common/Container";
import RepoList from "../components/repositories/RepoList";
import GetRepos from "../services/GetRepos";
import { useEffect, useState } from "react";

const Repositories = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [repos, setRepos] = useState([]);
  const [allRepos, setAllRepos] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleRefresh = () => {
    setRefreshTrigger(!refreshTrigger);
    localStorage.removeItem("repos");
  };

  useEffect(() => {
    if (userData) {
      const fetchRepos = async () => {
        setLoading(true);
        try {
          const repos = await GetRepos(userData.id);
          setRepos(repos);
          setAllRepos(repos);
          localStorage.setItem("repos", JSON.stringify(repos));
          setLoading(false);
        } catch (error) {
          alert("!Unable to load your repositories");
          console.error(error);
          setLoading(false);
        }
      };

      const cacheRepos = localStorage.getItem("repos");
      if (cacheRepos) {
        setRepos(JSON.parse(cacheRepos));
        setAllRepos(JSON.parse(cacheRepos));
        setLoading(false);
      } else fetchRepos(); // Call the async function
    }
  }, [userData, refreshTrigger]);

  return (
    <Container>
      <div className="border rounded-lg w-full pb-1 min-h-screen">
        {/* TODO:: This propdrilling can be handled using redux setting up a repoSilce but due to time constrains I had to do this */}
        <RepoList
          repos={repos}
          handleRefresh={handleRefresh}
          loading={loading}
          setRepos={setRepos}
          allRepos={allRepos}
          setAllRepos={setAllRepos}
        />
      </div>
    </Container>
  );
};

export default Repositories;
