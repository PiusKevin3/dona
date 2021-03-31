const initialState = {
  isLoadingVendor: false,
  dataKategori: [],
  dataKota: [],
  dataNegara: [],
  dataVendor: [],
  categoryID: 0,
  cityID: 0,
  countryID: 0,
  budget: 0,
};

export default function filterReducer(filterState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_FILTER_NEGARA":
      return {
        ...filterState,
        countryID: action.payload,
      };
    case "CHANGE_INPUT_FILTER_KOTA":
      return {
        ...filterState,
        cityID: action.payload,
      };
    case "CHANGE_INPUT_FILTER_KATEGORI":
      return {
        ...filterState,
        categoryID: action.payload,
      };
    case "CHANGE_INPUT_FILTER_BUDGET":
      return {
        ...filterState,
        budget: action.payload,
      };
    case "ACTIVATE_LOADING_VENDOR":
      return {
        ...filterState,
        isLoadingVendor: true,
      };
    case "SUCCESS_GET_CATEGORY":
      return {
        ...filterState,
        dataKategori: action.payload,
      };
    case "SUCCESS_GET_COUNTRY":
      return {
        ...filterState,
        dataNegara: action.payload,
      };
    case "SUCCESS_GET_CITY":
      return {
        ...filterState,
        dataKota: action.payload,
      };
    case "SUCCESS_GET_VENDOR":
      return {
        ...filterState,
        dataVendor: action.payload,
        isLoadingVendor: false,
      };
    case "SUCCESS_GET_VENDOR_BSPAYFLEXI":
      return {
        ...filterState,
        dataVendor: action.payload,
        isLoadingVendor: false,
      };
    default:
      return filterState;
  }
}
