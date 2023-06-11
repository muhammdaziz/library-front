import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export function YandexMap({
    coordinates,
    width,
    height,
                       }) {
    return (
            <YMaps>
                <Map
                    height={height}
                    width={width}
                    defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 10
                    }}
                >
                    <Placemark defaultGeometry={coordinates} />
                </Map>
            </YMaps>
    );
}
