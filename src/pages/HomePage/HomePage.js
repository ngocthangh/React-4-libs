import React, { Component } from 'react';
import './HomePage.css'
import Counter from '../../components/Counter';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class HomePage extends Component {
    render() {
        var { isIncrementing, isDescrementing} = this.props.counter;
        return (
            <div>
                <Counter count={this.props.counter.count}/>
                <button onClick={this.props.onIncrement} className="btn btn-primary mr-10 mb-10">Increment</button>
                <button onClick={this.props.onIncrementAsync} className='btn btn-primary mr-10 mb-10' disabled={isIncrementing}>Increment Async</button><br/>
                <button onClick={this.props.onDescrement} className="btn btn-primary mr-10 mb-10">Descrement</button>
                <button onClick={this.props.onDescrementAsync} className='btn btn-primary mr-10 mb-10' disabled={isDescrementing}>Descrement Async</button><br/>
                <Link className='btn btn-primary' to='/about'>Go to About Page</Link>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onIncrement: () => {
            dispatch(actions.actIncrement());
        },
        onIncrementAsync: () => {
            dispatch(actions.actIncrementAsync());
        },
        onDescrement: () => {
            dispatch(actions.actDescrement());
        },
        onDescrementAsync: () => {
            dispatch(actions.actDescrementAsync());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);