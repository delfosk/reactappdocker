import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../assets/images/cover.png";
import {
  Wrapper,
  Article,
  Title,
  Caption,
  Emphasis,
  CoverSheet,
  CoverImg,
  WorkLink,
  WorkText,
  AboutLink,
  AboutText
} from "../styles/Home.styles";

const Home = ({ history }) => {
  const [animateWork, setAnimateWork] = useState(false);
  const [animateAbout, setAnimateAbout] = useState(false);

  useEffect(() => {
    animateWork &&
      setTimeout(() => {
        history.push("/work");
        setAnimateWork(false);
      }, 400);
    animateAbout &&
      setTimeout(() => {
        history.push("/about");
        setAnimateAbout(false);
      }, 400);
  }, [animateWork, animateAbout, history]);
  const background = require("../assets/images/cover.png");
  return (
    <Wrapper>
      <WorkLink onClick={() => setAnimateWork(true)} animating={animateWork}>
        <WorkText>Work</WorkText>
      </WorkLink>
      <AboutLink onClick={() => setAnimateAbout(true)} animating={animateAbout}>
        <AboutText>About</AboutText>
      </AboutLink>
      <Article>
        <Title>Dev Ops</Title>
        <Caption>
          Mi nombre es <Emphasis>Delfin Roc</Emphasis>, Ingeniero de Telecomunicaciones, aprendiendo desarrollo web y tecnicas de cloud computing.
        </Caption>
      </Article>
      <Article>
        <CoverSheet />
        <CoverImg src={background} alt="Delfin Cover Photo" />
      </Article>
    </Wrapper>
  );
};

export default withRouter(Home);
