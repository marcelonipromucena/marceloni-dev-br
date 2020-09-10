import styled, { keyframes } from "styled-components";
import bghome from "../../assets/images/bghome.png";

export const TopContainer = styled.div`
  height: 650px;
  background-image: url(${bghome});
  background-size: cover;
`;

export const TopBar = styled.div`
  width: 80%;
  padding: 30px;
  height: 30px;
  margin: auto;
`;
export const TopBarLeftItems = styled.div`
  float: left;
`;
export const TopBarRightItems = styled.div`
  float: right;
`;
export const TopBarItem = styled.div``;
export const TopBarBrand = styled.div`
  color: #fff;
  font-size: 18px;
  transition: all 0.2s ease;

  &:hover {
    font-size: 20px;
    transition: all 0.2s ease;
  }
`;
export const LanguageIcon = styled.img`
  width: 40px;
  float: right;
  margin: 0 10px;
`;

export const TopContent = styled.div`
  width: 80%;
  margin: 200px auto;
`;
export const TopTitle = styled.p`
  font-size: 48px;
  line-height: 60px;
`;
export const TopSubtitle = styled.p`
  font-size: 30px;
  margin-top: 15px;
`;

const TextAnimation = keyframes`
   from { 
        width: 0% 
    }
    to { 
        width: 100% 
    }
`;

const CursorAnimation = keyframes`
 from, to { 
        border-color: transparent 
    }
    50% { 
        border-color: orange; 
    }
`;

export const WrapperTypingText = styled.div`
  display: inline-block;
`;

export const TypingText = styled.div`
  display: inline-block;
  font-size: 60px;
  height: 51px;
  color: #ef6c00;
  font-weight: 600;
  font-family: Source Code Pro;
  overflow: hidden;
  animation: ${TextAnimation} 1s steps(9, end), ${CursorAnimation} 0.75s step-end infinite;
  white-space: nowrap;
  border-right: 4px solid #ef6c00;
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const MouseAnimation = keyframes`
   0% { 
        margin-top: -20px 
    }
    100% { 
        margin-top:0px;
    }
   
`;

export const MouseIcon = styled.img`
  animation: ${MouseAnimation} 3s infinite;
  animation-play-state: running;

`;
