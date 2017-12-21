import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../actions/ListActions';

import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import List from '../components/List/List';
import Input from '../components/Input/Input';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const mapStateToProps = (state) => ({
  todos: state.todos,
})

class ActivityFeed extends Component {
  static navigationOptions = {
    title: "Home"
  };

  onAddItem = (text) => {
    const { dispatch } = this.props;

    dispatch(actionCreators.itemAdd(text));
  }

  onRemoveItem = (index) => {
    const { dispatch } = this.props;

    dispatch(actionCreators.itemRemove(index));
  }

  onItemToggleCompleted = (index) => {
    const { dispatch } = this.props;

    dispatch(actionCreators.itemToggleChecked(index));
  }

  onRemoveCompletedItems = () => {
    const { dispatch } = this.props;

    dispatch(actionCreators.itemsRemoveCompleted());
  }

  render() {
    const { todos } = this.props;

    return (
      <View style={styles.view}>
        <Header>
          Remetis - ToDoList
        </Header>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddItem}
        />
        <ScrollView>
          <List
            list={todos}
            onPressBody={this.onItemToggleCompleted}
            onPressRemove={this.onRemoveItem}
          />
        </ScrollView>
        <Footer
          onPress={this.onRemoveCompletedItems}
        >
          Remove completed items
        </Footer>
      </View>
    )
  }
}

export default connect(mapStateToProps)(ActivityFeed)

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})