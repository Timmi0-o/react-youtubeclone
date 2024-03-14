import { useState } from 'react'
import 'react-html5video/dist/styles.css'
import { Link } from 'react-router-dom'
import '../../../index.css'
import { borderAnimateEnd } from '../../../utils/BorderAnimate'
import './VideoItemCartMini.css'
import { videoItemMini } from './VideoItemCartMiniLink'

const VideoItemCartMini = () => {
	const [selectedCard, setSelectedCard] = useState(null)

	const handleCardClick = (index) => {
		setSelectedCard(index)
	}

	return (
		<>
			{videoItemMini.map((link) => (
				<Link
					onClick={() => handleCardClick(link.id)}
					to={`/watching/${link.id}`}
					key={link.id}
				>
					<div
						className={
							'flex cursor-pointer pt-[5px] pl-[4px] rounded-[5px] active:bg-[#aaaaaa35] w-[420px] ' +
							(selectedCard == link.id ? borderAnimateEnd : '')
						}
					>
						{/* Превью и видео */}
						<div className='relative flex justify-end items-end mb-[5px] mr-[6px]'>
							<img
								className='rounded-[6px] w-[170px] h-[100px]'
								src={link.img}
							/>

							<span className='absolute text-white bg-black text-[14px] rounded-[5px] px-[2px] mr-[4px] mb-[4px] z-[2]'>
								{link.time}
							</span>
						</div>
						{/* Секция с описанием и авой юзера */}
						<div className='flex flex-col h-[100px] w-[226px]'>
							<div key={link.videoName}>
								<p
									title={link.videoName}
									className='text-[#fff] text-[14px] font-[Roboto] font-medium'
								>
									{link.videoName.length <= 65
										? link.videoName
										: link.videoName.slice(0, 40) + '...'}
								</p>
								<span className='text-[#ababab] text-[13px] cursor-pointer hover:text-[#eaeaea] font-normal'>
									{link.user}
								</span>
								<p className='text-[#ababab] text-[13px] font-normal'>
									{link.numberOfViews} просмотров • {link.releaseTime}
								</p>
							</div>
						</div>
					</div>
				</Link>
			))}
		</>
	)
}

export default VideoItemCartMini
