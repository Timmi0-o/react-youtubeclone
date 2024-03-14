import { useSelector } from 'react-redux'
import recommendFilter from './FilterVideoDefaultLinks'

const FilterVideoDefault = () => {
	const nameTheme = useSelector((state) => state.profileModal.nameTheme)
	return (
		<div className='flex items-center gap-[10px] h-[56px] text-[#bdbdbd]'>
			<div className='flex items-center h-[32px] px-[12px] border-[1px] border-[#fff] rounded-[8px] bg-[#eee] cursor-pointer'>
				<span className='font-bold text-[14px] text-[#505050]'>Все </span>
			</div>
			{recommendFilter.map((link) => (
				<div
					className={
						'flex items-center h-[32px] px-[10px] rounded-[8px] hover:transition hover:bg-[#404040] hover:ease-in duration-500 cursor-pointer ' +
						((nameTheme === 'Темная' || 'Как на устройстве') &&
							' bg-[#272727] text-[#ffff]  ') +
						(nameTheme === 'Светлая' && ' bg-[#eeeeee] text-[#181818df] ')
					}
					key={link}
				>
					<span className='font-bold text-[14px]'>{link} </span>
				</div>
			))}
		</div>
	)
}

export default FilterVideoDefault
