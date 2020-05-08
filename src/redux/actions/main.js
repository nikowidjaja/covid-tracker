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


export const get_data = () => {
  return dispatch => {
    axios
      .get("https://pomber.github.io/covid19/timeseries.json?=")
      .then(resp => {
        dispatch(put_data("covid_data", resp.data))
      })
  };
};

export const get_infographics = () => {
  return dispatch => {
    dispatch(toggle_loader(true));
    axios
      .get("https://covid2019-api.herokuapp.com/v2/total")
      .then(resp => {
        dispatch(put_data("total_infographics", resp.data));
      })
      .catch((err)=>{
        console.log(err);
        
      })
      .then(() => {
        dispatch(toggle_loader(false));
      });
  }
}

export const get_timeseries = () => {
  return dispatch => {
    axios
      .get("https://covid2019-api.herokuapp.com/v2/timeseries/global")
      .then(resp => {
        dispatch(put_data("global_timeseries", resp.data));
      })
  }
}