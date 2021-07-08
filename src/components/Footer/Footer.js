import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hello@zjmdesigns.com">hello@zjmdesigns.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learn all the things</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/lumberzach">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/channel/UCCjuaC_180wxIzcUrJK9vMg">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/slumberzach">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>

        
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
