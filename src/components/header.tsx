import React, { Fragment, useState } from "react";
import { Link, navigate } from "gatsby";
import styles from "./header.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import searchIcon from '../assets/icon/search.svg'

interface HeaderProps {
  extendedSearchbar: boolean;
}

const Header = (props: HeaderProps) => {
  const searchInputHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement
      navigate(
        "/search-result/",
        {
          state: { searchTerm: target.value, tags: [] },
        }
      )
    }
  }
  return (
    <header>
      <Container fluid>
        <Row className={styles.headerRow}>
          <Col lg={5} xl={5}>
            <div className={styles.inputContainer}>
              <input 
                className={[
                  props.extendedSearchbar ? "d-none" : "",
                  styles.navSearch
                ].join(" ")}
                type="text"
                placeholder="Search"
                onKeyUp={searchInputHandler}
              />
              <img className={styles.inputIcon} src={searchIcon} alt=""/>
            </div>
          </Col>
          <Col lg={7} xl={7}>
            <ul className={styles.navList}>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/perspectives"
                >
                  Perspectives
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navItem}
                  activeClassName={styles.activeNavItem}
                  to="/philosophy"
                >
                  DPD Philosophy
                </Link>
              </li>
              <li>
                <button className={styles.navButton}>Subscribe</button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
