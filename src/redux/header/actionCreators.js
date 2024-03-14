import * as actionTypes from './actionTypes'

export const showAndHideCreateVideoModal = () => {
	return {
		type: actionTypes.SHOW_HIDE_CREATE_VIDEO_MODAL,
	}
}

export const showAndHideAllowsModal = () => {
	return {
		type: actionTypes.SHOW_HIDE_ALLOWS_MODAL,
	}
}

export const showAndHideProfileModal = () => {
	return {
		type: actionTypes.SHOW_HIDE_PROFILE_MODAL,
	}
}
