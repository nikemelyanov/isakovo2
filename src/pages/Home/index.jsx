import React from 'react';
import styles from '../Home/Home.module.scss';

// Card
import Card from '../../components/Cards/Card';
import Card172 from '../../assets/img/is1.png';
import Card172H from '../../assets/img/h1.png';
import CardIstra from '../../assets/img/istra.jpg';
// CardXl
import CardXl from '../../components/Cards/CardXl';
import CardImgNavigation from '../../assets/img/loc4.jpg';
// CardLandSale
import CardLandSale from '../../components/Cards/CardLandSale';
import landPlotBg from '../../assets/img/landPlotBg.jpg';

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.title}>
            <h1>
              isakovo <span>village</span>
            </h1>
            <p>
              свой дом в деревне, на берегу водохранилища, в окружении леса.
            </p>
          </div>
          <div className={styles.poster_wrapper}>
            <div className={styles.poster}>
              <div className={styles.poster_mask}>
                <p>Вокруг лес и вода</p>
              </div>
            </div>
            <div className={styles.poster}>
              <div className={styles.poster_mask}>
                <p>лес и водохранилище</p>
              </div>
            </div>
            <div className={styles.poster}>
              <div className={styles.poster_mask}>
                <p>ипотека / рассрочка</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.cards_mini}>
            <Card
              title={'варианты кирпичного фасада'}
              bgImage={Card172}
              linkPath={'description_classic'}
              price={'от 19 млн.'}
            />
            <Card
              title={'фасад из панелей phomi'}
              bgImage={Card172H}
              linkPath={'description_hitech'}
              price={'от 18 млн.'}
            />
            <Card
              title={'природа и инфраструктура'}
              bgImage={CardIstra}
              linkPath={'isakovo'}
              maxWidth={true}
            />
          </div>
          <CardLandSale
            title={'выбрать дом'}
            bgImage={landPlotBg}
            linkPath={'plans'}
          />
          <CardXl
            title={'локация'}
            bgImage={CardImgNavigation}
            linkPath={'maps'}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
