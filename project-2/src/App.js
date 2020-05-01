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

	clearButton = (input) => {
		return (input.target.value = '');
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
										/>
									);
								}}
							/>
							<Route path='/about' component={About} />
							<Route path='/donate' component={Donate} />
							<Route component={NoMatch} />
						</Switch>
					</Router>
				</Layout>
			</>
		);
	}
}

export default App;
