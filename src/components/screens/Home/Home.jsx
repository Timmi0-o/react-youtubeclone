import { useLayoutEffect } from 'react'
import MainSectionVideo from '../../layout/MainSectionVideo/MainSectionVideo'
import { videoItem } from '../../layout/VideoItemCart/VideoItemCartLink'

const Home = () => {
	useLayoutEffect(() => {
		document.title = `(${videoItem.length}) YouTube`
	}, [])

	return (
		<>
			<div className='flex justify-center items-start bg-black h-[100vh]'>
				<MainSectionVideo />
			</div>
		</>
	)
}

export default Home
