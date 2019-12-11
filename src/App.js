import React from 'react';
import { connect } from 'react-redux'
import { buyItem, removeFeature } from './actions/actions'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  return (
      <div className="boxes">
        <div className="box">
          <Header car={props.car} />
          <AddedFeatures car={props.car} />
        </div>
        <div className="box">
          <AdditionalFeatures store={props.store} />
          <Total car={props.car} additionalPrice={props.additionalPrice} />
        </div>
      </div>
  );
};

const mapStateToProps=(state)=>{
  return{
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  }
}


export default connect(mapStateToProps, { buyItem, removeFeature })(App);
