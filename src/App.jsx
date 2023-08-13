import { useState } from 'react';

// import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from './utils/context';

import Stream from './pages/Stream';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/404';
import Main from './pages/Main';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Context.Provider value={[count, setCount]}>
				<BrowserRouter>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/video" component={Stream} />
						<Route exact path="/" component={Main} />
						<Route path="*" component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Context.Provider>
		</>
	);
}

export default App;
