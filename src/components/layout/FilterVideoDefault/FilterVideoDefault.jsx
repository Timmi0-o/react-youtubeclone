import recommendFilter from './FilterVideoDefaultLinks'

const FilterVideoDefault = () => {
	return (
		<div className='fixed flex justify-start items-center gap-[10px] w-full h-[56px] bg-black text-[#bdbdbd] z-[20]'>
			<div className='flex items-center h-[32px] px-[12px] border-[1px] border-[#fff] rounded-[8px] bg-[#eee]'>
				<span className='font-bold text-[14px] text-[#505050]'>Все </span>
			</div>
			{recommendFilter.map((link) => (
				<div
					className='flex items-center min-w-[60px] h-[32px] px-[10px] rounded-[8px] bg-[#272727] hover:transition hover:bg-[#404040] hover:ease-in duration-500'
					key={link}
				>
					<span className='font-bold text-[14px] text-[#dbdbdb]'>{link} </span>
				</div>
			))}
		</div>
	)
}

export default FilterVideoDefault
