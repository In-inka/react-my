import styled from '@emotion/styled';

export const Info = styled.span`
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  width: 10px;
  height: 10px;
  border: 1px solid inherit;
  border-radius: 50%;
  display: block;
`;
