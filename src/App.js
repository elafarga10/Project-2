import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
} from 'react-router-dom';
import { Home } from './Home';
import { NavigationBar } from './NavigationBar';
import { Layout } from './Layout';
import { Slideshow } from './Carousel';
import { Country } from './Country';
import { NoMatch } from './NoMatch';
import { Countries } from './Countries';
import { Info } from './Info';
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
		this.setState({ countryName: '' });
	};

	handleKeyPress = (event) => {
		console.log();
		if (event.key.toLowerCase() === 'enter') {
			this.props.history.push(`/countries/${this.state.countryName}`);
		}
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
												handleKeyPress={this.handleKeyPress}
											/>
										);
									} else {
										return (
											<NoMatch
												countryName={this.state.countryName}
												handleChange={this.handleChange}
												clearButton={this.clearButton}
												handleKeyPress={this.handleKeyPress}
											/>
										);
									}
								}}
							/>
							<Route
								exact
								path='/list'
								render={() => {
									if (!this.state.countries) {
										return null;
									}
									return <Countries countries={this.state.countries} />;
								}}
							/>
							<Route path='/info' component={Info} />
							<Route
								path='/*'
								render={() => {
									return (
										<NoMatch
											countryName={this.state.countryName}
											handleChange={this.handleChange}
											clearButton={this.clearButton}
											handleKeyPress={this.handleKeyPress}
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

export default withRouter(App);
