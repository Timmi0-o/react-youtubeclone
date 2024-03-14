import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation } from 'react-router-dom'
import '../../../index.css'
import {
	showAndHideAllowsModal,
	showAndHideCreateVideoModal,
	showAndHideProfileModal,
} from '../../../redux/header/actionCreators'
import { showAndHideSideBar } from '../../../redux/sideBar/actionCreators'
import {
	borderAnimateEnd,
	borderAnimateStart,
} from '../../../utils/BorderAnimate'
import SearchStroke from '../../ui/SearchStroke/SearchStroke'
import AllowsVideo from '../AllowsVideo/AllowsVideo'
import CreateVideoClickModal from '../CreateVideoClickModal/CreateVideoClickModal'
import ProfileClickModal from '../ProfileClickModal/ProfileClickModal'
import SideBar from '../SideBar/SideBar'

const Header = () => {
	const location = useLocation()
	const dispatch = useDispatch()

	const animateBurger = useSelector((state) => state.sideBar.sideBar)
	const animateCreateVideo = useSelector((state) => state.header.createVideo)
	const animateAllows = useSelector((state) => state.header.allows)

	const handleShowSideBar = () => {
		dispatch(showAndHideSideBar(location))
	}

	const handleShowCreateVideoModal = () => {
		dispatch(showAndHideCreateVideoModal())
	}

	const handleShowAllowsModal = () => {
		dispatch(showAndHideAllowsModal())
	}

	const handleShowProfileModal = () => {
		dispatch(showAndHideProfileModal())
	}

	const nameTheme = useSelector((state) => state.profileModal.nameTheme)

	return (
		<>
			{/* Вся шапка */}
			<div
				className={
					'flex fixed justify-between items-center w-full h-[56px]  px-[16px] z-[11] ' +
					((nameTheme === 'Темная' || 'Как на устройстве') && ' bg-black ') +
					(nameTheme === 'Светлая' && ' bg-white ')
				}
			>
				{/* Гамбургер и лого */}
				<div className='flex justify-between items-center w-[172px] h-[56px] '>
					<div
						onClick={handleShowSideBar}
						className={
							'flex justify-center items-center size-[40px] p-[6px] rounded-[50%] hover:bg-[#252525] cursor-pointer active:bg-[#3a3a3a] ' +
							(animateBurger ? borderAnimateStart : borderAnimateEnd) +
							((nameTheme === 'Темная' || 'Как на устройстве') &&
								' bg-black ') +
							(nameTheme === 'Светлая' &&
								' bg-white border-[1px] border-[#222222] ')
						}
					>
						<img src='/public/svg/hamburger.svg' alt='' />
						{/* <Hamburger /> */}
					</div>
					<div className='flex py-[18px] pr-[10px] pl-[8px] ml-[5px]  cursor-pointer'>
						<Link to='/' className='w-[90px] h-[20px]'>
							<img
								className='w-full h-full'
								src='/public/svg/youtubeIcon.svg'
								alt=''
							/>
						</Link>
						{/* Приписка RU у лого */}
						<div className='flex w-[13] h-[44] mt-[-7px] ml-[4px]'>
							<span className='size-[13px] text-[#ffffffbc] text-[10px]'>
								RU
							</span>
						</div>
					</div>
				</div>
				<SearchStroke />
				{/* Секция с профилем, уведомлениями и загрузкой видео */}
				<div className='flex justify-around items-center w-[156px] h-[40px] gap-[8px] mr-[12px]'>
					<div
						onClick={handleShowCreateVideoModal}
						className={
							'flex justify-center items-center size-[40px] rounded-[50%] hover:bg-[#252525] active:bg-[#3a3a3a] cursor-pointer ' +
							(animateCreateVideo ? borderAnimateStart : borderAnimateEnd)
						}
					>
						<img src='/public/svg/createVideo.svg' alt='' />
					</div>
					<div
						onClick={handleShowAllowsModal}
						className={
							'border-[1px] border-[#000000] flex items-center justify-center size-[40px] rounded-[50%] hover:bg-[#252525] active:bg-[#3a3a3a] cursor-pointer ' +
							(animateAllows ? borderAnimateStart : borderAnimateEnd)
						}
					>
						<img src='/public/svg/allowBell.svg' alt='' />
					</div>
					<button
						className='flex justify-center items-center px-[6px] rounded-[50%] cursor-pointer'
						onClick={handleShowProfileModal}
					>
						<img
							className='size-[32px] rounded-[50%] active:border-[1px] active:border-[#5a6dff]'
							src='https://klike.net/uploads/posts/2023-09/1694059371_2-10.jpg'
							alt=''
						/>
					</button>
				</div>
				<div className='fixed right-[380px] top-[48px]'>
					<CreateVideoClickModal />
				</div>
				<div className='fixed right-[590px] top-[48px]'>
					<AllowsVideo />
				</div>
				<div className='fixed right-[330px] top-[48px]'>
					<ProfileClickModal />
				</div>
			</div>
			<SideBar />
			<Outlet />
		</>
	)
}

export default Header
