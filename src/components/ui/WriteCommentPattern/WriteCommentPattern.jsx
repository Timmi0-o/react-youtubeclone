import { useEffect, useState } from 'react'
import '../../../index.css'
import commentPatternLinks from '../CommentPattern/CommentPatternLinks'
import './WriteCommentPattern.css'

const WriteCommentPattern = ({
	comments,
	setComments,
	nowIdVideo,
	isComment,
	setIsComment,
}) => {
	const [showSubmitComm, setShowSubmitComm] = useState(false)
	const [inputColor, setInputColor] = useState(false)
	useEffect(() => {
		setComments(commentPatternLinks.map((link) => link))
	}, [])

	const handleComm = () => {
		setShowSubmitComm(true)
	}
	const handleCloseComm = () => {
		setShowSubmitComm(false)
	}

	const newComment = () => {
		setComments([
			...comments,
			{
				ava: nowIdVideo.ava,
				user: nowIdVideo.user,
				dateComment: 'Пока статично',
				comment: isComment,
				countLike: 'Статика',
			},
		])
		setIsComment('')
	}

	const inputColorMoveFocus = () => {
		setInputColor(true)
	}

	const inputColorMoveBlur = () => {
		setInputColor(false)
	}

	return (
		<div
			className={
				'flex pt-[24px] ' + (showSubmitComm ? 'h-[120px]' : 'h-[60px]')
			}
		>
			<div className='flex pr-[12px]'>
				<img 
					className='size-[40px] rounded-[50%]'
					src={nowIdVideo.ava}
					alt=''
				/>
			</div>
			<div className='relative flex flex-col items-end w-full'>
				<div
					className={
						'w-[100%] font-normal text-[14px] ' +
						(inputColor
							? 'inputColorAnimation '
							: 'border-b-[1px] border-[#545454]')
					}
					tabIndex={0}
				>
					<textarea
						// onInput={handleTextareaResize}
						onMouseDown={inputColorMoveFocus}
						onBlur={inputColorMoveBlur}
						onClick={handleComm}
						onChange={(e) => setIsComment(e.target.value)}
						className='w-[100%] bg-[transparent] outline-none overflow-hidden resize-none break-all h-[22px] '
						type='text'
						value={isComment}
						placeholder='Вводите комментарий'
					/>
				</div>
				{showSubmitComm && (
					<div className='absolute flex items-center bottom-0 h-[60px]'>
						<span
							onClick={handleCloseComm}
							className='font-normal mr-[12px] hover:bg-[#ffffff2c] active:bg-[#ffffff4d] py-[8px] px-[12px] rounded-[24px]'
						>
							Отмена
						</span>
						<span
							onClick={isComment && newComment}
							className={
								'px-[12px] py-[10px] rounded-[24px] text-[14px] font-medium ' +
								(isComment != ''
									? 'bg-[#3ba0ff] text-[#000000] hover:bg-[#5db1ff] active:bg-[#4789c6] '
									: 'bg-[#ffffff2c] text-[#ffffff57]')
							}
						>
							Оставить комментарий
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default WriteCommentPattern
