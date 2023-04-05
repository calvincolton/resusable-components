import { useReducer } from "react";
import Button from "../components/Button";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
        valueToAdd: 0,
      };
    default:
      throw new Error("unexpected action type: " + action.type);
    // return state;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
      payload: state.valueToAdd,
    });
  };

  return (
    <div>
      <h1>Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={decrement} variant="secondary" className="my-4 mr-4">
          Decrement
        </Button>
        <Button onClick={increment} variant="primary" className="my-4 mr-4">
          Increment
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Enter an amount to add:</label>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default CounterPage;
