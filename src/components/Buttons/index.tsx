import styled from "styled-components";

export const Button = styled.button<any>`
  background: linear-gradient(90deg, #1828EF 0%, #2932F3 28.5%, #3740F4 74%, #1A23EF 100%);
  border-radius: 30px;
  margin: 5px;
  padding: ${({ x }) => x} ${({ y }) => y};
  cursor: pointer;
  background-color: #234282;
  border: none;
  color: white;
  display: block;
  &:hover {
    background-color: #335292;
  }

  &:active {
    background-color: #133272;
  }

  &:disabled {
    background-color: #808080;
    color: #b0b0b0;
    cursor: default;
  }
`;
