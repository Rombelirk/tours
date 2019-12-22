
import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
const YandexMap = ({ location, zoom }) => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <YMaps query={{ lang: 'en_US' }}>
                <Map width={"100%"} defaultState={{ center: [location.lat, location.lng], zoom: zoom }} />
            </YMaps>
        </div>
    )
}

export default YandexMap;