import { useState } from 'react'
import Header from '../../layout/Header/Header'
import MainSectionVideo from '../../layout/MainSectionVideo/MainSectionVideo'
import SideBar from '../../layout/SideBar/SideBar'

const Home = () => {
	const [showSideBar, setShowSideBar] = useState(false)
	const [showModalProfile, setShowModalProfile] = useState(false)

	return (
		<div className='Home overflow-hidden h-[100%] pb-[20px] bg-black z-[100]'>
			<Header
				showSideBar={showSideBar}
				setShowSideBar={setShowSideBar}
				showModalProfile={showModalProfile}
				setShowModalProfile={setShowModalProfile}
			/>
			<SideBar showSideBar={showSideBar} />
			<MainSectionVideo showSideBar={showSideBar} />
		</div>
	)
}

export default Home
