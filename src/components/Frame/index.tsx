import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './frame.less'
import { Layout } from 'antd'

const Frame = () => {
	return (
		<>
			<Layout.Header className="f-header">
				<Header />
			</Layout.Header>
			<Layout.Content className="f-content">
				<Content />
			</Layout.Content>
			<Layout.Footer className="f-footer">
				<Footer />
			</Layout.Footer>
		</>
	)
}
export default Frame
