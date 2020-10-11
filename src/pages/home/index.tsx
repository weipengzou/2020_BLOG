import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './home.less'
interface Props {}

const Home = (props: Props) => {
	const [time, setTime] = useState<string>(moment().format('h:mm:ss'))
	useEffect(() => {
		let timer = setInterval(() => {
			setTime(moment().format('h:mm:ss'))
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	})
	return <div className='clock'>{time}</div>
}

export default Home
