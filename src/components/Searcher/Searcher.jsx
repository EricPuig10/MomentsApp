import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { momentsServices } from "../../services/momentsServices";
import {
  ButtonSubmit,
  CancelBtn,
  ContainerMomentsSearcher,
  DivWithoutSearchingResults,
  FormContSearcher,
  ImgMomentContSearched,
  ImgMomentSearched,
  Lupa,
  MainSearcher,
  MomentCardDivSearched,
  SearchInput,
} from "./Searcher.styled";

export const Searcher = (props) => {
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useState("");
  const [moments, setMoments] = useState([]);

  useEffect(() => {
    getAllMoments();
  }, []);

  const getAllMoments = () => {
    momentsServices.getAllMoments().then((res) => {
      setMoments(res);
    });
  };

  const searchMoment = (data) => {
    momentsServices.searchMoment(data).then((res) => {
      if (res) {
        setSuggestions(res);
      }
    });
  };

  const cancelSearch = () => {
    console.log("search canceled");
    setSuggestions([]);
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchMoment(search);
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMoment(search);
  };

  //   const cancel = () => {
  //     props.cancelSearch();
  //   };
console.log(suggestions)
  return (
    <>
      <MainSearcher>
        <FormContSearcher>
          <Lupa>
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          </Lupa>
          <SearchInput
            onChange={handleChange}
            typeof="search"
            name="search"
            placeholder="Search"
            value={search}
          />
          <CancelBtn onClick={cancelSearch}><i className="fa-solid fa-x fa-s"></i></CancelBtn>
          <Lupa>
            <ButtonSubmit onClick={handleSubmit}>Search</ButtonSubmit>
          </Lupa>
        </FormContSearcher>
        
        <ContainerMomentsSearcher>
          {search === "" ? (
            <>
              {moments.map((moment, key) => (
                <MomentCardDivSearched>
                  <ImgMomentContSearched>
                    <Link key={key} to={`/moment-info/${moment.id}`}>
                      <ImgMomentSearched key={key} src={moment.imgUrl} />
                    </Link>
                  </ImgMomentContSearched>
                </MomentCardDivSearched>
              ))}
            </>
          ) : (
            <>
              {suggestions.length < 1 ? (
                <DivWithoutSearchingResults>
                  Sorry, we did not found "{search}"
                </DivWithoutSearchingResults>
              ) : (
                <>
                  {suggestions.map((moment, key) => (
                    <MomentCardDivSearched>
                      <ImgMomentContSearched>
                        <Link key={key} to={`/moment-info/${moment.id}`}>
                          <ImgMomentSearched key={key} src={moment.imgUrl} />
                        </Link>
                      </ImgMomentContSearched>
                    </MomentCardDivSearched>
                  ))}
                </>
              )}
            </>
          )}
        </ContainerMomentsSearcher>
      </MainSearcher>
    </>
  );
};
