import * as actionTypes from './actionTypes'

const labelATheme = ['Как на устройстве', 'Темная', 'Светлая']

const initialState = {
	isTheme: 'CLOSE',
	nameTheme: 'Как на устройстве',
}

const profileModalReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SHOW_HIDE_THEME_MODAL:
			return { ...state, isTheme: state.isTheme === 'CLOSE' ? 'OPEN' : 'CLOSE' }
		case actionTypes.RENAME_THEME_MODAL:
			return {
				...state,
				nameTheme: labelATheme.find((label) => label === action.payload),
			}
		default:
			return state
	}
}

export default profileModalReducer
