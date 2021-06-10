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
import { Story, Meta } from '@storybook/react';

import { Switcher, SwitcherProps } from './Switcher';

export default {
	title: 'Library/Switcher',
	component: Switcher,
	argTypes: {
		disabled: { control: { type: 'boolean' } },
		checked: { control: { type: 'boolean' } },
	},
} as Meta;

const Template: Story<SwitcherProps> = props => {
	const [isChecked, setIsChecked] = React.useState(props.checked || false);

	React.useEffect(() => {
		setIsChecked(isChecked);
	}, [props.checked]);

	return <Switcher {...props} checked={isChecked} onChange={setIsChecked} />;
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};

export const WithLabels = Template.bind({});
WithLabels.args = {
	onLabel: 'incl',
	offLabel: 'excl',
};
