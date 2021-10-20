import React from 'react';
import {Button, Buttontext} from './styles';

export interface ButtonProps {
 name?: string;
 onPress?(): void;
}

const MainButton: React.FC<ButtonProps> = ({name, onPress})=> {
    return(
        <Button onPress={onPress}>
            <Buttontext>
                {name}
            </Buttontext>
        </Button>
    )
}
export default MainButton;