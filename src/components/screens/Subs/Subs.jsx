import { useLayoutEffect } from 'react'
import { videoItem } from '../../layout/VideoItemCart/VideoItemCartLink'

const Subs = () => {
	useLayoutEffect(() => {
		document.title = `(${videoItem.length}) Подписки - YouTube`
	}, [])
	return (
		<>
			<div className='flex justify-center items-center h-[100vh] bg-black'>
				<h1 className='text-[120px] text-[#d7d7d7]'>Подписки генгенста</h1>
			</div>
		</>
	)
}

export default Subs
