import * as React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import { SelectToken } from 'features/changeActiveToken';
import { Back } from 'components/icons';
import { Grid, IconButton, Typography } from 'components';
import { WithDarkTheme } from 'utils/styles';

import { useStyles } from './Header.style';

interface IOwnProps {
  backRoutePath?: string;
  title: React.ReactNode;
}

type IProps = IOwnProps & RouteComponentProps;

function HeaderComponent(props: IProps) {
  const { title, backRoutePath } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={2}>
        {backRoutePath && (
          <Grid item>
            <IconButton component={Link} to={backRoutePath} className={classes.backButton}>
              <Back />
            </IconButton>
          </Grid>
        )}
        <Grid item xs zeroMinWidth>
          <Typography variant="h5" noWrap className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <WithDarkTheme>
            <SelectToken />
          </WithDarkTheme>
        </Grid>
      </Grid>
    </div>
  );
}

export const Header = withRouter(HeaderComponent);
