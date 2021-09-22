import 'react-dropdown/style.css';
import './booking-bar.styles.scss';

import Dropdown from 'react-dropdown';

const fromToData = [
    '3 Jan 2020 - 28 Feb 2020',
    '4 Feb 2020 - 5 March 2020',
    '12 Sep 2020 - 15 Sep 2020',
    '29 Nov 2020 - 30 Nov 2020',
]

const forData = [
    '2 Guests',
    '3 Guests',
    '4 Guests',
]

export const BookingBar = () => {
    return (
        <nav className="booking-bar">
            <ul className="booking-bar-list">
                <li className="booking-bar-list-item">
                    <p className="booking-bar-list-item-label">
                        From / To
                    </p>
                    <Dropdown className="booking-bar-list-item-dropdown" options={fromToData} value={fromToData[0]} />
                </li>
                <li className="booking-bar-list-item">
                    <p className="booking-bar-list-item-label">
                        For
                    </p>
                    <Dropdown className="booking-bar-list-item-dropdown" options={forData} value={forData[0]} />
                </li>
                <li className="booking-bar-list-item">
                    <p className="booking-bar-list-item-label">
                        £ Per night
                    </p>
                    <p className="booking-bar-list-item-value">
                        345
                    </p>
                </li>
                <li className="booking-bar-list-item">
                    <p className="booking-bar-list-item-label">
                        £ Total for 54 nights
                    </p>
                    <p className="booking-bar-list-item-value">
                        18, 630
                    </p>
                </li>
                <li className="booking-bar-list-item">
                    <button className="btn btn-primary">
                        INSTANT BOOKING
                    </button>
                </li>
            </ul>
        </nav>
    )
}