import React, { useEffect } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import { SortField } from 'models';
import Task from 'components/Task';
import Button from 'components/Button';
import Input from 'components/Input';
import IndexStore from 'stores';

import { DEFAULT_TASK_AMOUNT_ON_PAGE } from 'consts';

import classes from './index.module.scss';


interface IndexPageProps {
	store?: IndexStore
}

const IndexPage: React.FC<IndexPageProps> = inject('store')(observer(props => {
	useEffect(() => props.store!.setCurrentUrl(window.location.href));
	const store = props.store!.data;
	const canEdit = Boolean(props.store!.auth.token);

	const submitForm = (e: React.FormEvent) => {
		e.preventDefault();
		store.createTask();
	};

	const controlButtonList: Array<{ value: SortField, label: string }> = [{ value: 'id', label: 'По id' }, { value: 'username', label: 'По имени' }, { value: 'email', label: 'По email' }, { value: 'status', label: 'По статусу' }];
	const renderControlButton = (value: SortField, label: string) => (
		<Button
			key={value}
			wrapperClass={classNames(
				classes.sortOrderButton,
				store.sortField === value && classes.selected,
				store.sortField === value && store.sortOrder === 'asc' ? classes.asc : classes.desc
			)}
			onClick={() => store.setSortField(value)}
		>
			{label}
		</Button>
	);

	const hasPrevPage = store.page > 1;
	const hasNextPage = Math.ceil(store.totalTaskAmount / DEFAULT_TASK_AMOUNT_ON_PAGE) > store.page;

	return (
		<main className={classes.container}>
			<div className={classes.content}>
				<div className={classes.controls}>
					{controlButtonList.map(item => renderControlButton(item.value, item.value))}
				</div>
				<div className={classes.taskList}>
					{
						store.taskList.map(task => (
							<Task
								key={task.id}
								task={task}
								canEdit={canEdit}
								wrapperClass={classes.task}
							/>
						))
					}
				</div>
				<div className={classes.pagination}>
					{hasPrevPage ?
						<Button
							wrapperClass={classes.paginationButton}
							onClick={() => store.setPage(store.page - 1)}
						>
							{'<'}
						</Button>
						:
						<div className={classes.paginationButton} />
					}
					<div className={classes.currentPage}>{store.page}</div>
					{hasNextPage ?
						<Button
							wrapperClass={classes.paginationButton}
							onClick={() => store.setPage(store.page + 1)}
						>
							{'>'}
						</Button>
						:
						<div className={classes.paginationButton} />
					}
				</div>
			</div>
			<div className={classes.formWrapper}>
				<h2 className={classes.title}>Создать новую задачу</h2>
				<form
					className={classes.form}
					onSubmit={submitForm}
				>
					<Input
						required
						placeholder={'Username'}
						wrapperClass={classes.field}
						value={store.username}
						onChange={store.setUserName}
					/>
					<Input
						required
						placeholder={'Email'}
						wrapperClass={classes.field}
						value={store.email}
						onChange={store.setEmail}
					/>
					<Input
						required
						placeholder={'Текст задачи'}
						wrapperClass={classes.field}
						value={store.text}
						onChange={store.setText}
					/>
					<Button wrapperClass={classes.submitButton}>Создать</Button>
				</form>
			</div>
		</main>
	);
}));

export default IndexPage;
