import { connect } from 'react-redux';
import Counter from '../counter/counter2';
import { increment, decrement, reset } from '../../_actions';

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Counter);   