import React, { createContext, useReducer } from 'react';
import io from 'socket.io-client'

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
  const { topic, from, message } = action.payload;
  switch(action.type){
    case "RECIEVE_MESSAGE":
      console.log({
        ...state, 
        [topic]: [
          ...state[topic],
          { from, message }
        ]
      })
      return ({
        ...state, 
        [topic]: [
          ...state[topic],
          { from, message }
        ]
      })
    default:
      return state;
  }
}


let socket;

const sendChatAction = value => {
  socket.emit('chat message', value)
}

const user = 'bill_cinammon' + Math.random(100).toFixed(2)

const Store = (props) => {
  
  const [chats, dispatch] = useReducer(reducer, initialState)
  
  if (!socket){
    socket = io(':3001')
    socket.on('chat message', msg => {
      console.log("emitting", msg)
      dispatch({ type: "RECIEVE_MESSAGE", payload: msg })
    })
  }
  
  
  return (
    <CTX.Provider value={{chats, sendChatAction, user}}>
      {props.children}
    </CTX.Provider>
  )
}

export default Store
