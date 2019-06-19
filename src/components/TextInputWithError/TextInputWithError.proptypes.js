import PropTypes from 'prop-types';

import Constants from '../../constants';

const propTypes = {
  onValueChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string
};

const defaultProps = {
  onValueChange: Constants.NOOP,
  onBlur: Constants.NOOP,
  value: '',
  error: '',
  type: 'none'
};

export default {
  propTypes,
  defaultProps
};
