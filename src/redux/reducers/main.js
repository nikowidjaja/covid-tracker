const main_state = {
	filter: "",
	covid_data: false,
	loader: false,
	lang_json: false,
	total_infographics: false,
	global_timeseries: false,
}

const main = (state = main_state, action) => {
	switch (action.type) {
		case "PUT_DATA":
			return { ...state, [action.key]: action.data };
		case "TOGGLE_LOADER":
			return { ...state, loader: action.data }
		default:
			return state;
	}
};

export default main;