import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../api/index';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    }, [])
    // console.log(fetchedCountries);
    if (!fetchedCountries) {
        return 'Loading...'
    } else {
        return (
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={e => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        )
    }

}

export default CountryPicker
