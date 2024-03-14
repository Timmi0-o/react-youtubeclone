import { useState } from 'react'
import { useSelector } from 'react-redux'
import { videoItem } from '../../layout/VideoItemCart/VideoItemCartLink'

export const SearchStroke = () => {
	const [inputFocused, setInputFocused] = useState(false)

	const handleFocus = () => {
		setInputFocused(true)
	}

	const handleBlur = () => {
		setInputFocused(false)
	}

	const [searchTerm, setSearchTerm] = useState('')
	const [filteredData, setFilteredData] = useState([])

	const handleSearch = (event) => {
		const query = event.target.value.toLowerCase()
		setSearchTerm(query)

		const filtered = videoItem.filter((item) =>
			item.videoName.toLowerCase().includes(query)
		)
		setFilteredData(filtered)
	}

	const nameTheme = useSelector((state) => state.profileModal.nameTheme)

	return (
		<>
			{/* Вся поисковая строка с голосовым поиском */}
			<div
				className={
					'flex justify-start w-[732px] ' +
					(inputFocused ? ' ml-[28px]' : ' ml-[90px]')
				}
			>
				{/* Cтрока без войса и кнопки поиска */}
				<div
					className={
						'flex items-center h-[40px] border-solid border-[1px] rounded-s-[50px] ' +
						(inputFocused
							? 'border-[#2c8fffb3] w-[567px]'
							: 'border-[#3a3a3a] w-[536px]') +
						((nameTheme === 'Темная' || 'Как на устройстве') && ' bg-black ') +
						(nameTheme === 'Светлая' && ' bg-white ')
					}
					onFocus={handleFocus}
					onBlur={handleBlur}
				>
					{/* Если поле input в ФОКУСЕ то фото лупы показать */}
					{inputFocused && (
						<>
							<img
								className='mr-[-6px] pl-[16px] w-[37px]'
								src='/public/svg/magnifier.svg'
								alt=''
							/>
							{filteredData.length != 0 && (
								<div className='overflow-y-hidden fixed w-[578px] h-max-[400px] h-auto  bg-[#222222] top-[54px] pt-[15px] pb-[10px] rounded-[20px] text-[#e2e2e2]'>
									{/* Отображение отфильтрованных данных */}
									{filteredData
										.map((item) => (
											<>
												<div className='flex hover:bg-[#3b3b3b] justify-between items-center'>
													<div className='flex items-center ml-[15px] mt-[5px]'>
														<img
															className='size-[20px]'
															src='/public/svg/restartSearch.svg'
															alt=''
														/>
														<p
															className='text-[16px] font-bold px-[20px] py-[4px]'
															key={item.videoName}
														>
															{item.videoName}
														</p>
													</div>
													<a className='text-[14px] text-[#53a6ff] mr-[20px] hover:underline'>
														Удалить
													</a>
												</div>
											</>
										))
										.splice(0, 14)}
								</div>
							)}
						</>
					)}
					<div>
						<input
							className='w-[484px] h-[24px] ml-[16px] bg-[transparent] outline-none text-[#ffffff] placeholder-[#929292dc] caret-[#505050] text-[16px] font-[400] '
							type='text'
							placeholder='Введите запрос'
							onChange={handleSearch}
						/>
					</div>

					<img
						className='px-[4px]'
						src='//www.gstatic.com/inputtools/images/tia.png'
						alt=''
					/>
				</div>
				{/* Кнопка для произведения поиска */}
				<div
					className={
						'flex justify-center items-center w-[64px] h-[40px] border-t-[1px] border-b-[1px] border-r-[1px] border-[#3a3a3a] rounded-e-[50px] cursor-pointer ' +
						((nameTheme === 'Темная' || 'Как на устройстве') &&
							' bg-[#222222] ') +
						(nameTheme === 'Светлая' && ' bg-white ')
					}
				>
					<img src='/public/svg/magnifier.svg' alt='' />
				</div>
				{/* Кнопка для голосового ввода */}
				<div
					className={
						'flex justify-center items-center size-[40px] rounded-[50%] ml-[15px] hover:bg-[#3e3e3e] active:bg-[#575757] cursor-pointer ' +
						((nameTheme === 'Темная' || 'Как на устройстве') &&
							' bg-[#222222] border-[1px] border-[#222222] ') +
						(nameTheme === 'Светлая' && ' bg-white ')
					}
				>
					<img src='/public/svg/voiceSearch.svg' alt='' />
				</div>
			</div>
		</>
	)
}

export default SearchStroke
