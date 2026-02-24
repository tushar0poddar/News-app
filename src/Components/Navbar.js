import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

const categories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
];

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const selectedCategory =
    location.pathname === '/' ? 'general' : location.pathname.replace('/', '');

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    history.push(selectedValue === 'general' ? '/' : `/${selectedValue}`);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <nav className="navbar ">
            <img src="news-logo.svg" alt="/" width="75px" height="46px" />
            <div
              className="menu-toggle"
              id="mobile-menu"
              data-bs-toggle="collapse"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="nav no-search">
              <li className="nav-item nav-filter-item">
                <label htmlFor="category-filter" className="category-filter-label">
                  Filter:
                </label>
                <select
                  id="category-filter"
                  className="category-filter-select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </li>
              {categories.map((category) => (
                <li key={category} className="nav-item">
                  <Link to={category === 'general' ? '/' : `/${category}`}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
