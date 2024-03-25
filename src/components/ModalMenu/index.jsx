import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../ModalMenu/ModalMenu.module.scss';

import social1 from '../../assets/icons/1.png';

function ModalMenu({ opened, onClickMenu }) {
  return (
    <div className={`${styles.modalWrapper} ${opened && styles.modalVisible}`}>
      <div className={styles.modal}>
        <div className={styles.modalFlex}>
          <Link to={'/'}>
            <div className={styles.logo}>ISAKOVO VILLAGE</div>
          </Link>
          <ul>
            <li>
              <Link to={'/'}>
                <p>на главную</p>
              </Link>
            </li>
            <li>
              <Link to={'plans'}>
                <p>План поселка</p>
              </Link>
            </li>
            <li>
              <Link to={'description_classic'}>
                <div className={styles.presentHouseFlex}>
                  <p>Кирпичные фасады</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'#'}>
                <div className={styles.presentHouseFlex}>
                  <p>Фасад phomi</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/isakovo'}>
                <p>инфраструктура рядом</p>
              </Link>
            </li>
            <li>
              <Link to={'/maps'}>
                <p>локация и контакты</p>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <p>контакты</p>
              </Link>
            </li>
            <li>
              <p className={styles.phone}>+7 495 166 24 24</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.modalClose} onClick={onClickMenu()}></div>
    </div>
  );
}

export default ModalMenu;
