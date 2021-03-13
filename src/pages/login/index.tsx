import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

import { INDEX_URL } from 'consts';
import Input from 'components/Input';
import Button from 'components/Button';
import IndexStore from 'stores';

import classes from './index.module.scss';


interface LoginPageProps {
	store?: IndexStore
}

const LoginPage: React.FC<LoginPageProps> = inject('store')(observer(props => {
	useEffect(() => props.store!.setCurrentUrl(window.location.href));
	const store = props.store!.auth;

	const history = useHistory();

	const submitForm = (e: React.FormEvent) => {
		e.preventDefault();
		store.login();
		history.push(INDEX_URL);
	};

	return (
		<main className={classes.container}>
			<div className={classes.formWrapper}>
				<form
					className={classes.form}
					onSubmit={submitForm}
				>
					<h1 className={classes.title}>Авторизация</h1>
					<p className={classes.text}>Введите корректную пару логин/пароль</p>
					<Input
						required
						wrapperClass={classes.field}
						value={store.username}
						placeholder={'Логин'}
						onChange={value => store.setUserName(value)}
					/>
					<Input
						required
						wrapperClass={classes.field}
						value={store.password}
						placeholder={'Пароль'}
						onChange={value => store.setPassword(value)}
					/>
					<Button wrapperClass={classes.button}>
						Войти
					</Button>
				</form>
			</div>
		</main>
	);
}));

export default LoginPage;
