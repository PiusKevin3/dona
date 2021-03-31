import axios from "axios";

export const doLogin = () => {
  return async (dispatch, getState) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    axios({
      method: "GET",
      url: "https://weddingbe.roslianistory.my.id/login",
      params: {
        email: getState().user.emailPengguna,
        password: getState().user.kataKunci,
      },
    })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("is_login", true);
          localStorage.setItem(
            "nama",
            `${response.data.firstName} ${response.data.lastName}`
          );
        }
      })
      .catch(async (response) => {
        // kondisi kalau salah password
        // eslint-disable-next-line
        if (response == "Error: Request failed with status code 403") {
          alert("password anda salah!");
          dispatch({ type: "DEACTIVATE_LOADING" });
        }
        // kondisi kalau belum terdaftar
        // eslint-disable-next-line
        else if (response == "Error: Request failed with status code 404") {
          await dispatch(doSignUp);
          dispatch({ type: "MAU_SIGNUP" });
        }
      });
  };
};

export const doSignUp = () => {
  return async (dispatch, getState) => {
    const namadepan = getState().user.firstName;
    const namabelakang = getState().user.lastName;
    await dispatch({ type: "ACTIVATE_LOADING" });
    const bodyRequest = {
      email: getState().user.emailPengguna,
      password: getState().user.kataKunci,
      first_name: getState().user.firstName,
      last_name: getState().user.lastName,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("https://weddingbe.roslianistory.my.id/client", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      })
      .then(async (getState) => {
        dispatch({ type: "SUCCESS_SIGNUP" });
        localStorage.setItem("nama", `${namadepan} ${namabelakang}`);
        localStorage.setItem("is_login", true);
      })
      .catch(function (error) {
        console.log(error);
        dispatch({ type: "DEACTIVATE_LOADING" });
      });
  };
};

export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};

export const doSignOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("is_login");
  localStorage.removeItem("nama");
  return {
    type: "SUCCESS_LOGOUT",
  };
};

export const logInFB = (response) => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    if (response.hasOwnProperty("accessToken")) {
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("nama", response.name);
      localStorage.setItem("foto", response.picture.data.url);
      localStorage.setItem("is_login", true);
      localStorage.setItem("isLoginFB", true);
      dispatch({
        type: "SUCCESS_LOGIN_FB",
        payload: response,
      });
    } else {
      await dispatch({ type: "DEACTIVATE_LOADING" });
      // alert("anda belum berhasil login");
    }
  };
};
export const logOutFB = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("is_login");
  localStorage.removeItem("isLoginFB");

  return {
    type: "SUCCESS_LOGOUT_FB",
  };
};

export const logInGoogle = (response) => {
  return async (dispatch) => {
    await dispatch({ type: "ACTIVATE_LOADING" });
    if (response.hasOwnProperty("accessToken")) {
      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("is_login", true);
      localStorage.setItem("isLoginGoogle", true);
      localStorage.setItem("nama", response.profileObj.name);
      localStorage.setItem("foto", response.profileObj.imageUrl);
      dispatch({
        type: "SUCCESS_LOGIN_GOOGLE",
        payload: response,
      });
    } else {
      await dispatch({ type: "DEACTIVATE_LOADING" });
      // alert("anda belum berhasil login");
    }
  };
};

export const logOutGoogle = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("is_login");
  localStorage.removeItem("isLoginGoogle");
  return {
    type: "SUCCESS_LOGOUT_GOOGLE",
  };
};
