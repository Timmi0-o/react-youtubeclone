import * as actionTypes from './actionTypes'

export const showAndHideThemeModal = () => {
	return {
		type: actionTypes.SHOW_HIDE_THEME_MODAL,
	}
}

export const renameLabelTheme = (link) => {
	return {
		type: actionTypes.RENAME_THEME_MODAL,
		payload: link,
	}
}
