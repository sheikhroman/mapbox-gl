import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlaWtocm9tYW4iLCJhIjoiY2t2MGg1dXhwMG1hbDJ0cjJqZnR2djZmdCJ9.iUzJE8DaWXj3orGj8VuN4g';
const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.412521, 23.810331],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;