import React from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import store from '../store.js';
import MainView from './overview/left_side/MainView.jsx';
import StyleList from './overview/right_side/StyleList.jsx';
import { changeProductData } from '../reducers/productData.js';
import { getProductData } from '../../../helpers/productHelpers.js';
// store.dispatch(changeProductId(4));
// console.log(store.getState());
// console.log(changeProductId(9));
// console.log(store.getState());

class App extends React.Component {
  componentDidMount() {
    //testing
    getProductData(1)
      .then((data) => {
        store.dispatch(changeProductData(data));
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <div>{console.log(store.getState().productData)}</div>
        <MainView />
        {/* <StyleList /> */}
      </>
    );
  }
}

export default hot(App);
