import React from 'react';
import { Country } from './Country'


export const Countries = (props) => {
    return (
        <div>
            {props.countries.map(country => (
                <Country key={country.CountryCode} name={country.Country} cases={country.TotalConfirmed} deaths={country.TotalDeaths} recovered={country.TotalRecovered}/>
            ))}
        </div>
    )
}