import { useSelector } from 'react-redux'
import createVideoLink from './CreateVideoClickModalLink'

const CreateVideoClickModal = () => {
	const showCreateVideoModal = useSelector((state) => state.header.createVideo)
	return (
		<>
			{showCreateVideoModal && (
				<div className='fixed flex flex-col w-[230px] h-[auto] bg-[#282828] rounded-[15px] py-[6px]'>
					{createVideoLink.map((link) => (
						<div
							className='flex items-center w-[full] h-[40px] pl-[16px] pr-[36px] hover:bg-[#3d3d3d] active:bg-[#4b4b4b] gap-[20px]'
							key={link.title}
						>
							<img className='size-[24px]' src={link.img} alt='' />
							<p className='text-[#ffffffd8] text-[14px] w-[200px]'>
								{link.title}
							</p>
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default CreateVideoClickModal
