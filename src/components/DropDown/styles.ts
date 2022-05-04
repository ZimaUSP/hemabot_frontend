import { TextInput } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

export const Wrapper = styled.Pressable<{ width?: number; dimmed: boolean }>`
  ${({ width, dimmed }) => css`
    width: ${width ? `${width}px` : `100%`};
    padding: 16px;
    margin-bottom: 32px ;
    height: 56px;
    border-radius: 4px;
    border-color: #1455d1;
    border-bottom-width: 2px;
    overflow: hidden;

    opacity: ${dimmed ? 0.4 : 1};
  `}
`;

export const ModalWrapper = styled.Pressable`
  width: 100%;
  height: 100%;

  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const OptionsWrapper = styled.View`
  width: 80%;
  max-height: 232px;

  border-radius: 8px;
  background-color: #F2F2F2;
  overflow: hidden;
`;

export const ScrollWrapper = styled.ScrollView``;

export const Option = styled.TouchableHighlight.attrs(({ theme }) => ({
  underlayColor: `#F2F2F2`,
}))`
  width: 100%;
  padding: 16px;
`;

export const OptionText = styled.Text`
  text-align: center;
`;

export const ContentButton = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LabelWrapper = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  color: gray;
  font-size: 16px;
`;  
export const Input = styled(TextInput)`
  width: 100%;
`;
