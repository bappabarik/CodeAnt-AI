import Container from "../components/common/Container";
import RepoList from "../components/repositories/RepoList";

const Repositories = () => {
  return (
    <Container>
      <div className="border rounded-lg w-full pb-1 min-h-screen">
        <RepoList />
      </div>
    </Container>
  );
};

export default Repositories;
