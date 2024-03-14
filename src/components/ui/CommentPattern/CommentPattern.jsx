const CommentPattern = ({ comments }) => {
	return (
		<div className='flex flex-col-reverse w-[1250px] mt-[10px]'>
			{comments.map((link) => (
				<div
					key={link.ava}
					className='flex w-[1280px] font-normal mt-[20px] text-[14px]'
				>
					<div className='flex] w-[50px]'>
						<img
							className='w-[40px] h-[40px]  rounded-[50%]'
							src={link.ava}
							alt=''
						/>
					</div>
					<div className='w-[1200px]'>
						<span className='pr-[6px]'>{link.user}</span>
						<span className='text-[#ffffffbc] hover:text-[#ffffffeb]'>
							{link.dateComment}
						</span>
						<div>{link.comment}</div>
						<div className='flex items-center mt-[6px]'>
							<div className='flex items-center pr-[12px]'>
								<img
									className='rounded-[50%] p-[5px] hover:bg-[#dadada64] active:bg-[#dadada85]'
									src='/public/svg/like.svg'
									alt=''
								/>
								<span className='text-[#ffffff74]'>{link.countLike}</span>
							</div>
							<img
								className='pr-[6px] rounded-[50%] p-[5px] hover:bg-[#dadada64] active:bg-[#dadada85]'
								src='/public/svg/disLike.svg'
								alt=''
							/>
							<span className='rounded-[16px] py-[6px] px-[12px] hover:bg-[#dadada64] active:bg-[#dadada85]'>
								Ответить
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CommentPattern
