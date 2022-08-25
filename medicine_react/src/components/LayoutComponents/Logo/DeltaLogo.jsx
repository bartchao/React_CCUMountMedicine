import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project import
import logoWhite from 'assets/images/logo_white.png';
import logoBlue from 'assets/images/logo_blue.png';
import config from 'config';

// ==============================|| MAIN LOGO ||============================== //

export function LogoSection({ sx, to }) {
  return (
    <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        <DeltaLogo color="white" style={{ width: 100 }} />
      </div>
    </ButtonBase>
  );
}
LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
};
function imgPath(color) {
  switch (color) {
    case 'white':
      return logoWhite;
    case 'blue':
      return logoBlue;
    default:
      return logoBlue;
  }
}
function DeltaLogo({ color, style }) {
  return <img src={imgPath(color)} alt="Delta Logo" style={style} />;
}
export default DeltaLogo;

DeltaLogo.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};
