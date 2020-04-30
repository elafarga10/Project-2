import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { NavigationBar } from './NavigationBar';
import { Layout } from './Layout';
import { Slideshow } from './Carousel';
import { Countries } from './Countries';
import { Country } from './Country';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			countries: null,
			countryName: '',
			selectedCountry: '',
		};
	}

	componentDidMount() {
		let url = 'https://api.covid19api.com/summary';
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				this.setState({
					data: response,
					newConfirmed: response.Global.NewConfirmed,
					countries: response.Countries,
				});
			});
	}

	handleChange = (event) => {
		this.setState({ countryName: event.target.value });
	};

	handleSearch = () => {
		let temp = this.state.countries.find(
			(country) =>
				country.Country.toLowerCase().split(' ').join('') ===
				this.state.countryName.toLowerCase().split(' ').join('')
		);
		console.log(temp);
	};

	render() {
		return (
			<>
				<NavigationBar />
				<Slideshow />
				<Layout>
					<Router>
						<Switch>
							<Route
								path='/'
								exact
								render={() => {
									if (!this.state.data) {
										return null;
									}
									return (
										<Home
											data={this.state.data.Global}
											countryName={this.state.countryName}
											handleChange={this.handleChange}
											handleSearch={this.handleSearch}
										/>
									);
								}}
							/>
							<Route
								exact
								path='/countries/'
								render={(routerProps) => {
									if (!this.state.countries) {
										return null;
									}
									return (
										<Countries
											match={routerProps.match}
											countries={this.state.countries}
										/>
									);
								}}
							/>
							<Route
								exact
								path='/countries/:name'
								render={(routerProps) => {
									if (!this.state.countries) {
										return null;
									}
									let country = this.state.countries.find(
										(country) =>
											country.Country.toLowerCase().split(' ').join('') ===
											routerProps.match.params.name
												.toLowerCase()
												.split(' ')
												.join('')
									);
									console.log(this.state.countries);
									console.log(country);
									return (
										<Country
											name={country.Country}
											cases={country.TotalConfirmed}
											deaths={country.TotalDeaths}
											recovered={country.TotalRecovered}
										/>
									);
								}}
							/>
						</Switch>
					</Router>
				</Layout>
			</>
		);
	}
}

export default App;
