import { Link } from 'react-router-dom';

import styles from '../ButtonLinkHome/ButtonLinkHome.module.scss';

import arrow from '../../assets/icons/arrow-left.png';

function ButtonLinkHome() {
  return (
    <Link to={'/'}>
      <div className={styles.button}>
        <img src={arrow} alt="goBack" width={'30'}></img>
      </div>
    </Link>
  );
}

export default ButtonLinkHome;
