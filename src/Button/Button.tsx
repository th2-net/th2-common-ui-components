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
import { Colors } from '../helpers';

export type ButtonProps = Pick<MUIButtonProps, 'children' | 'onClick' | 'sx' | 'disabled'> & {
	buttonType: 'primary' | 'secondary' | 'small';
};

const StyledButton = styled(
	MUIButton,
	{},
)<ButtonProps>(({ buttonType }) => ({
	border: '1px solid',
	borderRadius: '8px',
	textTransform: 'none',
	fontStyle: 'normal',
	fontWeight: 500,
	fontSize: '14px',
	lineHeight: '16px',
	padding: '8px 24px 8px 24px',
	...(buttonType === 'primary' && {
		borderColor: Colors.primary[100],
		backgroundColor: Colors.primary[100],
		boxShadow: ' 0px 0.5px 2px rgba(0, 0, 0, 0.1)',
		'&:hover': {
			borderColor: Colors.primary[80],
			backgroundColor: Colors.primary[80],
			boxShadow: '0px 0.5px 2px rgba(0, 0, 0, 0.1)',
		},
		'&:focus': {
			backgroundColor: Colors.primary[24],
			borderColor: Colors.primary[24],
			boxShadow: '0px 0.5px 2px rgba(0, 0, 0, 0.1)',
			color: Colors.primary[100],
		},
	}),
	...(buttonType === 'secondary' && {
		color: Colors.primary[100],
		borderColor: Colors.primary[100],
		backgroundColor: 'transparent',
		boxShadow: 'none',
		filter: 'drop-shadow(0px 0.5px 2px rgba(0, 0, 0, 0.1))',
		'&:hover': {
			boxShadow: 'none',
			color: Colors.primary[80],
			borderColor: Colors.primary[80],
			backgroundColor: 'transparent',
			filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.15))',
		},
		'&:focus': {
			boxShadow: 'none',
			color: Colors.grey[80],
			borderColor: Colors.grey[80],
			backgroundColor: 'transparent',
			filter: 'drop-shadow(0px 0.5px 2px rgba(0, 0, 0, 0.1))',
		},
	}),
	...(buttonType === 'small' && {
		background: Colors.white[100],
		boxShadow: '0px 0.5px 2px rgba(0, 0, 0, 0.1)',
		borderRadius: '16px',
		color: Colors.primary[100],
		border: '1px solid',
		borderColor: '#FFFFFF',
		'&:hover': {
			borderColor: Colors.lightGrey[60],
			backgroundColor: Colors.lightGrey[60],
			boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.15)',
			color: Colors.primary[80],
		},
		'&:focus': {
			backgroundColor: Colors.primary[24],
			borderColor: Colors.primary[24],
			boxShadow: '0px 0.5px 2px rgba(0, 0, 0, 0.1)',
			color: Colors.primary[100],
		},
	}),
}));

export function Button(props: ButtonProps) {
	return <StyledButton variant={'contained'} {...props} />;
}

Button.defaultProps = {
	disabled: false,
};
