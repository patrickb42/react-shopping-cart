import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import data from './data';

import { ProductContext, CartContext } from './contexts';
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
			<CartContext.Provider value={{ removeItem }} >

				<Navigation cart={cart} />

				<ProductContext.Provider value={{ products, addItem }} >
					<Route exact path="/" component={Products} />

					<Route
						exact
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
