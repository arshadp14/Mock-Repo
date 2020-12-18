import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllNews } from "../actions/fetch_all_news";
import { fetchAllCities } from "../actions/fetch_all_cities";
import { fetchAllStates } from "../actions/fetch_all_states";
import { fetchAllCategories } from "../actions/fetch_all_categories";

import SearchByCity from "./SearchByCity";
import SearchByCategories from "./SearchByCategories";
import CardUI from "./cardUI";
import SearchByTitle from "./SearchByTitle";
export const AllNews = () => {
  //----- redux and dispatch the action
  const news = useSelector((state) => state.FetchAllNews);
  const cities = useSelector((state) => state.FetchAllCities);
  const states = useSelector((state) => state.FetchAllStates);
  const categories = useSelector((state) => state.FetchAllCategories);
  const dispatch = useDispatch();
  const getTechNews = () => dispatch(fetchAllNews());
  const getAllCities = () => dispatch(fetchAllCities());
  const getAllStates = () => dispatch(fetchAllStates());
  const getAllCategories = () => dispatch(fetchAllCategories());
  useEffect(() => {
    getTechNews();
    getAllCities();
    getAllStates();
    getAllCategories();
  }, []);

  // console.log("from comp cities"+ cities.allcities);
  // console.log("Form component news"+JSON.stringify(techSelector.allNews));

  var mostRead = news.allNews.sort((a, b) =>
    a.readcount < b.readcount ? 1 : b.readcount < a.readcount ? -1 : 0
  );

  console.log(mostRead);

  return (
    <React.Fragment>
      <SearchByCity news={news.allNews} city={cities.allcities}></SearchByCity>
      <SearchByCategories
        news={news.allNews}
        categories={categories.allcategories}
      ></SearchByCategories>
      <SearchByTitle news={mostRead}></SearchByTitle>

      {/* <CardUI data={mostRead} type="Most Read"></CardUI> */}
    </React.Fragment>
  );
};

export default AllNews;
