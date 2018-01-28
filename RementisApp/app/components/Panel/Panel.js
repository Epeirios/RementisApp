import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight, Animated } from "react-native";
import { Icon } from "react-native-elements";
import { Avatar } from "react-native-elements";

import styles from "./styles";

class Panel extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: "md-arrow-dropup",
      down: "md-arrow-dropdown"
    };

    this.state = {
      header: props.header,
      expanded: false,
      animation: new Animated.Value()
    };
  }

  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded
    });

    this.doAnimation(initialValue, finalValue);
  }

  doAnimation(initialValue, finalValue){
    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue
    }).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
      animation: new Animated.Value(event.nativeEvent.layout.height),
    });
  }

  render() {
    let icon = this.icons["down"];

    if (this.state.expanded) {
      icon = this.icons["up"];
    }

    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}
        >
          <View style={styles.headerChildContainer}>{this.props.header}</View>

          <Icon
            name={icon}
            type="ionicon"
            color="black"
            onPress={this.toggle.bind(this)}
          />
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}
export default Panel;
