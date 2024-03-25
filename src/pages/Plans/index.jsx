import styles from '../Plans/Plans.module.scss';

import ButtonLinkHome from '../../components/UI/ButtonLinkHome';

import plansImg from '../../assets/img/plan2.jpg';

function Plans() {
  return (
    <div className={styles.container}>
      <ButtonLinkHome />
      <div>
        <img src={plansImg} className={styles.plansImg} alt="Генплан поселка" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>План проекта</div>
        <p>
          Мы регулярно обновляем план свободных участков, если вас заинтересовал
          забронированный участок, свяжитесь с менеджером - возможно бронь уже
          снята.
        </p>
        <div className={styles.numb}>
          <span>уч.</span> 24 - 33
        </div>
        <p>Номера участков в продаже.</p>
      </div>
    </div>
  );
}

export default Plans;
