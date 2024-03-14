/* eslint-disable react/prop-types */
const VideoTimelineAndSetting = ({ nowIdVideo }) => {
	const linksInstrumentsVideo = [
		{ src: '/public/svg/playVideo.svg', id: 1 },
		{ src: '/public/svg/nextVideo.svg', id: 2 },
		{
			src: '/public/svg/soundValue.svg',
			id: 3,
			soundSetting: true,
			idSound: 4,
		},
	]
	const videoSetting = [
		{ img: '/public/svg/subtitles.svg', id: 1 },
		{ img: '/public/svg/settingVideo.svg', id: 2 },
		{ img: '/public/svg/iconInIcon.svg', id: 3 },
		{ img: '/public/svg/wideScreen.svg', id: 4 },
		{ img: '/public/svg/fullScreen.svg', id: 5 },
	]
	return (
		<div className='flex flex-col'>
			<div className='mt-[-50px] mx-[12px] h-[4px] bg-gradient-to-r from-[#f00] from-[90%] to-[#ffffff] box-content hover:h-[6px] hover:mt-[-51px]'></div>
			<div className='absolute px-[12px] flex justify-between w-[100%] mt-[-48px] h-[48px]'>
				<div className='flex justify-start items-center h-[48px]'>
					{linksInstrumentsVideo.map((url) => (
						<div className='flex' key={url.id}>
							<img className='p-[6px]' src={url.src} alt='' />
							{url?.soundSetting == true && (
								<img
									className='pr-[5px]'
									key={url.idSound}
									src='/public/svg/home.svg'
								/>
							)}
						</div>
					))}
					<span className='text-[13px] font-normal'>
						0{Math.floor(Math.random() * 5)}:
						{Math.floor(Math.random() * 50) > 10
							? Math.floor(Math.random() * 50) + 10
							: '10'}
						/ {nowIdVideo.time}
					</span>
				</div>
				<div className='flex'>
					{videoSetting.map((url) => (
						<img key={url.id} src={url.img} alt='' />
					))}
				</div>
			</div>
		</div>
	)
}

export default VideoTimelineAndSetting
