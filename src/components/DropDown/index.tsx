import React, { useState } from 'react';
import { Modal } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import { MotiView } from '@motify/components';
import * as S from './styles';

type DropDownProps = {
  label: string;
  value: string;
  options: string[];
  onChange: React.Dispatch<React.SetStateAction<string>>;
  width?: number;
  disableSelectAll?: boolean;
  editable?: boolean;
};

const DropDown: React.FC<DropDownProps> = ({
  label,
  value,
  onChange,
  options,
  width,
  disableSelectAll,
  editable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(value.toString());

  const handleOnChange = (option: string) => {
    onChange(option);
    setSelect(option);
    setIsOpen(false);
  };

  return (
    <S.Wrapper
      width={width}
      onPress={() => editable && setIsOpen(!isOpen)}
      dimmed={!editable}
    >
      <Modal
        animationType="fade"
        visible={isOpen}
        statusBarTranslucent
        transparent={true}
        onRequestClose={() => setIsOpen(false)}
      >
        <S.ModalWrapper onPress={() => setIsOpen(false)}>
          <S.OptionsWrapper>
            <S.ScrollWrapper showsHorizontalScrollIndicator>
              {options.map((option: string) => (
                <S.Option key={option} onPress={() => handleOnChange(option)}>
                  <S.OptionText>{option}</S.OptionText>
                </S.Option>
              ))}
            </S.ScrollWrapper>
          </S.OptionsWrapper>
        </S.ModalWrapper>
      </Modal>

      <S.ContentButton>
        <S.LabelWrapper>
          <S.Label style={select? {color: 'black'} : {color:'gray'}}>
            {select? select : label} 
          </S.Label>
        </S.LabelWrapper>

        <MotiView
          transition={{ type: 'timing', duration: 150 }}
          animate={{ rotate: isOpen ? '180deg' : '0deg' }}
        >
          <FontAwesome name='angle-down' width={12} height={20} />
        </MotiView>
      </S.ContentButton>
    </S.Wrapper>
  );
};
export default DropDown;
