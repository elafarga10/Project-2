import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { NavigationBar } from './NavigationBar';
import { Layout } from './Layout';
import { Slideshow } from './Carousel';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			countries: null,
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
				<Slideshow />
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



export default App;
