import styles from "../Plans/Plans.module.scss";

import ButtonLinkHome from "../../components/ButtonLinkHome";

import plansImg from "../../assets/img/plan2.jpg";

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
          Помимо готового дома, вы можете приобрести участок без
          подряда, кол-во участков ограниченно.
        </p>
        <div className={styles.numb}><span>уч.</span> 24 - 33</div>
        <p>
          Номера участков в продаже. 
        </p>
      </div>
    </div>
  );
}

export default Plans;
