import styled from "styled-components";

export const ButtonWrapper = styled.a`
  display: inline-block;
  padding: 10px;
  min-width: 250px;
  text-align: center;
  text-decoration: none;
  font-size: 23px;
  margin: 40px 0;

  ${({ border }) => border && `border:${border}`};
  ${({ background }) => background && `background:${background}`};
  ${({ color }) => color && `color:${color}`};
  ${({ borderRadius }) => borderRadius && `border-radius:${borderRadius}`};
  transition: all 0.2s ease;

  &:hover {
    ${({ borderHover }) => borderHover && `border:${borderHover}`};
    ${({ backgroundHover }) => backgroundHover && `background:${backgroundHover}`};
    ${({ colorHover }) => colorHover && `color:${colorHover}`};

    transition: all 0.2s ease;
  }
`;
