import axios from "axios";

export const toggle_loader = data => ({
  type: "TOGGLE_LOADER",
  data: data
});

export const put_data = (key, data) => ({
  type: "PUT_DATA",
  key,
  data
});


export const get_campus = q => {
  return dispatch => {
    dispatch(toggle_loader(true));
    axios
      .get(`api/options/?campus=${q}`)
      .then(resp => {
        dispatch(put_data("campus", resp.data.data));
      })
      .catch(err => {
        if (err.response) {
          console.log("not_logged_in");
        }
      })
      .then(() => {
        dispatch(toggle_loader(false));
      });
  };
};

export const get_profile_by_id = id => {
  return dispatch => {
    dispatch(toggle_loader(true));
    axios
      .get("/api/profile?reg_id=" + id)
      .then(resp => {
        dispatch(put_data("profile", resp.data.data));
      })

      .then(() => {
        dispatch(toggle_loader(false));
      });
  };
};

export const get_data=()=>{
  return async dispatch=>{
    dispatch(toggle_loader(true));
    await axios
    .get("https://pomber.github.io/covid19/timeseries.json?=")
    .then(resp=>{

      dispatch(put_data("covid_data",resp.data));

    })
    .then(() => {
      dispatch(toggle_loader(false));
    });
  };
};

export const get_infographics=()=>{
  return async dispatch=>{
    dispatch(toggle_loader(true));
    await axios
    .get("https://covid2019-api.herokuapp.com/v2/total")
    .then(resp=>{
      dispatch(put_data("total_infographics",resp.data));
    })
    .then(() => {
      dispatch(toggle_loader(false));
    });
  }
}

export const get_timeseries=()=>{
  return async dispatch=>{
    dispatch(toggle_loader(true));
    await axios
    .get("https://covid2019-api.herokuapp.com/v2/timeseries/global")
    .then(resp=>{
      dispatch(put_data("global_timeseries",resp.data));
    })
    .then(()=>{
      dispatch(toggle_loader(false));
    });
  }
}