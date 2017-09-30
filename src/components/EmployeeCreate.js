import React, {Component} from 'react';
import {Keyboard,Picker,Text,View } from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../actions';
import {CardSection,Card,Button,Input} from './common';

class EmployeeCreate extends Component{
    componentWillMount(){
        Keyboard.dismiss();
        console.ignoredYellowBox = [
            'Setting a timer'
            ];
    }

    onButtonPress(){
         const {name, phone , shift} = this.props;
         this.props.employeeCreate({name, phone , shift : shift || "Monday" });
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    label = "Name"
                    placeHolder = "Enter name"
                    value = {this.props.name} 
                    onChangeText = {value =>
                    this.props.employeeUpdate({prop: 'name', value })}
                    returnKeyType = "next"/>
                </CardSection>
                <CardSection>
                <Input
                label = "Phone Number"
                placeHolder = "Enter 10 digit number"
                name = {this.props.phone}
                onChangeText = {value => 
                this.props.employeeUpdate({prop: 'phone', value})}
                keyboardType = "numeric"
                maxLength = {10}
                returnKeyType = "done"/>
                </CardSection>
                <CardSection>
                    <View style = {Styles.viewStyle}>
                    <Text style = {Styles.pickerTextStyle}>Shift Select</Text>
                    <Picker
                    selectedValue = {this.props.shift}
                    onValueChange = {value => this.props.employeeUpdate({prop: 'shift', value})}
                    style = {{flex : 1}} >
                        <Picker.Item label = "Monday" value = "Monday"/>
                        <Picker.Item label = "Tuesday" value = "Tuesday"/>
                        <Picker.Item label = "Wednesday" value = "Wednesday"/>
                        <Picker.Item label = "Thursday" value = "Thursday"/>
                        <Picker.Item label = "Friday" value = "Friday"/>
                        <Picker.Item label = "Saturday" value = "Saturday"/>
                        <Picker.Item label = "Sunday" value = "Sunday"/> 
                    </Picker>
                    </View>
                </CardSection>
                <CardSection>
                    <Button
                    children = "Save"
                    onPress= {this.onButtonPress.bind(this)}/>
                </CardSection>
            </Card>
        );
    } 
};

const Styles = {
    pickerTextStyle: {
        fontSize :18,
        paddingLeft :20,
        flex :1,
        color : '#000000',
        flexDirection : "column",
        justifyContent : "space-around"
    },
    viewStyle : {
        height : 40,
        width :200,
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center'
   }


};

const mapStateToProps = (state) => {
    const {name, phone,shift} = state.employeeForm;    

    return {name,phone,shift};


};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);