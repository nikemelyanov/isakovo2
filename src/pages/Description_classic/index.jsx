import styles from './Description200.module.scss';

import ButtonLinkHome from '../../components/ButtonLinkHome';

import houseImg from '../../assets/img/is3.png';
import houseImg2 from '../../assets/img/is2.png';
import houseImg3 from '../../assets/img/is1.png';

function Description_classic() {
  return (
    <div className={styles.container}>
      <ButtonLinkHome />

      <img className={styles.houseImg} src={houseImg} alt="Проект дома" />
      <img className={styles.houseImg} src={houseImg2} alt="Проект дома" />
      <img className={styles.houseImg} src={houseImg3} alt="Проект дома" />
    </div>
  );
}

export default Description_classic;
