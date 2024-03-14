import { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../../index.css'
import { videoItem } from '../../layout/VideoItemCart/VideoItemCartLink'
import VideoItemCartMini from '../../layout/VideoItemCartMini/VideoItemCartMini'
import CommentPattern from '../../ui/CommentPattern/CommentPattern'
import VideoTimelineAndSetting from '../../ui/VideoTimelineAndSetting/VideoTimelineAndSetting'
import WatchMetaDataVideo from '../../ui/WatchMetaDataVideo/WatchMetaDataVideo'
import WriteCommentPattern from '../../ui/WriteCommentPattern/WriteCommentPattern'
import { watchLinks } from './WatchVideoLinks'

const WatchVideo = () => {
	const [isComment, setIsComment] = useState('')
	const [comments, setComments] = useState([])

	const location = useLocation()

	const fullURL = `${location.pathname}${location.search}${location.hash}`
		.split('/')
		.slice(-1)

	const nowIdVideo = videoItem.filter((link) => link.id == fullURL)[0]

	const pageTittle = nowIdVideo.videoName

	useLayoutEffect(() => {
		document.title = `(${videoItem.length}) ${pageTittle}`
	}, [pageTittle])

	return (
		<div>
			<div className='flex justify-center overflow-hidden bg-black text-[#e4e4e4] font-bold font-[Roboto] '>
				<div className='flex justify-center items-start w-[1903px] h-[auto] mt-[56px] py-[24px] bg-black'>
					<div className='pr-[12px]'>
						{/* Блок с фото вместо видео и элементами управления видео */}
						<div className='relative w-[1280px] h-[720px]'>
							<img
								className='size-[100%] rounded-[12px]'
								src={nowIdVideo.img}
								alt=''
							/>
							<VideoTimelineAndSetting nowIdVideo={nowIdVideo} />
						</div>
						<h1 className='text-[20px] font-extrabold py-[15px]'>
							{nowIdVideo.videoName}
						</h1>
						<WatchMetaDataVideo
							nowIdVideo={nowIdVideo}
							watchLinks={watchLinks}
						/>
						<div className='flex pt-[24px]'>
							<span className='pr-[24px] text-[20px]'>
								{comments.length} комментариев
							</span>
							<div className='flex items-center gap-[15px]'>
								<div>
									<img
										className='size-[24px]'
										src='/public/svg/arrange.svg'
										alt=''
									/>
								</div>
								Упорядочить
							</div>
						</div>
						<WriteCommentPattern
							isComment={isComment}
							setIsComment={setIsComment}
							nowIdVideo={nowIdVideo}
							comments={comments}
							setComments={setComments}
						/>
						<CommentPattern comments={comments} />
					</div>
					<div className='w-[423px] h-[auto]'>
						<VideoItemCartMini />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WatchVideo
