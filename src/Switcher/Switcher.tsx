/** *****************************************************************************
 * Copyright 2020-2021 Exactpro (Exactpro Systems Limited)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************** */

import React from 'react';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';

type SwitcherClassNames =
	| 'disabled'
	| 'switcherRoot'
	| 'switcher'
	| 'switchButton'
	| 'checked'
	| 'checkbox'
	| 'labelText';

const useStyles = createUseStyles<SwitcherClassNames, SwitcherProps>({
	disabled: {
		opacity: 0.5,
		cursor: 'inherit',
	},
	switcherRoot: {
		display: 'flex',
		alignItems: 'center',
	},
	switcher: {
		width: 40,
		height: 20,
		display: 'flex',
		padding: 0,
		overflow: 'hidden',
		position: 'relative',
		flexShrink: 0,
		backgroundColor: props => (props.disabled ? '#a2a1a1' : '#4d4d4d'),
		cursor: props => (props.disabled ? 'default' : 'pointer'),
		boxSizing: 'border-box',
		margin: '0 4px',
		borderRadius: 12,
	},
	switchButton: {
		boxSizing: 'border-box',
		position: 'absolute',
		cursor: props => (props.disabled ? 'default' : 'pointer'),
		zIndex: 1,
		top: 0,
		left: 0,
		margin: 2,
		width: 16,
		height: 16,
		borderRadius: '50%',
		backgroundColor: props => (props.disabled ? '#f7ecd6' : '#ffdd99'),
		transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
	},
	checked: {
		transform: 'translateX(20px)',
	},
	checkbox: {
		margin: 0,
		padding: 0,
		position: 'absolute',
		top: 0,
		zIndex: 1,
		height: '100%',
		width: '350%',
		opacity: 0,
		cursor: props => (props.disabled ? 'default' : 'pointer'),
		left: '-120%',
	},
	labelText: {
		cursor: props => (props.disabled ? 'default' : 'pointer'),
		userSelect: 'none',
	},
});

export interface SwitcherProps {
	disabled?: boolean;
	checked: boolean;
	onChange: (isChecked: boolean) => void;
	onLabel?: string;
	offLabel?: string;
	classNames?: Partial<{
		root: string;
		switcher: string;
		switcherButton: string;
		label: string;
	}>;
}

export function Switcher(props: SwitcherProps) {
	const { checked, onChange, onLabel, offLabel, disabled, classNames = {} } = props;
	const classes = useStyles(props);

	function handleChange(nextState: boolean) {
		if (!disabled) {
			onChange(nextState);
		}
	}

	return (
		<div className={cx(classes.switcherRoot, classNames.root)}>
			{offLabel && (
				<span
					className={cx(classes.labelText, classNames.label)}
					onClick={handleChange.bind(null, false)}>
					{offLabel}
				</span>
			)}
			<span className={cx(classes.switcher, classNames.switcher)}>
				<span
					className={cx(
						classes.switchButton,
						{
							[classes.checked]: checked,
						},
						classNames.switcherButton,
					)}>
					<input
						data-testid='switcher-checkbox'
						type='checkbox'
						className={classes.checkbox}
						checked={checked}
						onChange={e => handleChange(e.target.checked)}
					/>
				</span>
			</span>
			{onLabel && (
				<span
					className={cx(classes.labelText, classNames.label)}
					onClick={handleChange.bind(null, true)}>
					{onLabel}
				</span>
			)}
		</div>
	);
}

Switcher.defaultProps = {
	disabled: false,
};
