import {act, useReducer, useState} from 'react'
import './App.css'
function App(){
  const[state, dispatch] = useReducer(reduce, 0)
  function reduce(state, action){
     switch(action){
     case 'plus':
      return state +1;
      case 'minus':
        return state -1;
        case '2x':
          return state *2;
          case 'sq':
            return Math.sqrt(state);
            case 'reset':
            return 0;
            default:
              return state;
              case 'dark':
                return 'black';
                case 'light':
                  return 'white';
                  case 'blue':
                 return 'blue';
                  case 'hide':
                    return 'none'
                    case 'show':
  }
}
  return(

    <div className="app" style={{backgroundColor: state }}>
    <div style={{
      display:state

    }}>

<div className="buttons">
        <button onClick={()=> dispatch('plus')}>+</button>
      <button onClick={()=> dispatch('minus')}>-</button>
      <button onClick={()=> dispatch('reset')}>reset</button>
      <button onClick={()=> dispatch('2x')}>2x</button>
      <button onClick={()=> dispatch('sq')}>\x</button>
 <button onClick={()=> dispatch(state=='white' ? 'dark': 'light')}>dark_mode</button>
 <button onClick={() => dispatch(state=='blue')}>blue</button>
      <p className="result">{state}</p>
      </div> 
      </div>
     <button onClick={()=> dispatch(state=='none' ? 'show': 'hide')}>hide/none</button>
    </div>
  )
}
export default App;

