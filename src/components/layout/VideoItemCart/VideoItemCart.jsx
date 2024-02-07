import 'react-html5video/dist/styles.css'
import './VideoItemCart.css'
import { videoItem } from './VideoItemCartLink'

const VideoItemCart = ({ showSideBar }) => {
	// const [imgHidden, setImgHidden] = useState(false)

	// console.log('showVideo', imgHidden)
	return (
		<>
			{videoItem.map((link, index) => (
				<div
					className={
						'relative flex flex-col mr-[10px] mb-[20px]  rounded-[10px] ' +
						(showSideBar ? 'w-[315px] h-[290px]' : 'w-[350px] h-[310px]')
					}
					key={index}
				>
					{/* Превью и видео */}
					<div
						className={
							'relative h-[200px] flex justify-end items-end ' +
							(showSideBar ? 'w-[310px]' : 'w-[340px]')
						}
					>
						<img
							className={
								'absolute rounded-[14px] hover:rounded-[0px] hover:duration-500 hover:scale-x-[1.006] ' +
								(showSideBar ? 'w-[310px] h-[180px] ' : 'w-[340px] h-[200px] ')
							}
							src={link.img}
						/>

						<span className='text-white bg-black text-[14px] rounded-[5px] px-[2px] mr-[4px] mb-[4px] z-[10]'>
							{link.time}
						</span>
					</div>
					{/* Секция с описанием и авой юзера */}
					<div className='flex mt-[10px] h-[100px]'>
						<div className='w-[60px]'>
							<img
								className='size-[36px] rounded-[50%]'
								src={link.ava}
								alt=''
							/>
						</div>
						<div className='flex flex-col h-[100px] w-[390px]'>
							<div key={link.videoName}>
								<p title={link.videoName} className='text-[#fff]'>
									{link.videoName.length <= 75
										? link.videoName
										: link.videoName.slice(0, 45) + '...'}
								</p>
								<span className='text-[#ababab] text-[14px] cursor-pointer hover:text-[#eaeaea]'>
									{link.user}
								</span>
								<p className='text-[#ababab] text-[14px]'>
									{link.numberOfViews} просмотров • {link.releaseTime}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default VideoItemCart
