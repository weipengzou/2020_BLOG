import React from 'react'
import { Layout, Col, Row, Input, Button, Image } from 'antd'
import Nav from './Nav/index'
import logo from './logo-white.png'
import './header.less'
import { useHistory } from 'react-router-dom'
interface Props {}
const Header = (props: Props) => {
	const history = useHistory()
	const { Search } = Input
	const { Header } = Layout
	return (
		<Header className="header">
			<Row>
				<Col span={4}>
					<div className="logo">
						<Image
							className="logo-img"
							src={logo}
							alt="LOGO"
							preview={false}
							onClick={() => history.push('/home')}
						/>
						<div className="sologan">
							<div>A BLOG</div>
							<div>个人博客</div>
						</div>
					</div>
				</Col>

				<Col span={10}>
					<Nav />
				</Col>
				<Col span={10}>
					<Search type="text" />
				</Col>
			</Row>
		</Header>
	)
}

export default Header
