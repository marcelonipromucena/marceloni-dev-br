import React from "react";

import icbrazil from "../../assets/images/icbrazil.svg";
import icuk from "../../assets/images/icuk.svg";
import icmouse from "../../assets/images/icmouse.svg";
import {
  TopContainer,
  TopBar,
  TopBarLeftItems,
  TopBarRightItems,
  TopBarItem,
  TopBarBrand,
  LanguageIcon,
  TopContent,
  TopTitle,
  TopSubtitle,
  WrapperTypingText,
  TypingText,
  Row,
  MouseIcon,
} from "./styles";

import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <TopContainer>
        <TopBar>
          <TopBarLeftItems>
            <TopBarItem>
              <TopBarBrand>://marceloni.dev.br</TopBarBrand>
            </TopBarItem>
          </TopBarLeftItems>
          <TopBarRightItems>
            <TopBarItem>
              <LanguageIcon src={icbrazil} />
              <LanguageIcon src={icuk} />
            </TopBarItem>
          </TopBarRightItems>
        </TopBar>
        <TopContent>
          <TopTitle>
            Hi, I'm{" "}
            <WrapperTypingText>
              <TypingText>Marceloni</TypingText>
            </WrapperTypingText>
            .
          </TopTitle>
          <TopSubtitle>A Fullstack Developer & UX/UI Designer.</TopSubtitle>

          <Button
            href="#"
            border={"2px solid #ef6c00;"}
            borderRadius={"50px"}
                      backgroundHover={"#ef6c00"}
                      colorHover={"#000"}>
            Get in Touch
          </Button>

          <Row>
            <MouseIcon src={icmouse} />
          </Row>
        </TopContent>
      </TopContainer>
    </>
  );
};

export default Home;
