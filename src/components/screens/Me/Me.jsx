import { useLayoutEffect } from 'react'

const Me = () => {
	useLayoutEffect(() => {
		document.title = 'YouTube'
	}, [])
	return (
		<div className='flex justify-center items-center h-[100vh] bg-black'>
			<h1 className='text-[120px] text-[#d7d7d7]'>Я генгестер</h1>
		</div>
	)
}

export default Me
