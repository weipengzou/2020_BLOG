import React, { useEffect } from 'react'
import './content.less'
import { Route, Switch, useHistory, Redirect } from 'react-router-dom'
import routers from '../../../router'
interface Props {}

const Content = (props: Props) => {
	const history = useHistory()
	return (
		<div className='content'>
			<Switch>
				{routers.map(routerItem => {
					return (
						<Route
							key={routerItem.path}
							path={routerItem.path}
							component={routerItem.component}
						/>
					)
				})}
				<Redirect to='/home' />
			</Switch>
		</div>
	)
}

export default Content
