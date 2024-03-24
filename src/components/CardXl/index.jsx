import { Link } from "react-router-dom";
import styles from "../CardXl/CardXl.module.scss";

function CardXl({ title, bgImage, linkPath }) {
  return (
    <div className={styles.cardHouse}>
      <Link to={linkPath}>
        <img className={styles.cardImg} src={bgImage} alt="Локация поселка" />
        <div className={styles.cardHouseTitle}>
          <div className={styles.cardHouseTitleMask}>
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardXl;
