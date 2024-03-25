import styles from '../Maps/Maps.module.scss';
import ButtonLinkHome from '../../components/UI/ButtonLinkHome';

function Maps() {
  return (
    <div className={styles.container}>
      <ButtonLinkHome />
      <div className={styles.info}>
        <div className={styles.infoBox}>
          <h1>Офис продаж</h1>
          <p className={styles.text}>
            Рады приветствовать вас в нашем офисе продаж.
          </p>
          <p className={styles.text}>
            <span>Поселок Isakovo Village располагается по адресу:</span>{' '}
            Московская обл. Солнечногорский р-н, село Исаково.
          </p>
          <p className={styles.text}>
            <span>Центральный офис продаж располагается по адресу:</span>{' '}
            Московская обл. Солнечногорский р-н, д. Лопотово, ул. Акватория
            Истры. д. 1.
          </p>
          <div className={styles.posterBox}>
            <div className={styles.poster}>
              <p>25 минут Зеленоград</p>
            </div>
            <div className={styles.poster}>
              <p>У нас живут</p>
            </div>
            <div className={styles.poster}>
              <p>Лоси?!</p>
            </div>
            <div className={styles.poster}>
              <p>Зайцы</p>
            </div>
            <div className={styles.poster}>
              <p>И вообще</p>
            </div>
            <div className={styles.poster}>
              <p>Место красивое</p>
            </div>
            <div className={styles.poster}>
              <p>И тихое!</p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac73d5468d09881de56e19ff265a523ba36a51fc0f8e2c01bb0a0d2845f8247f6&amp;source=constructor"
        width="100%"
        height="100%"
        frameborder="0"
        className={styles.map}
      ></iframe>
    </div>
  );
}

export default Maps;
