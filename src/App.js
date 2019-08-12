import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import data from './data';

import { ProductContext } from './contexts';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		setCart([...cart, item]);
	};

	const removeItem = (id) => {
		setCart(cart.filter(item => item.id !== id));
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem, removeItem }} >
				<Navigation cart={cart} />

				<Route exact path="/" component={Products} />

				<Route
					exact
					path="/cart"
					render={() => <ShoppingCart cart={cart} removeItem={removeItem} />}
				/>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
