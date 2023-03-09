import { size } from '@Styles/mixin.style';
import styled from 'styled-components';

export const Wrapper = styled.div<{ width: string; height: string }>`
  margin: 0;
  padding: 0;
  cursor: pointer;
  ${props => size(props.width, props.height)}
  & img {
    width: 100%;
    height: 100%;
  }
`;
