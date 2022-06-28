import { NavBar } from "../components/NavBarDownMbl";
import { NavBarDownMbl } from "../components/NavBarDownMbl/NavBarDownMbl";
import { Searcher } from "../components/Searcher/Searcher";

export const SearchPage = () => {
    return (
      <section>
        <NavBar />
        <Searcher/>
        <NavBarDownMbl />
      </section>
    );
  };