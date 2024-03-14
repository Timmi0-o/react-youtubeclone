import * as actionTypes from './actionTypes'

const initialState = {
	openAndCloseWindowDisSubsOrCancel: 'CLOSE',
	// isCloseDeleteSubWindow: false,
}

const watchVideoReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SHOW_DIS_SUBS:
			return {
				...state,
				openAndCloseWindowDisSubsOrCancel:
					state.openAndCloseWindowDisSubsOrCancel == 'CLOSE' ? 'OPEN' : 'CLOSE',
			}
		// case actionTypes.CLOSE_DIS_SUBS:
		// 	return {
		// 		...state,
		// 		isCloseDeleteSubWindow: state.isCloseDeleteSubWindow ? false : true,
		// 	}

		default:
			return state
	}
}

export default watchVideoReducer
