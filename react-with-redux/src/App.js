import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementAsync, decrementAsync } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Router>
      {/* <Navbar /> */}
      <section>
        {/* <h2>Welcome to the Redux Essentials example app!</h2> */}
        <p>COUNT :- {count}</p>
        <button onClick={() => {
          console.log('Increment');
          dispatch(increment())
        }}>Increment</button>
        <button onClick={() => {
          console.log('Decrement');
          dispatch(decrement())
        }}>Decrement</button>
        {/* <button onClick={() => (dispatch(incrementAsync()))}>Increment in 3 Seconds</button>
        <button onClick={() => (dispatch(decrementAsync()))}>Decrement in 3 Seconds</button> */}
      </section>
      <div className="App">
        {/* <Routes>
          <Route
            exact
            path="/"
            render={() => (

            )}
          />
          <Route to="/" />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
