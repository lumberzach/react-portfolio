import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://zjmdesigns.com">
          <NavLink href="https://zjmdesigns.com">
          <a style={{ fontFamily: "Montserrat" }}>ZJM</a>
          <a style={{ fontFamily: "Pacifico", color: "white" }}>Designs</a>
          </NavLink> 
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/lumberzach">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/channel/UCCjuaC_180wxIzcUrJK9vMg">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/slumberzach">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
