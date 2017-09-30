import React , {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';


class ListItem extends Component {
    render(){
        const {name} = this.props.employee;
        return(
         
            <CardSection>
                <Text style = {Styles.itemTextStyle}>
                    {name}
                </Text>
            </CardSection>
      
        );
    }
};

const Styles = {
    itemTextStyle : {
        fontSize : 16,
        paddingLeft : 20

    }
};

export default ListItem; 