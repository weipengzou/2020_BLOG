import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

interface Props {}

const Login = (props: Props) => {
	let history = useHistory()
	return (
		<div>
			登陆页面
			``未完成
			<Button onClick={()=>history.push('/home')}>回到首页</Button>
		</div>
	)
}



export default Login
