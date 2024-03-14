import { useState } from 'react'
import 'react-html5video/dist/styles.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { borderAnimateStart } from '../../../utils/BorderAnimate'
import './VideoItemCart.css'
import { videoItem } from './VideoItemCartLink'

const VideoItemCart = () => {
	const showSidebar = useSelector((state) => state.sideBar.sideBar)

	const [selectedCard, setSelectedCard] = useState(null)

	const handleCardClick = (index) => {
		setSelectedCard(index)
	}

	const nameTheme = useSelector((state) => state.profileModal.nameTheme)

	return (
		<>
			{videoItem.map((link) => (
				<Link to={`/watching/${link.id}`} key={link.id}>
					<div
						className={
							'relative flex flex-col mr-[10px] mb-[20px] rounded-[6px] cursor-pointer active:bg-[#1e1e1e]  ' +
							(showSidebar ? 'w-[315px] h-[290px] ' : 'w-[346px] h-[315px] ') +
							(selectedCard === link.id ? borderAnimateStart : '')
						}
					>
						{/* Превью и видео */}
						<div
							className={
								'relative h-[200px] ml-[3px] mt-[3px] flex justify-end items-end ' +
								(showSidebar ? 'w-[310px]' : 'w-[340px]')
							}
						>
							<img
								className={
									'absolute rounded-[14px] hover:rounded-[0px] hover:duration-500 hover:scale-x-[1.006] ' +
									(showSidebar
										? 'w-[310px] h-[180px] '
										: 'w-[340px] h-[200px] ')
								}
								src={link.img}
							/>

							<span className='text-white bg-black text-[14px] rounded-[5px] px-[2px] mr-[4px] mb-[4px] z-[2]'>
								{link.time}
							</span>
						</div>
						{/* Секция с описанием и авой юзера */}
						<div
							onClick={() => handleCardClick(link.id)}
							onMouseLeave={() => handleCardClick(null)}
							className='flex mt-[10px] ml-[5px] h-[100px] '
						>
							<div className='w-[60px]'>
								<img
									className='size-[36px] rounded-[50%]'
									src={link.ava}
									alt=''
								/>
							</div>
							<div className='flex flex-col w-[390px]'>
								<div key={link.videoName}>
									<p
										title={link.videoName}
										className={
											nameTheme === 'Темная' ||
											nameTheme === 'Как на устройстве'
												? 'text-[#fff]'
												: 'text-[#000000]'
										}
									>
										{link.videoName.length <= 75
											? link.videoName
											: link.videoName.slice(0, 60) + '...'}
									</p>
									<span
										className={
											'text-[14px] cursor-pointer ' +
											((nameTheme === 'Темная' || 'Как на устройстве') &&
												' text-[#ababab] hover:text-[#eaeaea] ') +
											(nameTheme === 'Светлая' &&
												' text-[#000000c6] hover:text-[#000000e8] ')
										}
									>
										{link.user}
									</span>
									<p
										className={
											'text-[#ababab] text-[14px] ' +
											(nameTheme === 'Темная' && ' text-[#ababab] ') +
											(nameTheme === 'Светлая' && ' text-[#000000c6] ')
										}
									>
										{link.numberOfViews} просмотров • {link.releaseTime}
									</p>
								</div>
							</div>
						</div>
					</div>
				</Link>
			))}
		</>
	)
}

export default VideoItemCart
