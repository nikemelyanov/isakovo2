import { Link } from "react-router-dom";
import styles from "../CardLandSale/CardLandSale.module.scss";

function CardLandSale({ title, bgImage, linkPath }) {
  return (
    <div className={styles.cardHouse}>
      <Link to={linkPath}>
        <div className={styles.cardHouseIntro}>
          <div>Старт сезона <span>2024</span></div>
        </div>
        <div className={styles.cardHouseIntro2}>
          <div>Всего <span>33</span> дома</div>
        </div>
        <div className={styles.cardHouseIntro3}>
          <div>Возможность покупки</div>
          <div> в ипотеку <span>и рассрочку</span></div>
        </div>
        <img className={styles.cardImg} src={bgImage} alt="Купить земельный участок" />
        <div className={styles.cardHouseTitle}>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default CardLandSale;
