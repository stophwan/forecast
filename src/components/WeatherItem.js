import React from 'react';

export default function WeatherItem({data}){
    const {city, list} = data;
    const name = city.name;
    const {temp, pressure, humidity} = list[0].main
    return(
        <tr>
            <td>{name}</td>
            <td>{temp}</td>
            <td>{humidity}</td>
            <td>{pressure}</td>
        </tr>
    )

}