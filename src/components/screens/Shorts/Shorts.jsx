import { useSelector } from 'react-redux'

const Shorts = () => {
	const showSidebar = useSelector((state) => state.header.sidebar)
	console.log('showSidebar', showSidebar)
	return (
		<>
			<div className='font-[Roboto] flex justify-center items-center w-[100%] h-[100vh] bg-black'>
				<div className='flex flex-col justify-center items-center'>
					<h1 className='text-[120px] text-[#d7d7d7]'>
						Че то типа коротких видео
					</h1>
				</div>
			</div>
		</>
	)
}

export default Shorts
