import React from 'react';
import Content from '../components/Content';
import {
	RootElement,
	RootContainer,
	TheFold,
} from 'react-server';
const ABOUT_IMG = "https://images.unsplash.com/photo-1491923990293-2e91391e7bdd?dpr=2&auto=compress,format&fit=crop&w=500&q=80&cs=tinysrgb&crop=&bg=";


export default class AboutPage extends React.Component {
	handleRoute(next) {
		return next();
	}

	getElements() {
		return (
			<RootElement>
				<Content pageName='about' img={ABOUT_IMG}/>
			</RootElement>
		);
	}
}
