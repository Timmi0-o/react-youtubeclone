import { useRef } from 'react'
import FilterVideoDefault from '../FilterVideoDefault/FilterVideoDefault'
import VideoItemCart from '../VideoItemCart/VideoItemCart'

const MainSectionVideo = ({ showSideBar }) => {
	const mainSectionMargin = useRef()

	return (
		<div
			className={
				'flex flex-wrap bg-[#000000] pl-[72px] pt-[56px] overflow-x-hidden ' +
				(showSideBar ? 'w-[95%] ml-[190px]' : 'w-[100%] ml-[30px]')
			}
			ref={mainSectionMargin}
		>
			<FilterVideoDefault />
			<div className='flex flex-wrap overflow-x-auto mt-[80px]'>
				<VideoItemCart showSideBar={showSideBar} />
			</div>
		</div>
	)
}

export default MainSectionVideo
