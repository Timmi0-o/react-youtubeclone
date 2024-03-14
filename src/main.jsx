import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Home from './components/screens/Home/Home'
import Me from './components/screens/Me/Me'
import MyChannel from './components/screens/MyChannel/MyChannel'
import PageNotFound from './components/screens/PageNotFound/PageNotFound'
import Shorts from './components/screens/Shorts/Shorts'
import Subs from './components/screens/Subs/Subs'
import VideoHistory from './components/screens/VideoHistory/VideoHistory'
import WatchLaterVideo from './components/screens/WatchLaterVideo/WatchLaterVideo'
import WatchVideo from './components/screens/WatchVideo/WatchVideo'
import store from './redux/store'
import ScrollToTop from './utils/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<Router>
			<ScrollToTop />
			<Routes>
				<Route element={<Header />}>
					<Route path='/' element={<Home />} />
					<Route path='/watching/:id' element={<WatchVideo />} />
					<Route path='/me' element={<Me />} />
					<Route path='/subs' element={<Subs />} />
					<Route path='/shorts' element={<Shorts />} />
					<Route path='/myChannel' element={<MyChannel />} />
					<Route path='/videoHistory' element={<VideoHistory />} />
					<Route path='/watchLaterVideo' element={<WatchLaterVideo />} />
					<Route path='/*' element={<PageNotFound />} />
				</Route>
			</Routes>
		</Router>
	</Provider>
)
