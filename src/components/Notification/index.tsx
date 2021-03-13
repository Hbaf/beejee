import React from 'react';
import classnames from 'classnames';

import { UserMessageType } from 'models';

import classes from './index.module.scss';


interface NotificationProps {
	type: UserMessageType;
	text: string;
	wrapperClass?: string;
}

const Notification: React.FC<NotificationProps> = ({ type, text, wrapperClass }) => (
	<div
		className={classnames(
			classes.container,
			wrapperClass,
			type === UserMessageType.Success && classes.success,
			type === UserMessageType.Error && classes.error,
			type === UserMessageType.Warning && classes.warning,
			type === UserMessageType.Info && classes.info
		)}
	>
		<p className={classes.description}>
			{text}
		</p>
	</div>
);

export default Notification;
