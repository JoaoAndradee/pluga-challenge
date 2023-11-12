import '../styles/components/PageNavigation.css';

const PageNavigation = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="page-navigation">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default PageNavigation;
