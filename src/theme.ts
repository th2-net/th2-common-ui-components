import { createTheme } from '@mui/material';

export const th2Theme = createTheme({
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});
