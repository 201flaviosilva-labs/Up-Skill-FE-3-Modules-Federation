import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Card from "./components/card";
import { List, ListItem } from "./components/list";
import { CATEGORIES, TOP_PRODUCTS } from "./mock_data";
import "./style.css";

export default function App() {
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		will.subscribe("route-change", ({ route }) => setShouldRender(route === "/"));
	}, []);

	return (
		<BrowserRouter>
			{shouldRender && <>
				<section id="products__container">
					<h2>Top Products</h2>
					<div className="card__container">
						{TOP_PRODUCTS.map((product) => (
							<Card
								key={product.id}
								img={product.img}
								text={product.text}
								href={product.href}
							/>
						))}
					</div>
				</section>
				<section id="categories__container">
					<h2>Categories</h2>
					<List>
						{CATEGORIES.map((category) => (
							<ListItem
								key={category.id}
								text={category.text}
								href={category.href}
							/>
						))}
					</List>
				</section>
			</>}
		</BrowserRouter>
	);
}
