/* eslint-disable no-mixed-spaces-and-tabs */
import { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { showAndHideMiniSideBar } from '../../../redux/sideBar/actionCreators'
import { borderAnimateStart } from '../../../utils/BorderAnimate'
import './SideBar.css'
import {
	OtherPossible,
	SettingComplaint,
	SideBarClsLinks,
	aboutTheService,
	homeAndShortsAndSubsLinks,
	mySubsLinks,
	navigatorContentLinks,
	termUseConfidentiality,
	youAndMyChanelLinks,
} from './SideBarLinks'

const SideBar = () => {
	const dispatch = useDispatch()
	const location = useLocation()

	const [unwrap, setUnwrap] = useState(false)
	const showUnwrap = () => {
		if (unwrap) {
			setUnwrap(false)
		} else {
			setUnwrap(true)
		}
	}

	const [subUnwrap, setSubUnwrap] = useState(false)
	const showSubUnwrap = () => {
		if (subUnwrap) {
			setSubUnwrap(false)
		} else {
			setSubUnwrap(true)
		}
	}

	useLayoutEffect(() => {
		dispatch(showAndHideMiniSideBar(location))
	}, [location.pathname])

	const showSideBar = useSelector((state) => state.sideBar.sideBar)
	const showMiniSideBar = useSelector((state) => state.sideBar.miniSideBar)

	const [selectedCard, setSelectedCard] = useState(null)

	const handleCardClick = (index) => {
		setSelectedCard(index)
	}

	return (
		<>
			{showSideBar ? (
				// Секция со всеми пунктами с сайд баре
				<div className='scrollBarHover fixed pt-[6px] overflow-auto w-[240px] h-[100%] h-min-[889px] pb-[50px] mt-[56px] bg-black text-white z-[100] '>
					{/* Раздел с вкладками главная, шортсы и подписки */}
					<div className='px-[4px] pt-[6px]'>
						<div className='w-[204px] border-solid border-[#383838] border-b-[1px] pb-[12px] ml-[10px]'>
							{homeAndShortsAndSubsLinks.map((link) => (
								<Link
									onClick={() => handleCardClick(link.title)}
									key={link.title}
									to={link.page}
								>
									<div
										className={
											'flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[24px] pl-[10px] hover:bg-[#2e2e2e] active:bg-[#3e3e3e] ' +
											(selectedCard === link.title ? borderAnimateStart : '')
										}
									>
										<img className='size-[24px]' src={link.img} alt='' />
										<p className='text-[14px] mt-[-2px]'>{link.title}</p>
									</div>
								</Link>
							))}
						</div>
					</div>
					{/* Раздел с вкладками мой канал, история видео и плейлисты */}
					<div className='px-[4px] pt-[12px]'>
						<div className='w-[204px] border-solid border-[#383838] border-b-[1px] pb-[12px] ml-[10px]'>
							<div className='flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[9px] pl-[10px] hover:bg-[#2e2e2e] active:bg-[#3e3e3e]'>
								<p>Вы</p>
								<img src='/public/svg/arrowToBig.svg' alt='' />
							</div>
							<div className=''>
								{(unwrap
									? youAndMyChanelLinks
									: youAndMyChanelLinks.slice(0, -2)
								).map((link) => (
									<Link
										onClick={() => handleCardClick(link.title)}
										key={link.title}
										to={link.page}
									>
										<div
											className={
												'flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[24px] pl-[10px] hover:bg-[#2e2e2e] active:bg-[#3e3e3e] ' +
												(selectedCard === link.title ? borderAnimateStart : '')
											}
										>
											<img className='size-[24px]' src={link.img} alt='' />
											<p className='text-[14px] mt-[-2px]'>{link.title}</p>
										</div>
									</Link>
								))}
							</div>
							<div
								onClick={showUnwrap}
								className='flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[24px] pl-[10px] hover:bg-[#2e2e2e] active:bg-[#3e3e3e]'
							>
								<img
									src={
										unwrap
											? '/public/svg/arrowDirectionTop.svg'
											: '/public/svg/arrowDirectionBottom.svg'
									}
									alt=''
								/>
								<p className='text-[14px] mt-[-2px]'>
									{unwrap ? 'Свернуть' : 'Развернуть'}
								</p>
							</div>
						</div>
					</div>
					{/* Раздел с моими подписками */}
					<div className='px-[4px] pt-[6px]'>
						<div className='flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[9px] ml-[20px] mt-[3px]'>
							<p>Подписки</p>
						</div>
						<div className='w-[204px] border-solid border-[#383838] border-b-[1px] pb-[12px] ml-[10px]'>
							{(subUnwrap ? mySubsLinks : mySubsLinks.slice(0, 7)).map(
								(link) => (
									<Link
										onClick={() => handleCardClick(link.title)}
										key={link.title}
										to={link.page}
									>
										<div
											className={
												'flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[30px] pl-[10px] hover:bg-[#2e2e2e] active:bg-[#3e3e3e] ' +
												(selectedCard === link.title ? borderAnimateStart : '')
											}
										>
											<img
												className='size-[24px] rounded-[50%]'
												src={link.img}
												alt=''
											/>
											<span className='text-[14px] ml-[-6px]'>
												{link.title}
											</span>
										</div>
									</Link>
								)
							)}
							<div
								onClick={showSubUnwrap}
								className='flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[24px] pl-[10px] hover:bg-[#2e2e2e] active:bg-[#3e3e3e]'
							>
								<img
									src={
										subUnwrap
											? '/public/svg/arrowDirectionTop.svg'
											: '/public/svg/arrowDirectionBottom.svg'
									}
									alt=''
								/>
								<p className='text-[14px] mt-[-2px]'>
									{subUnwrap
										? 'Свернуть'
										: `Показать еще ${mySubsLinks.length - 7} каналов`.length <=
										  17
										? `Показать еще ${mySubsLinks.length - 7} каналов`
										: `Показать еще ${mySubsLinks.length - 7} каналов`.slice(
												0,
												17
										  ) + '...'}
								</p>
							</div>
						</div>
					</div>
					{/* Раздел НАВИГАТОР, где втренде, музыка, фильмы и т.д */}
					<div className='px-[4px] pt-[6px]'>
						<div className='flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[9px] ml-[20px] mt-[-3px]'>
							<p>Навигатор</p>
						</div>
						<div className='w-[204px] border-solid border-[#383838] border-b-[1px] pb-[12px] ml-[10px]'>
							{navigatorContentLinks.map((link) => (
								<Link
									onClick={() => handleCardClick(link.title)}
									key={link.title}
									to={link.page}
								>
									<div
										className={
											'flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[24px] pl-[10px] hover:bg-[#2e2e2e] active:bg-[#3e3e3e] ' +
											(selectedCard === link.title ? borderAnimateStart : '')
										}
									>
										<img className='size-[24px]' src={link.img} alt='' />
										<p className='text-[14px] mt-[-2px]'>{link.title}</p>
									</div>
								</Link>
							))}
						</div>
					</div>

					{/* Раздел c ДРУГИМИ возможностями */}
					<div className='px-[4px] pt-[6px]'>
						<div className='flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[9px] ml-[20px] mt-[3px]'>
							<p>Другие возможности</p>
						</div>
						<div className='w-[204px] border-solid border-[#383838] border-b-[1px] pb-[12px] ml-[10px]'>
							{OtherPossible.map((link) => (
								<Link
									onClick={() => handleCardClick(link.title)}
									key={link.title}
									to={link.page}
								>
									<div
										className={
											'flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[24px] pl-[10px] hover:bg-[#2e2e2e] active:bg-[#3e3e3e] ' +
											(selectedCard === link.title ? borderAnimateStart : '')
										}
									>
										<img className='size-[24px]' src={link.img} alt='' />
										<p className='text-[14px] mt-[-2px]'>{link.title}</p>
									</div>
								</Link>
							))}
						</div>
					</div>

					{/* Раздел настройками, жалобами, справками */}
					<div className='px-[4px] pt-[6px]'>
						<div className='w-[204px] border-solid border-[#383838] border-b-[1px] pb-[12px] ml-[10px]'>
							{SettingComplaint.map((link) => (
								<Link
									onClick={() => handleCardClick(link.title)}
									key={link.title}
									to={link.page}
								>
									<div
										className={
											'flex items-center justify-start w-[204px] h-[40px] rounded-[10px] gap-[24px] pl-[10px] hover:bg-[#2e2e2e] active:bg-[#3e3e3e] ' +
											(selectedCard === link.title ? borderAnimateStart : '')
										}
									>
										<img className='size-[24px]' src={link.img} alt='' />
										<p className='text-[14px] mt-[-2px]'>{link.title}</p>
									</div>
								</Link>
							))}
						</div>
					</div>
					{/* Футер сайд бара */}
					<div className='flex flex-wrap w-[240px] h-[107px] rounded-[10px] pt-[16px] px-[24px] pb-[12px]'>
						{aboutTheService.map((link) => (
							<>
								<Link
									to={'/*'}
									className='text-[13px] mt-[-2px] text-[#afafaf] mr-[8px]'
								>
									{link}
								</Link>
							</>
						))}
					</div>
					<div className='flex flex-wrap w-[240px] h-[107px] rounded-[10px] pt-[16px] px-[24px] pb-[12px]'>
						{termUseConfidentiality.map((link) => (
							<>
								<Link
									to={'/*'}
									className='text-[13px] mt-[-2px] text-[#afafaf] mr-[8px]'
								>
									{link}
								</Link>
							</>
						))}
					</div>
					<div className='text-[12px] px-[24px] mt-[10px] mr-[8px] text-[#747474]'>
						© 2024 Google LLC
					</div>
				</div>
			) : (
				<>
					{showMiniSideBar && (
						<div className='fixed left-0 w-[72px] h-min-[889px] h-[100%] bg-black text-white px-[4px] pt-[5px] mt-[56px]'>
							{SideBarClsLinks.map((links) => (
								<Link
									onClick={() => handleCardClick(links.title)}
									key={links.title}
									to={links.page}
								>
									<div
										className={
											'flex items-center justify-center flex-col w-[64px] h-[74px] rounded-[10px] gap-[5px] hover:bg-[#2e2e2e] active:bg-[#3e3e3e] ' +
											(selectedCard === links.title ? borderAnimateStart : '')
										}
									>
										<img
											className='size-[24px]'
											src={links.img}
											alt='Главная фото'
										/>
										<span className='text-[10px]'>{links.title}</span>
									</div>
								</Link>
							))}
						</div>
					)}
				</>
			)}
		</>
	)
}

export default SideBar
