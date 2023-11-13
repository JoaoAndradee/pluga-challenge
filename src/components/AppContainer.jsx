import PropTypes from 'prop-types';

import '../styles/components/AppContainer.css';

const AppContainer = ({children}) => {
  return (
    <div className="app-container" data-testid="app-container">{children}</div>
  );
}

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer;
