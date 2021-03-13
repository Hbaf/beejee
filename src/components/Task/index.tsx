import React, { useState } from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';

import { ITask, TaskStatus } from 'models';
import { TASK_STATUS_NAMES } from 'consts';
import Input from 'components/Input';
import IndexStore from 'stores';

import classes from './index.module.scss';


interface TaskProps {
	task: ITask;
	canEdit?: boolean;
	wrapperClass?: string;
	store?: IndexStore;
}

const Task: React.FC<TaskProps> = ({ task, canEdit, store, wrapperClass }) => {
	const [editing, toggleEditing] = useState(false);
	const [text, setText] = useState(task.text);

	const canComplete = task.status !== TaskStatus.Complete && task.status !== TaskStatus.Complete_Edited;

	const formSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		store!.data.editTask(task.id, text);
		toggleEditing(false);
	};

	return (
		<div
			className={classnames(
				classes.container,
				wrapperClass,
				task.status === TaskStatus.Created && classes.created,
				task.status === TaskStatus.Created_Edited && classes.created_edited,
				task.status === TaskStatus.Complete && classes.complete,
				task.status === TaskStatus.Complete_Edited && classes.complete_edited
			)}
		>
			<form onSubmit={formSubmitHandler}>
				<div className={classes.header}>
					<div>
						<h2 className={classes.title}>
							{task.username}
						</h2>
						<p className={classes.hint}>
							{task.email}
						</p>
					</div>
					<p className={classes.status}>
						{TASK_STATUS_NAMES[task.status]}
					</p>
				</div>
				{
					editing ?
						<Input
							required
							wrapperClass={classes.description}
							value={text}
							onChange={setText}
						/>
						:
						<p className={classes.description}>
							{task.text}
						</p>
				}
				<div className={classes.controls}>
					{
						canEdit &&
						<button
							type={'button'}
							className={classes.editButton}
							onClick={() => toggleEditing(!editing)}
						/>
					}
					{
						canEdit && editing &&
						<button
							type={'submit'}
							className={classes.saveButton}
						/>
					}
					{
						canEdit && canComplete &&
						<button
							type={'button'}
							className={classes.completeButton}
							onClick={() => store!.data.completeTask(task.id)}
						/>
					}
				</div>
			</form>
		</div>
	);
};

export default inject('store')(observer(Task));
