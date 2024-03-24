import React from 'react';
import styles from '../BurgerButton/BurgerButton.module.scss'

const BurgerButton = () => {
  return (
    <button className={styles.burgerButton} type="menu button">
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
    </button>
  );
}

export default BurgerButton;