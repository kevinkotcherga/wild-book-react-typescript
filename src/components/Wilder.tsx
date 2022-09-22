import axios from 'axios';
import React from 'react';
import blank_profile from './../assets/8bRN5ga.png';
// import Skill from './Skill';
import styles from './Wilder.module.css';
import { IWilder } from '../../interfaces';
import Skill from './Skill';

const Wilder = (props: IWilder) => {
	const deleteWilder = async () => {
		await axios.delete(`http://localhost:5000/api/wilders/${props.id}`);
		props.fetchData();
	};

	const updateWilder = async () => {
		await axios.put(`http://localhost:5000/api/wilders/${props.id}`);
	};

	return (
		<article className={styles.card}>
			<img src={blank_profile} alt="Jane Doe Profile" />
			<h3>{props.name}</h3>
			<h4>{props.city}</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
			<h4>Wild Skills</h4>
			<ul className={styles.skills}>
				{props.upvote.map(upvoteElement => (
					<Skill id={upvoteElement.id} upvote={upvoteElement.upvote} skill={upvoteElement.skill} />
				))}
			</ul>
			<button onClick={deleteWilder}>Supprimer Wilder</button>
			<button onClick={updateWilder}>Modifier Wilder</button>
		</article>
	);
};

export default Wilder;
