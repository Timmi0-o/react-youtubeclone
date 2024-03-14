import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './header/reducer'
import sideBarReducer from './sideBar/reducer'
import watchVideoReducer from './watchVideo/reducer'
import profileModalReducer from './profileModal/reducer'

const store = configureStore({
	reducer: {
		header: headerReducer,
		sideBar: sideBarReducer,
		watchVideo: watchVideoReducer,
		profileModal: profileModalReducer,
	},
})

export default store
