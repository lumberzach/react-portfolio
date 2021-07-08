import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Zach. <br />
        Aspiring Developer
      </SectionTitle>
      <SectionText>
        Somewhere along the way, I fell in love with technology. Here are some of my projects. 
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;