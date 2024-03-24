import styles from "../Maps/Maps.module.scss";
import ButtonLinkHome from "../../components/ButtonLinkHome";

function Maps() {
  return (
    <div className={styles.container}>
      <ButtonLinkHome />
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac73d5468d09881de56e19ff265a523ba36a51fc0f8e2c01bb0a0d2845f8247f6&amp;source=constructor"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Maps;
