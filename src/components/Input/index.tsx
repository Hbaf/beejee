import React from 'react';
import classnames from 'classnames';

import classes from './index.module.scss';


interface InputProps {
	value: string;
	required?: boolean;
	placeholder?: string;
	wrapperClass?: string;
	onChange?: (value: string) => void;
}


const Input: React.FC<InputProps> = ({ wrapperClass, onChange, ...props }) => (
	<input
		className={classnames(classes.container, wrapperClass)}
		onChange={onChange ? e => onChange(e.target.value) : undefined}
		{...props}
	/>
);

export default Input;
