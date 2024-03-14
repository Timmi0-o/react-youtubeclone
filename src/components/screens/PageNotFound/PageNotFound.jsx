import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
	useLayoutEffect(() => {
		document.title = '404'
	}, [])
	return (
		<>
			<div className='font-[Roboto] flex justify-center items-center w-[100%] h-[100vh] bg-black'>
				<div className='relative flex flex-col justify-center items-center'>
					<h1 className='text-[250px] text-[#d7d7d7]'>404</h1>
					<Link
						className='absolute mt-[500px] text-[#fff] text-[30px] no-underline hover:text-[#a8a8a8] hover:border-[1px] hover:border-[#646464] active:text-[#7f7f7f] active:border-[#949494] rounded-[10px] duration-[150ms]'
						to='/'
					>
						На главную
					</Link>
				</div>
			</div>
		</>
	)
}

export default PageNotFound
