import React from 'react';
import styles from './Skill.module.css';
import { ISkills } from '../../interfaces';

// interface IProps {
//   name: string;
//   upvote: number
// }

const Skill = (props: ISkills) => {
	return (
		<li>
      {props.skill.name}
			<span className={styles.votes}>{props.upvote}</span>
		</li>
	);
};

export default Skill;
