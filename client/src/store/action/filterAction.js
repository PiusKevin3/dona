import axios from "axios";

export const getKategori = () => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    axios({
      method: "GET",
      url: "https://weddingbe.roslianistory.my.id/category",
    })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_CATEGORY", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getNegara = () => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    axios({
      method: "GET",
      url: "https://weddingbe.roslianistory.my.id/country",
    })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_COUNTRY", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getKota = () => {
  return async (dispatch, getState) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    axios({
      method: "GET",
      url: "https://weddingbe.roslianistory.my.id/city",
      params: {
        country_id: getState().filter.countryID,
      },
    })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_CITY", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getVendor = () => {
  return async (dispatch, getState, timeout) => {
    dispatch({ type: "ACTIVATE_LOADING_VENDOR" });
    const loadingTime = 2000;
    timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    await timeout(loadingTime);
    const negara = getState().filter.countryID,
      kota = getState().filter.cityID,
      kategori = getState().filter.categoryID,
      budget = getState().filter.budget;
    let param;
    if (+negara === +0 && +budget === +0 && +kategori === +0 && +kota === +0) {
      param = {
        country_id: 0,
        city_id: 0,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget !== +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        category_id: kategori,
        budget: budget,
      };
    } else if (+negara === +0 && +budget !== +0 && +kategori !== +0) {
      param = {
        category_id: kategori,
        budget: budget,
      };
    } else if (+negara === +0 && +budget !== +0 && +kategori === +0) {
      param = {
        budget: budget,
      };
    } else if (+negara === +0 && +budget === +0 && +kategori !== +0) {
      param = {
        category_id: kategori,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        category_id: kategori,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget === +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        category_id: kategori,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget !== +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        budget: budget,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget !== +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        budget: budget,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
      };
    }
    axios({
      method: "GET",
      url: "https://weddingbe.roslianistory.my.id/vendor",
      params: param,
    })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_VENDOR", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getVendorBspay = () => {
  return async (dispatch, getState, timeout) => {
    dispatch({ type: "ACTIVATE_LOADING_VENDOR" });
    const loadingTime = 2000;
    timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    await timeout(loadingTime);
    const negara = getState().filter.countryID,
      kota = getState().filter.cityID,
      kategori = getState().filter.categoryID,
      budget = getState().filter.budget;
    let param;
    if (+negara === +0 && +budget === +0 && +kategori === +0 && +kota === +0) {
      param = {
        country_id: 0,
        city_id: 0,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget !== +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        category_id: kategori,
        budget: budget,
        bridestory_pay: true,
      };
    } else if (+negara === +0 && +budget !== +0 && +kategori !== +0) {
      param = {
        category_id: kategori,
        budget: budget,
        bridestory_pay: true,
      };
    } else if (+negara === +0 && +budget !== +0 && +kategori === +0) {
      param = {
        budget: budget,
        bridestory_pay: true,
      };
    } else if (+negara === +0 && +budget === +0 && +kategori !== +0) {
      param = {
        category_id: kategori,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        category_id: kategori,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget === +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        category_id: kategori,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget !== +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        budget: budget,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget !== +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        budget: budget,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        bridestory_pay: true,
      };
    }
    axios({
      method: "GET",
      url: "https://weddingbe.roslianistory.my.id/vendor",
      params: param,
    })
      .then(async (response) => {
        dispatch({
          type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const getVendorFlexi = () => {
  return async (dispatch, getState, timeout) => {
    dispatch({ type: "ACTIVATE_LOADING_VENDOR" });
    const loadingTime = 2000;
    timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    await timeout(loadingTime);
    const negara = getState().filter.countryID,
      kota = getState().filter.cityID,
      kategori = getState().filter.categoryID,
      budget = getState().filter.budget;
    let param;
    if (+negara === +0 && +budget === +0 && +kategori === +0 && +kota === +0) {
      param = {
        flexi_schedule: true,
        country_id: 0,
        city_id: 0,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget !== +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        category_id: kategori,
        budget: budget,
        flexi_schedule: true,
      };
    } else if (+negara === +0 && +budget !== +0 && +kategori !== +0) {
      param = {
        category_id: kategori,
        budget: budget,
        flexi_schedule: true,
      };
    } else if (+negara === +0 && +budget !== +0 && +kategori === +0) {
      param = {
        budget: budget,
        flexi_schedule: true,
      };
    } else if (+negara === +0 && +budget === +0 && +kategori !== +0) {
      param = {
        category_id: kategori,
        flexi_schedule: true,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        flexi_schedule: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        flexi_schedule: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        category_id: kategori,
        flexi_schedule: true,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget === +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        category_id: kategori,
        flexi_schedule: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget !== +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        budget: budget,
        flexi_schedule: true,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget !== +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        budget: budget,
        flexi_schedule: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        flexi_schedule: true,
      };
    }
    axios({
      method: "GET",
      url: "https://weddingbe.roslianistory.my.id/vendor",
      params: param,
    })
      .then(async (response) => {
        dispatch({
          type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getVendorBspayFlexi = () => {
  return async (dispatch, getState, timeout) => {
    dispatch({ type: "ACTIVATE_LOADING_VENDOR" });
    const loadingTime = 2000;
    timeout = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    await timeout(loadingTime);
    const negara = getState().filter.countryID,
      kota = getState().filter.cityID,
      kategori = getState().filter.categoryID,
      budget = getState().filter.budget;
    let param;
    if (+negara === +0 && +budget === +0 && +kategori === +0 && +kota === +0) {
      param = {
        country_id: 0,
        city_id: 0,
        flexi_schedule: true,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget !== +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        category_id: kategori,
        budget: budget,
        flexi_schedule: true,
      };
    } else if (+negara === +0 && +budget !== +0 && +kategori !== +0) {
      param = {
        category_id: kategori,
        budget: budget,
        flexi_schedule: true,
        bridestory_pay: true,
      };
    } else if (+negara === +0 && +budget !== +0 && +kategori === +0) {
      param = {
        budget: budget,
        flexi_schedule: true,
        bridestory_pay: true,
      };
    } else if (+negara === +0 && +budget === +0 && +kategori !== +0) {
      param = {
        category_id: kategori,
        bridestory_pay: true,
        flexi_schedule: true,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        flexi_schedule: true,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        flexi_schedule: true,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        category_id: kategori,
        flexi_schedule: true,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget === +0 &&
      +kategori !== +0
    ) {
      param = {
        country_id: negara,
        category_id: kategori,
        flexi_schedule: true,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget !== +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        budget: budget,
        flexi_schedule: true,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota === +0 &&
      +budget !== +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        budget: budget,
        flexi_schedule: true,
        bridestory_pay: true,
      };
    } else if (
      +negara !== +0 &&
      +kota !== +0 &&
      +budget === +0 &&
      +kategori === +0
    ) {
      param = {
        country_id: negara,
        city_id: kota,
        flexi_schedule: true,
        bridestory_pay: true,
      };
    }
    axios({
      method: "GET",
      url: "https://weddingbe.roslianistory.my.id/vendor",
      params: param,
    })
      .then(async (response) => {
        dispatch({
          type: "SUCCESS_GET_VENDOR_BSPAYFLEXI",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const changeInputFilterKota = (e) => {
  return {
    type: "CHANGE_INPUT_FILTER_KOTA",
    payload: e,
  };
};
export const changeInputFilterNegara = (e) => {
  return {
    type: "CHANGE_INPUT_FILTER_NEGARA",
    payload: e,
  };
};
export const changeInputFilterKategori = (e) => {
  return {
    type: "CHANGE_INPUT_FILTER_KATEGORI",
    payload: e,
  };
};
export const changeInputFilterBudget = (e) => {
  return {
    type: "CHANGE_INPUT_FILTER_BUDGET",
    payload: e,
  };
};
