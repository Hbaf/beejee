import React from 'react';

import classnames from 'classnames';

import classes from './index.module.scss';


interface ButtonProps {
	color?: 'blue' | 'yellow';
	wrapperClass?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ color, wrapperClass, ...props }) => (
	<button
		className={classnames(
			classes.container,
			wrapperClass,
			color === 'yellow' && classes.yellow,
			color === 'blue' && classes.blue
		)}
		{...props}
	>
		{props.children}
	</button>
);

Button.defaultProps = {
	color: 'yellow',
};

export default Button;
