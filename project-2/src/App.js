import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { NavigationBar } from './NavigationBar';
import { Layout } from './Layout';
import { Jumbo } from './Jumbotron';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
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

	render() {
		return (
			<>
				<NavigationBar />
				<Jumbo></Jumbo>
				<Layout>
					<Route
						to='/'
						render={() => {
              if(!this.state.data) {
                return null
              }
							return <Home data={this.state.data.Global} />;
						}}
					/>
				</Layout>
			</>
		);
	}
}

{
	/* <h1>{this.state.data?.Countries.map(country => <p key={country.CountryCode}>{country.Country}</p>)}</h1> */
}

export default App;
