import './rooms-section.styles.scss';

import { FaMapMarkerAlt, FaBusAlt, FaExpandAlt } from 'react-icons/fa';
import { Room } from "./room.component"

export const RoomsSection = () => {
    return (
        <section className="rooms-section">
            <h1 className="rooms-section-title">
                Monsieur Didot
            </h1>
            <ul className="rooms-section-properties">
                <li className="rooms-section-properties-item">
                    4 people
                </li>
                <li className="rooms-section-properties-item">
                    2 bedrooms
                </li>
                <li className="rooms-section-properties-item">
                    2 bathrooms
                </li>
                <li className="rooms-section-properties-item">
                    Private terrasse
                </li>
                <li className="rooms-section-properties-item">
                    Peaceful
                </li>
            </ul>
            <ul className="rooms-section-location">
                <li className="rooms-section-location-item">
                    <FaMapMarkerAlt />
                    <span className="rooms-section-location-item-text">
                        Notthing Hill, London
                    </span>
                </li>
                <li className="rooms-section-location-item">
                    <FaBusAlt />
                    <span className="rooms-section-location-item-text">
                        Walk 6 mins (Westbourne Park Station)
                    </span>
                </li>
                <li className="rooms-section-location-item">
                    <FaExpandAlt />
                    <span className="rooms-section-location-item-text">
                        Stairs
                    </span>
                </li>
            </ul>
            <Room />
        </section>
    )
}