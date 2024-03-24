import styles from '../Isakovo/Isakovo.module.scss';

import ButtonLinkHome from '../../components/ButtonLinkHome';

import isakovoImg from '../../assets/img/isakovo.jpg';
import isakovoImg3 from '../../assets/img/isakovo3.jpg';
import isakovoImg4 from '../../assets/img/isakovo4.jpg';
import istraImg1 from '../../assets/img/istra.jpg';
import istraImg2 from '../../assets/img/istra2.jpg';
import istraImg3 from '../../assets/img/istra3.jpg';

function Isakovo() {
  return (
    <div className={styles.main}>
      <ButtonLinkHome />
      <div className={styles.imgContainer}>
        <div className={styles.title}>Природа</div>
        <img src={istraImg1} alt="Природа, поселок, исаково" />
        <img src={istraImg2} alt="Природа, поселок, исаково" />
        <img src={istraImg3} alt="Природа, поселок, исаково" />
        <img src={isakovoImg} alt="Природа, поселок, исаково" />
        <img src={isakovoImg4} alt="Природа, поселок, исаково" />
        <img src={isakovoImg3} alt="Природа, поселок, исаково" />
        <div className={styles.title}>Инфраструктура</div>
        <img src="https://avatars.mds.yandex.net/get-altay/5100737/2a00000181c8265fc01f7824e584321701d3/XXXL" />
      </div>
    </div>
  );
}

export default Isakovo;
