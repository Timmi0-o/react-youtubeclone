import { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { borderAnimateStart } from '../../../utils/BorderAnimate'
import { AvaUsersAndBtnIsSubs } from '../AvaUsersAndBtnIsSubs/AvaUsersAndBtnIsSubs'

const WatchMetaDataVideo = ({ nowIdVideo, watchLinks }) => {
	const path = useLocation()
	const [showFullDescription, setShowFullDescription] = useState(false)

	useLayoutEffect(() => {
		setShowFullDescription(true)
	}, [path.pathname])

	const handleFullDescription = () => {
		if (!showFullDescription) {
			setShowFullDescription(true)
			window.scrollTo({
				top: 700,
				behavior: 'smooth',
			})
		} else {
			setShowFullDescription(false)
		}
	}

	let likeCount = 728

	const [addLike, setAddLike] = useState(likeCount)

	const handleLike = () => {
		if (addLike === likeCount) {
			setAddLike(likeCount + 1)
		} else {
			setAddLike(likeCount)
		}
	}

	const fastActions = ['Видео', 'О канале']

	return (
		<div>
			<div className='flex gap-[155px]'>
				<AvaUsersAndBtnIsSubs nowIdVideo={nowIdVideo} />
				<div className='flex'>
					{watchLinks.map((link) => (
						<div
							key={link.id}
							className={
								link?.name &&
								'flex items-center text-[15px] font-normal cursor-pointer h-[36px] pr-[16px] pl-[6px] bg-[#303030] text-[#ffffffea] rounded-[40px] ml-[10px] hover:bg-[#424242] active:bg-[#5c5c5c]'
							}
						>
							{!link?.name && (
								<div className='flex'>
									<div
										onClick={handleLike}
										className='flex items-center text-[15px] cursor-pointer h-[36px] pl-[8px] bg-[#303030] text-[#ffffffea] rounded-l-[40px] hover:bg-[#424242] active:bg-[#5c5c5c] '
									>
										<img className='pr-[5px]' src={link.img} alt='' />
										<span className='border-r-[1px] border-[#ffffff2a] pr-[12px]'>
											{addLike}
										</span>
									</div>
									<div className='flex items-center text-[15px] cursor-pointer h-[36px] bg-[#303030] text-[#ffffffea] rounded-r-[40px] hover:bg-[#424242] active:bg-[#5c5c5c]'>
										<img className='px-[12px]' src={link.img2} alt='' />
									</div>
								</div>
							)}
							{link.id !== 1 && (
								<img className='pr-[6px]' src={link.img} alt='' />
							)}
							{link.name}
						</div>
					))}
					<div className='flex size-[36px] ml-[10px]  bg-[#353535] text-[#ffffffb7] rounded-[50%] hover:bg-[#424242] active:bg-[#5c5c5c]'>
						<img
							src='/public/svg/hamburgerPoint.svg'
							className='cursor-pointer rotate-90'
						/>
					</div>
				</div>
			</div>
			<div
				onClick={showFullDescription ? handleFullDescription : undefined}
				className={
					'h-[auto] bg-[#ffffff2e] pl-[12px] py-[12px] mt-[12px] mr-[12px] w-[1280px] rounded-[12px] font-normal text-[#fff] text-[14px] ' +
					(!showFullDescription ? '' : 'active:bg-[#ffffff40] cursor-pointer') +
					(!showFullDescription ? borderAnimateStart : '')
				}
			>
				<span className='pr-[10px]'>
					{nowIdVideo.numberOfViews} просмотров {nowIdVideo.releaseTime}
				</span>
				<span className='text-[#9c9c9c]'>{`#${nowIdVideo.hashTag}`}</span>
				<p>
					{!showFullDescription
						? nowIdVideo.description
						: nowIdVideo.description.slice(0, 400)}
				</p>
				{!showFullDescription ? (
					<>
						<div className='mt-[30px] mb-[40px]'>
							<p className='text-[20px] font-medium'>Расшифровка видео</p>
							<p className='text-[15px] text-[#ffffff9a] mt-[10px] mb-[24px]'>
								Расшифровка позволяет быстро находить в видео нужную информацию.
							</p>
							<span className='text-[15px] cursor-pointer text-[#31a9ff] font-medium p-[8px] rounded-[24px] border-[1px] border-[#ffffff4e] hover:bg-[#25516f] hover:border-[#25516f] active:bg-[#30688d] duration-100'>
								Показать текст видео
							</span>
						</div>
						<div>
							<div className='flex items-center w-[720px] cursor-pointer'>
								<div className='size-[72px]'>
									<img
										className='size-full rounded-[50%]'
										src={nowIdVideo.ava}
										alt=''
									/>
								</div>
								<div className='pl-[10px]'>
									<p className='text-[20px]'>{nowIdVideo.user}</p>
									<p className='text-[14px]'>
										{nowIdVideo.numberOfViews} подписчиков
									</p>
								</div>
							</div>
							<div className='flex mt-[10px] mb-[50px]'>
								{fastActions.map((action) => (
									<div
										key={action.id}
										className='flex cursor-pointer items-center justify-center rounded-[16px] border-[1px] border-[#ffffff48] hover:bg-[#ffffff48] active:bg-[#ffffff5c] w-[352px] h-[34px] mr-[10px] duration-100'
									>
										<img
											className='size-[24px] mr-[5px]'
											src='/public/svg/youVideo.svg'
											alt=''
										/>
										<span>{action}</span>
									</div>
								))}
							</div>
						</div>
					</>
				) : null}
				<span
					onClick={handleFullDescription}
					className='rounded-[4px] cursor-pointer w-[auto] active:bg-[#767676]'
				>
					{!showFullDescription ? 'Свернуть' : '...еще'}
				</span>
			</div>
		</div>
	)
}

export default WatchMetaDataVideo
