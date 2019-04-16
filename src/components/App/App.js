import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import { storeData, isLoading } from '../../actions/index'
import './App.css';
import { Loading } from '../../Loading/Loading'
import CardArea from '../CardArea/CardArea'
import { getData } from '../../api/apiCalls'

class App extends Component {

  componentDidMount = async () => {
    this.props.isLoading(true)
    let data = await getData()
    console.log(data)
    this.props.storeData(data)
    this.props.isLoading(false)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {this.props.loading && <Loading />}
          <CardArea data={this.props.data}/>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
  storeData: (data) => dispatch(storeData(data)),
  isLoading: (bool) => dispatch(isLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
