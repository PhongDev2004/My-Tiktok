import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avater')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=30310797&x-expires=1706061600&x-signature=4Dc5uJQHH4tBsvnJMP3hv9bpMWw%3D"
                alt="Image account"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Jony Nguyen</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>jonynguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;
