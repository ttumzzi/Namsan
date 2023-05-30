import { font } from './../../../styles/mixin.style';
import { flex, flexDirection, mediaQuery, size } from '@Styles/mixin.style';
import { FontWeight } from '@Styles/varialbes.style';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${flex('center', 'flex-end')}
  ${flexDirection('row')}
  height: 36px;
  padding: 0px;
  gap: 8px;
  margin: 90px 0px 0px 0px;

  .ellipse {
    ${size('32px', '32px')}
    padding-left: 10px;
    margin-bottom: 3px;

    ${mediaQuery('mobile', ` padding-left: 8px; margin-bottom: 20px;`)};
  }
  .ellipse::before {
    content: '...';
    color: ${({ theme }) => theme.color.grey400};
  }

  ${mediaQuery('tablet1024', `width:100%; margin: 60px 0px 0px 0px;`)};
  ${mediaQuery('mobile', `margin: 0px;`)};
`;

export const Arrow = styled.img`
  ${size('14px', '8px')}
`;

export const ArrowNavigation = styled.button`
  ${size('24px', '24px')}
  ${flex()}

  img {
    ${size('14px', '8px')}
  }
`;

export const PageNumber = styled.span<{ isSelected?: boolean }>`
  cursor: pointer;
  ${flex()}
  ${flexDirection()}
  ${size('32px', '32px')}

  font-size: 16px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.2px;

  font-weight: ${({ isSelected }) =>
    isSelected ? FontWeight.bold : FontWeight.regular};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.black : 'rgba(6, 11, 17, 0.56)'};

  ${({ isSelected, theme }) => {
    if (isSelected) {
      return `margin-top:-4px;`;
    }
  }}

  ::before {
    ${({ isSelected, theme }) =>
      isSelected
        ? `
          ${size('4px', '4px')}
          background: ${theme.color.black};
          content: '';
        `
        : undefined}
  }
`;
