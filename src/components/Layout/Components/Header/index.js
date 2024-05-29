import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return(
    <div className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className= {cx('logo')}>
                
            </div>
        </div>
    </div>
    );
}

export default Header;
