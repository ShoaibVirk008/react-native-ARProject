import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { height, width, totalSize } from 'react-native-dimension'
class InputWithIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { iconName, iconType, placeholder, rightIcon, rightIconName, rightIconType, secureTextEntry, onPressRightIcon,value,onChangeText } = this.props
        return (
            <View style={styles.inputContainer}>
                <View style={{ flex: 2 }}>
                    <Icon
                        name={iconName}
                        type={iconType}
                        size={totalSize(2.5)}
                        color="#FFFFFF"
                    />
                </View>
                <View style={{ flex: 6 }}>
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        secureTextEntry={secureTextEntry}
                        placeholderTextColor="white"
                        style={styles.inputStyle}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    {
                        rightIcon ?
                            <Icon
                                name={rightIconName}
                                type={rightIconType}
                                size={totalSize(2.5)}
                                color="#FFFFFF"
                                onPress={onPressRightIcon}
                            />
                            :
                            null
                    }
                </View>
            </View>
        );
    }
}

export default InputWithIcon;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#FFFFFF80',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: height(1)
    },
    inputStyle: {
        height: height(7),
        color: 'white',
        fontSize: totalSize(1.7)
    }
})