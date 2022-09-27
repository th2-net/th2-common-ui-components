/** *****************************************************************************
 * Copyright 2020-2022 Exactpro (Exactpro Systems Limited)
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
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material';

export type ButtonProps = Pick<MUIButtonProps, 'children' | 'onClick' | 'sx' | 'disabled'> & {
	buttonType: 'primary' | 'secondary';
};

const StyledButton = styled(
	MUIButton,
	{},
)<ButtonProps>(({ buttonType }) => ({
	borderRadius: '8px',
	textTransform: 'none',
	fontStyle: 'normal',
	fontWeight: 500,
	fontSize: '14px',
	lineHeight: '16px',
	padding: '8px 24px 8px 24px',
	boxShadow: '0px 0.5px 2px rgba(0, 0, 0, 0.1)',
	boxSizing: 'border-box',
	...(buttonType === 'primary' && {
		border: '1px solid #4E8AFF',
		backgroundColor: '#4E8AFF',
		'&:hover': { backgroundColor: 'rgba(113, 162, 255, 1)' },
		'&:focus': {
			backgroundColor: 'rgba(221, 233, 255, 1)',
			boxShadow: '0px 0.5px 2px rgba(0, 0, 0, 0.1)',
			color: 'rgba(78, 138, 255, 1)',
		},
	}),
	...(buttonType === 'secondary' && {
		color: '#4E8AFF',
		borderColor: '#4E8AFF',

		'&:hover': {
			color: 'rgba(113, 162, 255, 1)',
			borderColor: 'rgba(113, 162, 255, 1)',
		},
		'&:focus': {
			color: 'rgba(88, 88, 88, 1)',
			borderColor: 'rgba(88, 88, 88, 1)',
		},
	}),
}));

export function Button(props: ButtonProps) {
	const variant = props.buttonType === 'primary' ? 'contained' : 'outlined';

	return <StyledButton variant={variant} {...props} />;
}

Button.defaultProps = {
	disabled: false,
};
