import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Typography, Spin } from 'antd'
import { getArticleList } from '../../actions/article'
import './article.less'
const { Title, Paragraph, Text } = Typography
class Props {
	articleAction: any
	articleList: any
	getArticleList: any = getArticleList
	isLoading!: boolean
}
const Article = (props: Props) => {
	useEffect(() => {
		props.getArticleList()
		console.log(props)
	}, [])
	return (
		<>
			<div className='title'>Article</div>
			<ul className='articleList'>
				{props.isLoading ? (
					<div className='loading'>
					<Spin size='large' tip='Loading...' />
					</div>
				) : (
					props.articleList.map((item: any) => {
						return (
							<li key={item.id}>
								<Title>
									<p>{item.title}</p>
								</Title>
								<Paragraph ellipsis={{ rows: 5, expandable: true }}>
									<p>{item.content}</p>
								</Paragraph>
							</li>
						)
					})
				)}
			</ul>
		</>
	)
}
const mapState = (state: any) => ({
	articleList: state.article.articleList,
	isLoading: state.article.isLoading,
})
export default connect(mapState, { getArticleList })(Article)
