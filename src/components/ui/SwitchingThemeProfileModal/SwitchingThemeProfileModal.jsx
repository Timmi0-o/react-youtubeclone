import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { renameLabelTheme } from '../../../redux/profileModal/actionCreators'

export const SwitchingThemeProfileModal = ({ handleIsTheme }) => {
	const choiceTheme = ['Как на устройстве', 'Темная', 'Светлая']

	const dispatch = useDispatch()

	const [selectedCard, setSelectedCard] = useState(null)

	const isTheme = useSelector((state) => state.profileModal.isTheme)

	const handleCardClick = (link) => {
		setSelectedCard(link)
		handleIsTheme()
		dispatch(renameLabelTheme(link))
	}

	return (
		<>
			{isTheme === 'OPEN' && (
				<div className=' fixed bg-[#282828] border-[1px] border-[#000] rounded-[12px] w-[300px] text-[#f1f1f1]'>
					<div className='flex items-center h-[49] m-[5px]'>
						<div
							onClick={handleIsTheme}
							className='flex justify-center items-center rounded-[50%] size-[40px] hover:bg-[#555555] active:bg-[#717171] mr-[4px]'
						>
							<img
								className=' rotate-[-90deg]'
								src='/public/svg/bigArrow.svg'
								alt=''
							/>
						</div>
						<p className='text-[16px]'>Тема</p>
					</div>
					<div className='border-b-[1px] border-[#4b4b4b]' />
					<div className='py-[5px] font-normal'>
						<p className='text-[12px] text-[#aaaaaae3] pr-[36px] pl-[16px]'>
							Настройка будет применена только в этом браузере.
						</p>
						<div className='mt-[5px]'>
							{choiceTheme.map((link) => (
								<div
									className='h-[40px] pr-[36px] pl-[16px] py-[8px] hover:bg-[#555555] active:bg-[#717171]'
									key={link}
									onClick={() => handleCardClick(link)}
								>
									<div className='flex'>
										<div className='size-[40px]'>
											{selectedCard === link && (
												<img src='/public/svg/selectOption.svg' alt='' />
											)}
										</div>
										<span>{link}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
