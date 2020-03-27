const main_state = {
    // is_login : null,
	// login : {
	// 	user : {
	// 		regist_id : false
	// 	}
	// },
	covid_data:[],
	loader: false,
    lang_json: false,
	// campus : [],
	// profile: {
	// 	t_open : false
	// },
	// profile_temp:[],
	// login_data:{
	// 	user : false
	// }
}

const main = (state = main_state, action) => {
    switch (action.type) {
		case "PUT_DATA":
			return { ...state, [action.key]: action.data };
		case "TOGGLE_LOADER":
			return { ...state, loader: action.data}
		default:
			return state;
	}
};

export default main;