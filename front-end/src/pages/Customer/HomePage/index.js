import Header from '~/components/Header';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import HeroSection from './HeroSection';
import FeatureSection from '~/pages/Customer/HomePage/FeatureSection';
import Footer from '~/components/Footer/Footer';
import Delivery from '~/pages/Customer/HomePage/DeliverySection/Delivery';
const cx = classNames.bind(styles);
function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <HeroSection />
            <FeatureSection />
            <Delivery />
            <Footer />
        </div>
    );
}

export default HomePage;
