import React from 'react';
import Content from '../components/Content';
import {
  RootElement,
  RootContainer,
  TheFold,
} from 'react-server';
const HOME_IMG = "https://images.unsplash.com/photo-1484148793317-7eec34e56b83?dpr=2&auto=compress,format&fit=crop&w=500&q=80&cs=tinysrgb&crop=&bg=";


export default class HomePage extends React.Component {
  handleRoute(next) {
    return next();
  }

  getElements() {
    return (
      <RootElement>
        <Content pageName='home' img={HOME_IMG}/>
      </RootElement>
    );
  }
}
