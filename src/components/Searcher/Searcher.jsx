import { useState } from "react";
import { Link } from "react-router-dom";
import { momentsServices } from "../../services/momentsServices";
import { ImgMomentCont, MomentCardDiv } from "../MomentCard/MomentCard.styled";
import { ImageCont, ImageOfMoment } from "../MomentInfo/MomentInfo.styled";
import { ContainerMoments } from "../MomentsList/MomentsList.styled";
import {
  ButtonSubmit,
  ContainerMomentsSearcher,
  ContainerSearchedMoments,
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

  const searchMoment = (data) => {
    momentsServices.searchMoment(data).then((res) => {
      if (res) {
        setSuggestions(res);
      }
    });
  };

  //   const cancelSearch = () => {
  //     console.log("search canceled");
  //     setSuggestions();
  //     setSearch();
  //   };

  const handleChange = (e) => {
    console.log(search);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    searchMoment(search);
  };

  //   const cancel = () => {
  //     props.cancelSearch();
  //   };
  console.log(suggestions);
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
          <Lupa>
            <ButtonSubmit onClick={handleSubmit}>Search</ButtonSubmit>
          </Lupa>
        </FormContSearcher>
        <ContainerMomentsSearcher>
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
        </ContainerMomentsSearcher>
      </MainSearcher>
    </>
  );
};
