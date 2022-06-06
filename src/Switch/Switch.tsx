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
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MUISwitch, { SwitchProps as MUISwitchProps } from '@mui/material/Switch';

export type SwitchProps = Pick<MUISwitchProps, 'disabled' | 'checked' | 'onChange' | 'sx'> & {
	onLabel?: string;
	offLabel?: string;
};

export function Switch(props: SwitchProps) {
	const { checked, onChange, onLabel, offLabel, disabled, sx } = props;

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (!disabled) {
			onChange(event, event.target.checked);
		}
	}

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
			{offLabel && <Typography>{offLabel}</Typography>}
			<MUISwitch
				checked={checked}
				onChange={handleChange}
				disabled={disabled}
				sx={{
					'.MuiSwitch-switchBase': {
						padding: '5px',
						top: 8,
						left: 8,
						'&.Mui-checked': {
							transform: 'translateX(19px)',
						},
					},
					'.MuiSwitch-thumb': {
						width: 12,
						height: 12,
					},
				}}
			/>
			{onLabel && <Typography>{onLabel}</Typography>}
		</Box>
	);
}

Switch.defaultProps = {
	disabled: false,
};

