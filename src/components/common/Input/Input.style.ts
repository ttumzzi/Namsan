import { font, size } from '@Styles/mixin.style';
import styled from 'styled-components';

const InputWrapper = styled.form`
  ${size('60px', '100%')}
  position: relative;
`;

const Input = styled.input`
  ${size('100%', '100%')}
  ${font('title18', 'regular')}
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.grey200};
  color: ${({ theme }) => theme.color.blue100};
  padding: 17px 12px;

  &::placeholder {
    color: ${({ theme }) => theme.color.grey200};
  }

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.color.blue100};
  }
`;

const SearchIconWrapper = styled.button`
  position: absolute;
  bottom: 25px;
  right: 20px;
`;

export { InputWrapper, Input, SearchIconWrapper };
