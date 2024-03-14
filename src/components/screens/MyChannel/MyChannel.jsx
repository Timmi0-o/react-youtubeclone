import { useLayoutEffect } from 'react'

const MyChannel = () => {
	useLayoutEffect(() => {
		document.title = 'Timmi - YouTube'
	}, [])
	return (
		<div className='flex justify-center items-center h-[100vh] bg-black'>
			<h1 className='text-[120px] text-[#d7d7d7]'>Мой канал</h1>
		</div>
	)
}

export default MyChannel
