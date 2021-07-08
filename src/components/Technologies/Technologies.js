import React from 'react';
import { DiMongodb, DiReact, DiPython } from 'react-icons/di';
import { FaElementor } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies in the web development and IoT world.
      From 3D printed automatic dog feeders, webdriver automation apps with Selenium, to full stack web development projects. I've definitely learned a lot over the last 2 years!
    </SectionText>
    <List>
      <ListItem>
        <DiReact size ="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size ="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            Express & MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size ="3rem"/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with<br />
            Flask, Twilio, & Selenium
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaElementor size ="3rem"/>
        <ListContainer>
          <ListTitle>Web Design</ListTitle>
          <ListParagraph>
            Experience with<br />
            Elementor & Beaver Builder
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Technologies;
