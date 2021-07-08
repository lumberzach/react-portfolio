import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 9, text: 'Projects on GitHub'},
  { number: 72, text: 'Contributions last year', },
  { number: 2, text: 'Years programming', },
  { number: 12, text: 'Websites designed', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
