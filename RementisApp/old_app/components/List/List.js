import React, { Component } from 'react';

import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

import CheckBox from 'react-native-checkbox';

export default class List extends Component {

    renderItem = (item, idx) => {
        const { onPressBody, onPressRemove } = this.props;

        return (
            <View
                style={styles.row}
                key={idx}
            >
                <CheckBox
                    label={item.text}
                    checked={item.checked}
                    onChange={() => onPressBody(idx)}
                />
                <TouchableOpacity
                    onPress={() => (onPressRemove(idx))}
                >
                    <Text
                        style={styles.remove}
                    >
                        X
                </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const { list } = this.props;

        return (
            <View
                style={styles.container}
            >
                {list.map(this.renderItem)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'lightgrey',
        margin: 5,
    },
    remove: {
        paddingRight: 20,
        paddingTop: 5,
        alignItems: 'center',
        color: 'red',
    },
})