import {LinkView, LinkText} from './styles';
import React, { useState } from 'react';
import { color } from 'react-native-reanimated';


export interface ButtonProps {
 text?: string;
 onPress?(): void;
 color: boolean;
}

const Link: React.FC<ButtonProps> = ({text, onPress, color})=> {
    return(
        <LinkView 
        onPress={onPress}>
            <LinkText style={color?{color:'#ff7719'}:{color:'#fff'}}>
                {text}
            </LinkText>
        </LinkView>
    )
}
export default Link;