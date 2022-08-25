import { Link, useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
// material-ui
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { Grid, Typography, Divider } from '@mui/material';
import { AllRoutes, AllExcludeBreadcrumbPath } from 'routes/index';

// ==============================|| BREADCRUMBS ||============================== //

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(AllRoutes, { disableDefaults: true });
  let breadcrumbContent = null;
  if (AllExcludeBreadcrumbPath.includes(location.pathname) === false) {
    breadcrumbContent = (
      <>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-end"
          spacing={3}
        >
          <Grid item>
            <MuiBreadcrumbs aria-label="breadcrumb">
              {breadcrumbs.map(({ match, breadcrumb }) => (
                <span key={match.pathname}>
                  <Typography
                    component={Link}
                    to={match.pathname}
                    variant="h6"
                    color="textPrimary"
                    sx={{ textDecoration: 'none' }}
                  >
                    <FormattedMessage id={breadcrumb.props.children} />
                  </Typography>
                </span>
              ))}
            </MuiBreadcrumbs>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />
      </>
    );
  }

  return breadcrumbContent;
};

export default Breadcrumbs;
