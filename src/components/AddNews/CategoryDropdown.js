import React, { useState, useEffect } from "react";
import DataService from "../../services/service";

const CategoryDropDown = ({ getValue }) => {
  //   const [states, setStates] = useState([]);

  const [categories, setCategory] = useState([]);
  //   const [cities, setCities] = useState([]);

  // const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    async function getCategory() {
      const categoryResponse = await DataService.findAllCategories();
      //   const cityResponse = await localityService.getCitiesByState();

      setCategory(
        categoryResponse.data.map((data) => ({
          categoryName: data.category_name,
          categoryId: data.category_id,
        }))
      );
      //   setCities(
      //     cityResponse.data.map((data) => ({
      //       cityName: data.c_name,
      //       cityId: data.c_id,
      //       cityStateId: data.s_id,
      //     }))
      //   );
    }
    getCategory();
  }, []);

  //   const onChangeHandler = (event) => {
  //     const filtered = cities.filter(
  //       (city) => city.cityStateId === parseInt(event.target.value)
  //     );
  //     setFilteredCities(filtered);
  //   };

  const onChangeHandler = (e) => {
    const categoryValue = parseInt(e.target.value);
    getValue(categoryValue);
  };

  return (
    <div>
      {/* <select className="form-control" onChange={onChangeHandler} required>
        <option defaultChecked>--Select Category--</option>
        {states.map(({ stateId, stateName }) => (
          <option key={stateId} value={stateId}>
            {stateName}
          </option>
        ))}
      </select> */}

      <select className="form-control" onChange={onChangeHandler} required>
        <option defaultChecked>--Select Category--</option>
        {categories.map(({ categoryId, categoryName }) => (
          <option key={categoryId} value={categoryId}>
            {categoryName}
          </option>
        ))}
      </select>

      {/* <select className="form-control" onChange={handleCityIdChange} required>
        <option defaultChecked>--Select City--</option>
        {filteredCities.map(({ cityId, cityName }) => (
          <option key={cityId} value={cityId}>
            {cityName}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default CategoryDropDown;
