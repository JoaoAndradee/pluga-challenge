import PropTypes from 'prop-types';

import '../styles/components/PageNavigation.css';

const PageNavigation = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="page-navigation" data-testid="page-navigation">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : ''}
          data-testid="page-navigation-item"
        >
          {page}
        </button>
      ))}
    </div>
  );
}

PageNavigation.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default PageNavigation;
