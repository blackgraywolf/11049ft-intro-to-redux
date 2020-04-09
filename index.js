let add_quarter = document.getElementById('add-quarter')
let add_nickel = document.getElementById('add-nickel')
let add_penny = document.getElementById('add-penny')
let add_dime = document.getElementById('add-dime')
let total = document.getElementById('total')

add_quarter.addEventListener('click', () => updateState(quarter))
add_nickel.addEventListener('click', () => updateState(nickel))
add_dime.addEventListener('click', () => updateState(dime))
add_penny.addEventListener('click', () => updateState(penny))

function updateState(action_creator){
  coinCounter.dispatch(action_creator)
  total.innerHTML = coinCounter.state()
}

let quarter = {type: "QUARTER"}
let nickel = {type: "NICKEL"}
let penny = {type: "PENNY"}
let dime = {type: "DIME"}

function coinCounterReducer(state, action){
  switch(action.type){
    case("QUARTER"):
      return state + 0.25
      break
    case("NICKEL"):
      return state + 0.05
      break
    case("PENNY"):
      return state + 0.01
      break
    case("DIME"):
      return state + 0.10
      break
    default:
      return state
      break
  }
}

//this is right here, the basis of state management
//we have a state, and we have the logic state

function createStore(iv, reducer){
  let state = iv
  //this object is called the redux store
  //the redux store is an object with two (technically 3, the third is called subscribe, which is an array of functions that run after the state is changed)
  //key value pairs, one is the state, and the other is dispatch
  //dispatch is the function that creates the state
  return {
    state: () => state,
    dispatch: (action) => {
      let prevState = state
      state = reducer(state, action)
    }
  }
}


let coinCounter = createStore(0, coinCounterReducer)
