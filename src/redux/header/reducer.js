import * as actionTypes from './actionTypes'

const initialState = {
	createVideo: false,
	allows: false,
	profile: false,
}

const headerReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SHOW_HIDE_CREATE_VIDEO_MODAL:
			return { ...state, createVideo: state.createVideo ? false : true }
		case actionTypes.SHOW_HIDE_ALLOWS_MODAL:
			return { ...state, allows: state.allows ? false : true }
		case actionTypes.SHOW_HIDE_PROFILE_MODAL:
			return { ...state, profile: state.profile ? false : true }
		default:
			return state
	}
}

export default headerReducer
