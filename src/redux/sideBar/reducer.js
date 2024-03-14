import * as actionTypes from './actionTypes'

const initialState = {
	sideBar: false,
	miniSideBar: false,
	miniSideBarBorderAnimation: false,
}

const sideBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SHOW_HIDE_SIDE_BAR:
			return { ...state, sideBar: state.sideBar ? false : true }
		case actionTypes.SHOW_HIDE_MINIMIZE_BAR:
			return {
				...state,
				miniSideBar: action.payload.pathname.includes('watching')
					? false
					: true,
			}
		default:
			return state
	}
}

export default sideBarReducer
