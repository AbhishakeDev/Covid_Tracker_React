import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './components/api/index'

class App extends Component {

  state = {
    data: {},
    country: null
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
    console.log(this.state.country);
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <img src="https://i.ibb.co/7QpKsCX/image.png" alt="corona image" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
