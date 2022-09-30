import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { IWilder } from '../interfaces';
import Wilder from './components/Wilder';
import AddWilder from './components/AddWilder';
import AddSkill from './components/AddSkill';

function App(): JSX.Element {
	const [wilders, setWilders] = useState<IWilder[]>([]);

	const fetchData = async (): Promise<void> => {
		const wilders = await axios.get('http://localhost:5000/api/wilders');
		setWilders(wilders.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<header>
				<div className="container">
					<h1>Wilders Book</h1>
				</div>
			</header>
			<main className="container">
				<h2>Wilders</h2>
				<section className="card-row">
					{wilders.map(wilder => (
						<Wilder
							name={wilder.name}
							city={wilder.city}
							upvote={wilder.upvote}
							id={wilder.id}
							fetchData={() => fetchData()}
							key={wilder.id}
						/>
					))}
				</section>
			</main>
      <h2>Ajouter un Wilder</h2>
			<AddWilder fetchData={() => fetchData()} />
      <br/>
      <h2>Ajouter un Skill</h2>
      <AddSkill fetchData={() => fetchData()}/>
			<footer>
				<div className="container">
					<p>&copy; 2022 Wild Code School</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
