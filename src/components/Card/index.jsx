import { Link } from 'react-router-dom';
import styles from '../Card/Card.module.scss';

function Card({ title, bgImage, linkPath, price, maxWidth }) {
  return (
    <div className={`${styles.cardHouse} ${maxWidth && styles.maxWidthAdded}`}>
      <Link to={linkPath}>
        <img className={styles.cardImg} src={bgImage} alt="Купить дом" />

        {price && (
          <div className={styles.price}>
            <div className={styles.priceMask}>
              <p>{price}</p>
            </div>
          </div>
        )}

        <div className={styles.cardHouseTitle}>
          <div className={styles.cardHouseTitleMask}>
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
