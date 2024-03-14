import { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openAndCloseWindowDisSubsOrCancel } from '../../../redux/watchVideo/actionCreators'
import {
	borderAnimateEnd,
	borderAnimateStart,
} from '../../../utils/BorderAnimate'

export const AvaUsersAndBtnIsSubs = ({ nowIdVideo }) => {
	const dispatch = useDispatch()
	const [isSub, setIsSub] = useState('NOT')

	const handleIsSub = () => {
		if (isSub === 'NOT') {
			setIsSub('CLOSE')
		} else if (isSub === 'CLOSE') {
			setIsSub('OPEN')
		} else if (isSub === 'OPEN') {
			setIsSub('CLOSE')
		}
	}

	useLayoutEffect(() => {
		setIsSub('NOT'),
			setNameButtonSubs(weDisSubs),
			setVariableOnTypeSubs('/public/svg/basePreferensAllows.svg')
	}, [nowIdVideo.id])

	const deleteSubs = () => {
		dispatch(openAndCloseWindowDisSubsOrCancel())
	}

	const disSubsAndClose = useSelector(
		(state) => state.watchVideo.openAndCloseWindowDisSubsOrCancel
	)
	const [variableOnTypeSubs, setVariableOnTypeSubs] = useState(
		'/public/svg/basePreferensAllows.svg'
	)

	// console.log('disSubsAndClose', disSubsAndClose)
	// console.log('isSub', isSub)

	const subsSetting = [
		{ title: 'Все', img: '/public/svg/allAllowsVideo.svg' },
		{
			title: 'На основе предпочтений',
			img: '/public/svg/basePreferensAllows.svg',
		},
		{ title: 'Никакие', img: '/public/svg/notAllows.svg' },
		{
			title: 'Отменить подписку',
			img: '/public/svg/deleteSub.svg',
			event: deleteSubs,
		},
	]
	const weSubs = 'Вы подписаны'
	const weDisSubs = 'Подписаться'

	const [nameButtonSubs, setNameButtonSubs] = useState(weDisSubs)

	return (
		<div className='flex gap-[10px] w-[500px] font-normal'>
			<img className='size-[40px] rounded-[50%]' src={nowIdVideo.ava} alt='' />
			<div className='flex flex-col'>
				<span>{nowIdVideo.user}</span>
				<span className='text-[13px] text-[#959595]'>
					{nowIdVideo.numberOfViews} подписчиков
				</span>
			</div>
			<div className='flex justify-start'>
				<div
					onClick={() => {
						setNameButtonSubs(weSubs), handleIsSub()
					}}
					className={
						'flex items-center cursor-pointer h-[36px] py-[10px] rounded-[40px] ml-[10px] ' +
						(nameButtonSubs === weDisSubs
							? 'px-[15px] bg-white text-[#000000b7] hover:bg-[#dadada] active:bg-[#bbbbbb] '
							: 'px-[12px] text-[#ffffff] bg-[#2c2c2c] hover:bg-[#3f3f3f] active:bg-[#545454] ') +
						(isSub === 'OPEN' ? borderAnimateStart : borderAnimateEnd)
					}
				>
					{nameButtonSubs === weSubs ? (
						<img className='size-[24px] mr-[6px]' src={variableOnTypeSubs} />
					) : (
						''
					)}

					<p className='font-semibold text-[14px]'>{nameButtonSubs}</p>

					{nameButtonSubs === weSubs ? (
						<img
							className='size-[24px] ml-[6px]'
							src='/public/svg/arrowDirectionBottom.svg'
						/>
					) : (
						''
					)}
				</div>
				{isSub === 'OPEN' ? (
					<div className='absolute flex flex-col py-[8px] justify-start w-[260px] h-[160px] ml-[8px] mt-[-165px] rounded-[10px] bg-[#2c2c2c] text-[#ffff]'>
						{subsSetting.map((link) => (
							<div
								key={link.title}
								className={
									'flex gap-[16px] items-center h-[36px] hover:bg-[#4c4c4c] active:bg-[#727272] ' +
									(variableOnTypeSubs == link.img ? 'bg-[#4c4c4c]' : '')
								}
								onClick={() => {
									link?.event && link.event()
									link.title !== 'Отменить подписку' &&
										setVariableOnTypeSubs(link.img)
									setIsSub('CLOSE')
								}}
							>
								<img className='ml-[12px] size-[24px]' src={link.img} alt='' />
								<p>{link.title}</p>
							</div>
						))}
					</div>
				) : (
					''
				)}
				{disSubsAndClose === 'OPEN' && (
					<div className='fixed flex flex-col justify-center items-center py-[8px] ml-[490px] mt-[-450px] font-normal rounded-[10px] bg-[#252525] text-[#ffff]'>
						<p className='px-[24px] py-[16px]'>{`Отказаться от подписки на канал "${nowIdVideo.user}"?`}</p>
						<div className='flex gap-[5px] pt-[20px]'>
							<span
								onClick={() => {
									setIsSub('CLOSE')
									deleteSubs()
								}}
								className='py-[8px] px-[16px] rounded-[22px] hover:bg-[#7e7e7eaa] active:bg-[#9d9d9dd5]'
							>
								Отмена
							</span>
							<span
								onClick={() => {
									setIsSub('NOT'),
										deleteSubs(),
										setNameButtonSubs(weDisSubs),
										setVariableOnTypeSubs('/public/svg/basePreferensAllows.svg')
								}}
								className='py-[8px] px-[16px] text-[#13a1ed] rounded-[22px] hover:bg-[#13a1ed35] active:bg-[#13a1ed1b]'
							>
								Отказаться от подписки
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
