import { useSelector } from 'react-redux'
import FilterVideoDefault from '../FilterVideoDefault/FilterVideoDefault'
import VideoItemCart from '../VideoItemCart/VideoItemCart'

const MainSectionVideo = () => {
	const showSidebar = useSelector((state) => state.sideBar.sideBar)

	const nameTheme = useSelector((state) => state.profileModal.nameTheme)
	console.log('nameTheme', nameTheme)

	return (
		<div
			className={
				'pt-[56px] max-w-[2800px] ' +
				(showSidebar ? 'pl-[260px] ' : 'pl-[94px] ') +
				((nameTheme === 'Темная' || 'Как на устройстве') && ' bg-black ') +
				(nameTheme === 'Светлая' && ' bg-white ')
			}
		>
			<div
				className={
					'fixed w-screen z-10 ' +
					(nameTheme === 'Темная' && ' bg-black ') +
					(nameTheme === 'Светлая' && ' bg-white ')
				}
			>
				<FilterVideoDefault />
			</div>
			<div className='flex flex-wrap mt-[80px]'>
				<VideoItemCart />
			</div>
		</div>
	)
}

export default MainSectionVideo
