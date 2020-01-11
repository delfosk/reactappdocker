import React, { useState, useEffect } from "react";
import { Wrapper, Container, Header } from "../styles/Contact.styles";

import {  SocialContainer} from "../styles/Navigation.styles";
import { HomeLink, TextLink } from "../styles/Work.styles";
import { withRouter } from "react-router";
import { SocialItem } from "../styles/Navigation.styles";
import {
  Instagram,
  Facebook,
  Twitter,
  Github,
  LinkedIn
} from "../components/Socials";
const Contact = ({ history }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    animate &&
      setTimeout(() => {
        history.push("/");
        setAnimate(false);
      }, 400);
  }, [animate, history]);

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimate(true)} animating={animate}>
        <TextLink>Home</TextLink>
      </HomeLink>
      <Container>
        <Header>delfosk9@gmail.com</Header>
        <Header>+31 (0) 6 1334 54 31</Header>
       

      </Container>
      <SocialContainer open={true}>
        <SocialItem>
          <Facebook />
        </SocialItem>
        <SocialItem>
          <Twitter />
        </SocialItem>
        <SocialItem>
          <LinkedIn />
        </SocialItem>
        <SocialItem>
          <Instagram />
        </SocialItem>
        <SocialItem>
          <Github />
        </SocialItem>
      </SocialContainer>
    </Wrapper>
  );
};

export default withRouter(Contact);
