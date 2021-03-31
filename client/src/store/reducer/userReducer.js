const initialState = {
  email: "",
  password: "",
  token: "",
  is_login: false,
  is_signup: false,
  emailPengguna: "",
  kataKunci: "",
  name: "",
  foto: "",
  isLoading: false,
  isLoginFB: false,
  isLoginGoogle: false,
  data: [],
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "ACTIVATE_LOADING":
      return {
        ...userState,
        isLoading: true,
      };
    case "DEACTIVATE_LOADING":
      return {
        ...userState,
        isLoading: false,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        token: action.payload.token,
        data: action.payload,
        name: action.payload.firstName + action.payload.lastName,
        is_login: true,
        isLoading: false,
      };
    case "SUCCESS_LOGOUT":
      return {
        ...userState,
        is_login: false,
        isLoading: false,
      };
    case "MAU_SIGNUP":
      return {
        ...userState,
        is_signup: true,
      };
    case "SUCCESS_SIGNUP":
      return {
        ...userState,
        is_signup: false,
        isLoading: false,
      };
    case "SUCCESS_LOGIN_FB":
      return {
        ...userState,
        isLoginFB: true,
        is_login: true,
        isLoading: false,
        name: action.payload.name,
        foto: action.payload.picture.data.url,
      };
    case "SUCCESS_LOGOUT_FB":
      return {
        ...userState,
        isLoginFB: false,
        is_logout: false,
        isLoading: false,
      };
    case "SUCCESS_LOGIN_GOOGLE":
      return {
        ...userState,
        isLoginGoogle: true,
        is_login: true,
        isLoading: false,
        name: action.payload.profileObj.name,
        foto: action.payload.profileObj.imageUrl,
      };
    case "SUCCESS_LOGOUT_GOOGLE":
      return {
        ...userState,
        isLoginGoogle: false,
        is_logout: false,
        isLoading: false,
      };
    default:
      return userState;
  }
}
