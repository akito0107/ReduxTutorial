/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_TEXT':
      console.log(action.text)
      return {
        text: action.text,
        completed: false
      }
    case 'SUBMIT_TODO':
      console.log(`submit: ${action.text}`)
      return {
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const store = createStore(combineReducers({
  todo
}))

const addTodo = (text) => ({
  type: 'EDIT_TEXT',
  text
})
const addTodo = (text) => ({
  type: 'EDIT_TEXT',
  text
})
const AddTodo = connect()(({ dispatch }) => {
  return (
    <TextInput
      style={{ height: 40 }}
      placeholder="input something"
      onChangeText={(text) => {dispatch(addTodo(text))}}
    />
  )
})

const App = () => (
  <View style={{flex: 1}}>
    <View style={{flex: 2}}>
      <AddTodo />
    </View>
  </View>
)
export default class ReduxTutorial extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('ReduxTutorial', () => ReduxTutorial);
