import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { colors } from './colors';

export { Theme };

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.purpleHeart,
    },
    secondary: {
      main: colors.white,
    },
  },
  overrides: {
    MuiFormHelperText: {
      root: {
        '&:empty': {
          display: 'none',
        },
      },
    },
  },
});

export const darkTheme: Theme = createMuiTheme({
  ...theme,

  palette: {
    primary: theme.palette.secondary,
    secondary: theme.palette.primary,
  },

  shadows: theme.shadows.map(item =>
    item.replace(/0,0,0/g, '255,255,255'),
  ) as typeof theme.shadows,

  overrides: {
    ...theme.overrides,

    MuiDrawer: {
      paper: {
        ...theme.overrides?.MuiDrawer?.paper,
        backgroundColor: colors.blackCurrant,
        color: colors.silver,
      },
    },

    MuiFormLabel: {
      root: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
    },

    MuiInputBase: {
      root: {
        color: 'rgba(255, 255, 255, 0.87)',
      },
    },

    MuiOutlinedInput: {
      root: {
        '&:hover $notchedOutline': {
          borderColor: 'rgba(255, 255, 255, 0.87)',
        },
      },

      notchedOutline: {
        borderColor: 'rgba(255, 255, 255, 0.23)',
      },
    },

    MuiSelect: {
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
    },
  },
});

export const gradients = {
  purple: 'linear-gradient(360deg, #7357D2 0%, #8E41DC 100%)',
};
