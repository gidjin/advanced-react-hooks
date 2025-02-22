// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

//function countReducer(previousCount, step) {
  //return previousCount + step
//}
function countReducer(state, {type, step}) {
  switch(type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count +  step
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  //const [count, changeCount] = React.useReducer(countReducer, initialCount)
  //const increment = () => changeCount(step)
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
