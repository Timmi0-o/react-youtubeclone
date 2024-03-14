import * as actionTypes from './actionTypes'

export const showAndHideSideBar = (location) => {
	return {
		type: actionTypes.SHOW_HIDE_SIDE_BAR,
		payload: location,
	}
}

export const showAndHideMiniSideBar = (location) => {
	return {
		type: actionTypes.SHOW_HIDE_MINIMIZE_BAR,
		payload: location,
	}
}
