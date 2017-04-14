import React from 'react';
import '../assets/styles/index.scss';
import {
  navigateTo,
  getCurrentRequestContext
} from 'react-server';

const DELAY = 1000;

class Component extends React.Component {
  constructor(props) {
    super(props);
		this.state = {show: false};
		this.pageName = props.pageName;
		this.handleClick = this.handleClick.bind(this);

  }

	simulateAjaxCall(callback) {
		setTimeout(callback, DELAY);
	}

  handleClick() {
		this.setState({
			show: false
		});

		this.simulateAjaxCall(() => {
			if (this.state.currentRoute == 'home') {
				navigateTo('/about', {reuseDom: true});
			} else {
				navigateTo('/', {reuseDom: true});
			}
		});
  }

	componentDidMount() {
	  this.setState({
		  show: true
		});

    getCurrentRequestContext().navigator.on('loadComplete', () => {
			// able to setState because reuseDom: true
		  this.setState({
			  show: true,
        currentRoute: getCurrentRequestContext().navigator._currentRoute.name.toLowerCase()
			});
    });
	}

  render() {
		const imgUrl = this.props.img;
    const imgClass = this.state.show && 'show';
		const pageName = this.state.currentRoute && this.state.currentRoute;
		const otherPage = pageName === 'home' ? 'about' : 'home';
    return (
      <div>
        <h3>{pageName} Page</h3>
        <button onClick={this.handleClick}>Navigate to {otherPage}</button>
        <h3></h3>
        <img src={imgUrl} alt={pageName} width="500" className={imgClass} />
      </div>
    )
  }
};

export default Component;
