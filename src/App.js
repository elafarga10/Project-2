import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { NavigationBar } from './NavigationBar';
import { Layout } from './Layout';
import { Slideshow } from './Carousel';
import { Country } from './Country';
import { NoMatch } from './NoMatch';
import { About } from './About';
import { Donate } from './Donate';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			countries: null,
			countryName: '',
		};
	}

	componentDidMount() {
		let url = 'https://api.covid19api.com/summary';
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					data: response,
					countries: response.Countries,
				});
			});
	}

	handleChange = (event) => {
		this.setState({ countryName: event.target.value }, () => {});
	};

	resetState = (input) => {
		if (input.target.value === '') {
			return <NoMatch />;
		}
	};

	clearButton = () => {
		this.setState({countryName: ''})
	}

	handleKeyPress = (event) => {
		console.log(this.state.countryName, event.key)
		if (event.key.toLowerCase() === 'enter') {
			// window.location.assign(`/countries/${this.state.countryName}`);
			window.location = `/countries/${this.state.countryName}`;
		}
	}

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
											resetState={this.resetState}
											clearButton={this.clearButton}
											handleKeyPress={this.handleKeyPress}
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
											country.Country.toLowerCase() ===
											routerProps.match.params.name.toLowerCase()
									);
									if (country) {
										return (
											<Country
												name={country.Country}
												cases={country.TotalConfirmed}
												deaths={country.TotalDeaths}
												recovered={country.TotalRecovered}
												newCases={country.NewConfirmed}
												newDeaths={country.NewDeaths}
												newRecovered={country.NewRecovered}
												countryName={this.state.countryName}
												handleChange={this.handleChange}
												clearButton={this.clearButton}
											/>
										);
									} else {
										return (
											<NoMatch
												countryName={this.state.countryName}
												handleChange={this.handleChange}
												clearButton={this.clearButton}
											/>
										);
									}
								}}
							/>
							<Route path='/about' component={About} />
							<Route path='/donate' component={Donate} />
							<Route path='/*'
								render={() => {
									return (
										<NoMatch
											countryName={this.state.countryName}
											handleChange={this.handleChange}
											clearButton={this.clearButton}
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
