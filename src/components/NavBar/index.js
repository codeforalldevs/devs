import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import SearchBox from '../SearchBox';

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <nav className="navbar is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <strong>DevSquad</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target="navMenu"
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          id="navMenu"
        >
          <div className="navbar-end">
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/pricing">
              How it works
            </Link>
            <Link className="navbar-item" to="/about">
              Why us?
            </Link>
            <Link className="navbar-item" to="/blog">
              Success stories
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link className="button is-primary is-outlined" to="/contact">
                    Login / Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
);

export default NavBar;
