import Header from '../Components/Header';
import styles from './DefaultLayout.Module.scss';
import classNames from 'classnames/bind';
import SideBar from './SideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}> {children} </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
