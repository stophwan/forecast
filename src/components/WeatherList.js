import React from 'react';
import {useSelector} from 'react-redux';
import Table from 'react-bootstrap/Table';
import WeatherItem from './WeatherItem';

export default function WeatherList(){
    const cities = useSelector(state => state.cities)
    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>City</th>
                <th>Temp</th>
                <th>Humidity</th>
                <th>Pressure</th>
                </tr>
            </thead>
            <tbody>
                {cities.map(item => (<WeatherItem key={item.city.id} data={item}/>))}
            </tbody>
        </Table>
    );
}