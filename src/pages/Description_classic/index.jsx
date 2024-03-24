import styles from './Description200.module.scss';

import ButtonLinkHome from '../../components/UI/ButtonLinkHome';

import classic1 from '../../assets/img/is3.png';
import classic2 from '../../assets/img/is2.png';
import classic3 from '../../assets/img/is1.png';

import modern1 from '../../assets/img/s1.png';
import modern2 from '../../assets/img/s2.png';
import modern3 from '../../assets/img/s3.png';

import plan from '../../assets/img/image9.png';

function Description_classic() {
  return (
    <div className={styles.container}>
      <ButtonLinkHome />

      <p className={styles.title}>Решение, проверенное временем.</p>
      <p className={styles.text}>
        К выбору предлагаются классическое исполнение в стиле Райт, и более
        современный вид кладки.
      </p>

      <div className={styles.boxImg}>
        <p className={styles.textLine}>Вариант в классическом исполнении</p>

        <div className={styles.containerImg}>
          <img className={styles.houseImg} src={classic1} alt="Проект дома" />
          <img className={styles.houseImg} src={classic2} alt="Проект дома" />
        </div>
      </div>
      <img className={styles.houseImg} src={classic3} alt="Проект дома" />

      <p className={styles.subTitle}>Вариант в современном исполнении</p>

      <img className={styles.houseImg} src={modern3} alt="Проект дома" />
      <img className={styles.houseImg} src={modern2} alt="Проект дома" />
      <img className={styles.houseImg} src={modern1} alt="Проект дома" />

      <div className={styles.boxPlan}>
        <p className={styles.title2}>
          План, продуманный до мельчайших деталей.
        </p>
        <img className={styles.houseImg} src={plan} alt="Проект дома" />
        <div className={styles.boxPlanPoster}>
          <div className={styles.planInfo}>
            <p>172м2</p>
          </div>
          <div className={styles.planInfo}>
            <p>Мастер-блок</p>
          </div>
          <div className={styles.planInfo}>
            <p>Постирочная</p>
          </div>
          <div className={styles.planInfo}>
            <p>Просторная гостинная</p>
          </div>
          <div className={styles.planInfo}>
            <p>Эргономично</p>
          </div>
          <div className={styles.planInfo}>
            <p>Терраса для всей семьи</p>
          </div>
        </div>

        <p className={styles.text2}>
          Данный проект много лет дорабатывался нашей командой, он прошел долгий
          путь от небольшого домика 120м2 до гиганта 400м2. Тем не менее,
          идеальная формула была найдена не так давно - 172м2.
        </p>
      </div>
    </div>
  );
}

export default Description_classic;
