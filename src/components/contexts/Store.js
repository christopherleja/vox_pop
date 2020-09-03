import React, { createContext, useReducer } from 'react';

export const CTX = createContext();

const initialState = {
  general: [
    {from: 'John', message: 'hi'},
    {from: 'Jane', message: 'hi there!'},
    {from: 'John', message: "isn't this great?"},
    {from: 'Jane', message: "yeah, this is cool"},
    {from: 'John', message: 'word'}, 
  ],
  nfl: [
    {from: 'Bill', message: 'so excited for the nfl to come back!'},
    {from: 'Tom', message: 'me too! but don\'t you think it\'s a little irresponsible, what with the pandemic and all? '},
    {from: 'Bill', message: "shut up nerd"},
    {from: 'Tom', message: "a strong point"},
    {from: 'James', message: 'lol'}, 
  ],

}

const reducer = (state, action) => {
  const { topic, from, message } = action.payload
  switch(action.type){
    case 'RECIEVE_MESSAGE':
      return {
        ...state, 
        [topic]: [
          ...state[topic],
          { from, message }
        ]
      }
    default:
      return state;
  }
}

const Store = (props) => {
  
  const reducerHook = useReducer(reducer, initialState)
  
  return (
    <CTX.Provider value={reducerHook}>
      {props.children}
    </CTX.Provider>
  )
}

export default Store
