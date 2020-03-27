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
  return dispatch=>{
    dispatch(toggle_loader(true));
    axios
    .get("https://pomber.github.io/covid19/timeseries.json?=")
    .then(resp=>{
      // console.log(resp.data);
      dispatch(put_data("covid_data",resp.data));
      //resp.data["Indonesia"][resp.data["Indonesia"].length-1]
    })
    .then(() => {
      dispatch(toggle_loader(false));
    });
  };
};