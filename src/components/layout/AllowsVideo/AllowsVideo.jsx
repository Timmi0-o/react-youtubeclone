import { useSelector } from 'react-redux'
import '../../../index.css'
import { videoItem } from '../VideoItemCart/VideoItemCartLink'

const AllowsVideo = () => {
	const allowsVideo = useSelector((state) => state.header.allows)
	return (
		<>
			{allowsVideo && (
				<div
					className={
						'allowsScroll fixed flex flex-col w-[489px] h-[642px] bg-[#282828] rounded-[12px] py-[6px] '
					}
				>
					<div className='flex items-center justify-between h-[49px] px-[15px] text-[#e6e6e6] pb-[5px] border-b-[1px] border-[#616161]'>
						<p>Уведомления</p>
						<div className='flex justify-center items-center size-[40px] 		hover:bg-[#5f5f5f] active:bg-[#7d7d7d] rounded-[50%] '>
							<img
								className='size-[24px]'
								src='/public/svg/setting.svg'
								alt=''
							/>
						</div>
					</div>
					<div className='overflow-y-auto'>
						{videoItem.map((link) => (
							<div
								className='flex items-start w-[full] h-[auto] pt-[10px] mr-[16px]  mt-[16px] mb-[16px] hover:bg-[#3d3d3d] active:bg-[#4b4b4b] gap-[20px] '
								key={link.id}
							>
								<div className='flex items-center w-[70px]'>
									<div className='size-[4px] mx-[6px] bg-[#37c3ff] rounded-[50%]' />
									<div>
										<img className='size-[48px] rounded-[50%]' src={link.ava} />
									</div>
								</div>
								<div className='flex-col'>
									<p className='text-[#ffffffd8] text-[14px] w-[231px] h-[auto]'>
										На канале {`"${link.user}"`} появилось новое видео:{' '}
										{`"${
											link.videoName.length <= 75
												? link.videoName
												: link.videoName.slice(0, 45) + '...'
										}"`}
										. Советуем его посмотреть.
									</p>
									<div className='my-[5px]'>
										<p className='text-[13px] text-[#b0b0b0]'>
											{link.releaseTime}
										</p>
									</div>
								</div>
								<div className='flex'>
									<div className='w-[86px] h-[65px]'>
										<img
											className='rounded-[6px] w-[86px] max-h-[50px]'
											src={link.img}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default AllowsVideo
