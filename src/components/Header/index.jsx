import React from 'react';

import BurgerButton from '../UI/BurgerButton';

import styles from '../Header/Header.module.scss';

function Header({ onClickMenu }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div onClick={onClickMenu()}>
          <BurgerButton />
        </div>
      </div>
    </nav>
  );
}

export default Header;
