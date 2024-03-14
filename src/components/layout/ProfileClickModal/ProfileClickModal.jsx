import { useDispatch, useSelector } from 'react-redux'
import { showAndHideThemeModal } from '../../../redux/profileModal/actionCreators'
import { SwitchingThemeProfileModal } from '../../ui/SwitchingThemeProfileModal/SwitchingThemeProfileModal'
import {
	about,
	account,
	basicSetting,
	creativeStudioAndPaidSubs,
	setting,
} from './ProfileClickModalLink'

const linksModalAll = [
	account,
	creativeStudioAndPaidSubs,
	basicSetting,
	setting,
	about,
]

const ProfileClickModal = () => {
	const dispatch = useDispatch()
	const profile = useSelector((state) => state.header.profile)
	const isTheme = useSelector((state) => state.profileModal.isTheme)
	const nameTheme = useSelector((state) => state.profileModal.nameTheme)
	console.log('nameTheme', nameTheme)

	const handleIsTheme = () => {
		dispatch(showAndHideThemeModal())
	}

	const createSection = (link, index) => {
		return (
			<div
				key={index}
				className={
					'flex flex-col mt-[5px] pb-[10px] ' +
					(link === about ? undefined : 'border-b-[#515151] border-b-[1px]')
				}
			>
				{link.map((link) => (
					<div
						className='flex items-center w-[295px] h-[40px] pl-[16px] pr-[36px] hover:bg-[#3d3d3d] active:bg-[#4b4b4b] gap-[20px]'
						key={link.img}
						onClick={() => (link.onclick === 'theme' ? handleIsTheme() : '')}
					>
						<img className='size-[24px]' src={link.img} alt='' />
						<div className='flex gap-[20px]'>
							<p className='text-[14px] text-[#ffffffe0] w-[200px]'>
								{link.title + (link.onclick === 'theme' ? nameTheme : '')}
							</p>
							{link.arrow == 'true' ? (
								<img className='size-[24px]' src='/public/svg/arrowToBig.svg' />
							) : null}
						</div>
					</div>
				))}
			</div>
		)
	}

	return (
		<>
			{profile && isTheme === 'CLOSE' && (
				<div className='fixed flex flex-col w-[300px] h-[auto] bg-[#282828] rounded-[15px]'>
					<div className='flex items-start h-[105px] p-[16px] border-b-[#515151] border-b-[1px]'>
						<div className='w-[60px]'>
							<img
								className='size-[40px] rounded-[50%]'
								src='https://klike.net/uploads/posts/2023-09/1694059371_2-10.jpg'
								alt=''
							/>
						</div>
						<div>
							<p className='text-[#ffffffe0]'>Timmi</p>
							<p className='text-[#ffffffe0]'>@Timmi_0_o</p>
							<a
								href='https://www.youtube.com/channel/UCL5_2MUqdCkiwr49fj52Aiw'
								className='pt-[8px] text-[#47a9ffef] text-[14px] cursor-pointer'
							>
								Посмотреть канал
							</a>
						</div>
					</div>
					{linksModalAll.map((section, index) => createSection(section, index))}
				</div>
			)}
			<SwitchingThemeProfileModal handleIsTheme={handleIsTheme} />
		</>
	)
}

export default ProfileClickModal
