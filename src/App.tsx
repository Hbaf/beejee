import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

import { INDEX_URL, LOGIN_URL } from 'consts';
import Button from 'components/Button';
import Notification from 'components/Notification';
import LoginPage from 'pages/login';
import IndexPage from 'pages/index';
import IndexStore from 'stores';

import classes from './App.module.scss';


interface AppProps {
	store?: IndexStore;
}

const App: React.FC<AppProps> = props => {
	const store = props.store!;

	return (
		<div className={classes.root}>
			<Router>
				<header className={classes.header}>
					<Link
						className={classes.link}
						to={INDEX_URL}
					>
						Главная
					</Link>
					{
						store.auth.token ?
							<Button
								color={'blue'}
								wrapperClass={classes.link}
								onClick={store.auth.logout}
							>
								Выйти
							</Button>
							:
							<Link
								className={classes.link}
								to={LOGIN_URL}
							>
								Авторизация
							</Link>
					}
				</header>
				<Switch>
					<Route path={LOGIN_URL}>
						<LoginPage />
					</Route>
					<Route path={INDEX_URL}>
						<IndexPage />
					</Route>
				</Switch>
			</Router>
			<div className={classes.notificationWrapper}>
				{
					store.ui.messageList.map(message => (
						<Notification
							key={message.id}
							wrapperClass={classes.notification}
							type={message.type}
							text={message.text}
						/>
					))
				}
			</div>
		</div>
	);
};

export default inject('store')(observer(App));
