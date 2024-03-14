import { useRef, useState } from 'react'
import '../../../index.css'
import AllowsVideo from '../AllowsVideo/AllowsVideo'
import CreateVideoClickModal from '../CreateVideoClickModal/CreateVideoClickModal'
import ProfileClickModal from '../ProfileClickModal/ProfileClickModal'
import { videoItem } from '../VideoItemCart/VideoItemCartLink'
import './Header.css'

const Header = ({
	showSideBar,
	setShowSideBar,
	showModalProfile,
	setShowModalProfile,
}) => {
	const focusModalProfile = () => {
		if (!showModalProfile) {
			setShowModalProfile(true)
		} else {
			setShowModalProfile(false)
		}
	}

	const clickSideBar = () => {
		if (showSideBar) {
			setShowSideBar(false)
		} else {
			setShowSideBar(true)
		}
	}

	const border = useRef()
	const searchStroke = useRef()
	const closeMl = useRef()

	const [inputFocused, setInputFocused] = useState(false)

	const handleFocus = () => {
		setInputFocused(true)
		border.current.classList.add('border-blue-500')
		border.current.classList.remove('w-[536px]')
		border.current.classList.add('w-[576px]')
		closeMl.current.classList.remove('ml-[16]')
	}

	const handleBlur = () => {
		setInputFocused(false)
		border.current.classList.remove('border-blue-500')
		border.current.classList.add('w-[536px]')
		border.current.classList.remove('w-[576px]')
		closeMl.current.classList.add('ml-[16]')
	}

	const [createVideoFocus, setCreateVideoFocus] = useState(false)

	const createFocus = () => {
		if (!createVideoFocus) {
			setCreateVideoFocus(true)
		} else {
			setCreateVideoFocus(false)
		}
	}

	const [allowsVideo, setAllowsVideo] = useState(false)

	const allowsFocus = () => {
		if (!allowsVideo) {
			setAllowsVideo(true)
		} else {
			setAllowsVideo(false)
		}
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

	return (
		<>
			{/* Вся шапка */}
			<div className='flex fixed justify-between items-center w-full h-[56px] bg-black px-[16px] z-[100]'>
				{/* Гамбургер и лого */}
				<div className='flex justify-center items-center w-[160px] h-[56px] bg-black'>
					<div
						onClick={clickSideBar}
						className='flex justify-center items-center w-[60px] h-[70-px] p-[8px] rounded-[50%] hover:bg-[#252525] cursor-pointer active:bg-[#3a3a3a]'
					>
						<img
							className='size-[24px]'
							src='/public/svg/hamburger.svg'
							alt=''
						/>
					</div>
					<div className='flex py-[18px] pr-[10px] pl-[8px] ml-[5px]  cursor-pointer'>
						<img
							className='w-[140px] h-[20px]'
							src='/public/svg/youtubeIcon.svg'
							alt=''
						/>
						{/* Приписка RU у лого */}
						<div className='flex w-[13] h-[44] mt-[-7px] ml-[4px]'>
							<p className='size-[13px] text-[#ffffffbc] text-[10px]'>RU</p>
						</div>
					</div>
				</div>
				{/* Вся поисковая строка с голосовым поиском */}
				<div
					className='flex justify-end row-auto w-[732px] h-[40px] pr-[4px] pl-[16px] mr-[52px]'
					ref={searchStroke}
				>
					{/* Cтрока без войса и кнопки поиска */}
					<div
						className='flex items-center w-[536px] h-[40px] bg-black border-solid border-[1px] border-[#3a3a3a] rounded-s-[50px]'
						ref={border}
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						{/* Если поле input в ФОКУСЕ то фото лупы показать */}
						{inputFocused && (
							<>
								<img
									className='w-[40px] h-[20px] pl-[20px]'
									src='/public/svg/magnifier.svg'
									alt=''
								/>
								<div className='overflow-y-hidden fixed w-[578px] h-max-[400px] h-auto  bg-[#222222] top-[54px] pt-[15px] pb-[10px] rounded-[20px] text-[#e2e2e2]'>
									{/* Отображение отфильтрованных данных */}
									{filteredData
										.map((item) => (
											<>
												<div className='flex hover:bg-[#3b3b3b] justify-between items-center'>
													<div className='flex items-center ml-[15px] mt-[5px]'>
														<img
															className='size-[24px]'
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
							</>
						)}
						<div>
							<input
								className='w-[484px] h-[24px] bg-black outline-none text-[#ffffff] ml-[16px] placeholder-[#929292] caret-[#505050] text-[16.5px] font-[400]'
								type='text'
								placeholder='Введите запрос'
								ref={closeMl}
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
					<div className='flex justify-center items-center bg-[#222222] w-[64px] h-[40px] border-solid border-t-[1px] border-b-[1px] border-r-[1px] border-[#3a3a3a] rounded-e-[50px] cursor-pointer'>
						<img
							className='size-[24px]'
							src='/public/svg/magnifier.svg'
							alt=''
						/>
					</div>
					{/* Кнопка для голосового ввода */}
					<div className='flex justify-center items-center bg-[#222222] size-[40px] rounded-[50%] ml-[15px] hover:bg-[#3e3e3e] active:bg-[#575757] cursor-pointer'>
						<img
							className='size-[24px]'
							src='/public/svg/voiceSearch.svg'
							alt=''
						/>
					</div>
				</div>
				{/* Секция с профилем, уведомлениями и загрузкой видео */}
				<div className='flex justify-start items-center w-[156px] h-[40px] gap-[8px] mr-[16px]'>
					<div
						onClick={createFocus}
						className='flex justify-center items-center size-[40px] rounded-[50%] hover:bg-[#252525] active:bg-[#3a3a3a] cursor-pointer'
					>
						<img src='/public/svg/createVideo.svg' alt='' />
					</div>
					<div
						tabIndex={0}
						onClick={allowsFocus}
						className='button-border flex items-center justify-center size-[40px] rounded-[50%] hover:bg-[#252525] active:bg-[#3a3a3a] cursor-pointer'
					>
						<img src='/public/svg/allowBell.svg' alt='' />
					</div>
					<button
						className='flex justify-center items-center w-[40px] h-[40px] py px-[6px] rounded-[50%] ml-[10px] cursor-pointer active:border-[1px] active:border-[#5a6dff]'
						onClick={focusModalProfile}
					>
						<img
							className='size-[32px] rounded-[50%]'
							src='https://klike.net/uploads/posts/2023-09/1694059371_2-10.jpg'
							alt=''
						/>
					</button>
				</div>
				<div className='fixed right-[380px] top-[45px]'>
					<CreateVideoClickModal createVideoFocus={createVideoFocus} />
				</div>
				<div className='fixed right-[590px] top-[48px]'>
					<AllowsVideo allowsVideo={allowsVideo} />
				</div>
				<div className='fixed right-[330px] top-[45px]'>
					<ProfileClickModal showModalProfile={showModalProfile} />
				</div>
			</div>
		</>
	)
}

export default Header
