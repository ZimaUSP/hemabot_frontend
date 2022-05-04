import {Button, Buttontext} from './styles';
import React, { useState } from 'react';
import { color } from 'react-native-reanimated';


export interface ButtonProps {
 name?: string;
 onPress?(): void;
 filled: boolean;
}

const MainButton: React.FC<ButtonProps> = ({name, onPress, filled})=> {
    return(
        <Button 
        onPress={onPress}
        style={filled?{backgroundColor:'#ff7719'}:{backgroundColor:'none'}}>
            <Buttontext style={filled?{color:'#fff'}:{color:'#ff7719'}}>
                {name}
            </Buttontext>
        </Button>
    )
}
export default MainButton;