// Import React
import React from 'react';
import d3 from 'd3';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  Layout,
  Fill,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

var bgImage = "https://www.ebi.ac.uk/biomodels-static/icons/BioModels_Database_logo_small.png";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary" bgImage={bgImage} bgDarken="0.9">
            <Text padding="20px" size={2} caps lineHeight={1} textColor="primary">
              Integrating life history and cross-immunity into the evolutionary dynamics of pathogens.
            </Text>
            <Text margin="20px" textColor="primary">
              Restif and Grenfell (2006)
            </Text>
            <Text margin="20px" textColor="primary">
              Model of the Month, November 2010
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Background
          </Heading>

          <Text margin="20px" textColor="primary">
            Various approaches to modeling evolutionary dynamics of pathogens.
          </Text>

          <List>
            <ListItem>Some more focused on evolution of virulence, the tendency of a pathogen to be harmful for a host.</ListItem>
            <ListItem>Others more on evolutionary aspects of the immunity of the host, an important factor being cross-immunity.</ListItem>
            <ListItem>Rarely modeled in combination</ListItem>
          </List>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Background
          </Heading>

          <Text margin="20px" textColor="primary">
            Authors analysed the invasion of one pathogen strain into a population, in which another strain is already endemic and established, under consideration of virulence and cross-immunity.
          </Text>

        </Slide>


        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Trade-Off Hypothesis
          </Heading>

          <Text margin="20px" textColor="primary">
             States that to counteract the high host mortality of increased virulence, the pathogen has to go along with increased transmission ability.
          </Text>

        </Slide>


        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9" align="flex-start flex-start">

          <Heading size={2} fit textColor="primary">
            Approach - Extended SIR
          </Heading>

          <Image src="https://www.ebi.ac.uk/biomodels-static/ModelMonth/2010-11/fig1.png" margin="0px auto 40px" />
          <Cite>Simple SIR Model</Cite>
          <Image src="https://www.ebi.ac.uk/biomodels-static/ModelMonth/2010-11/fig2_small.png" margin="0px auto 40px" />
          <Cite>Restif and Grenfell (2006)</Cite>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9" align="flex-start">

          <Text fontSize={9} textColor="primary">
            The main interest of the authors was to see under which conditions
            one strain could out-compete the other leading to potential extinction
            of that strain, and which parameter ranges allowed coexistence.
          </Text>

          <Image src="https://www.ebi.ac.uk/biomodels-static/ModelMonth/2010-11/fig3.png" width="400px" />

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Pathway Model
          </Heading>

          <a href="https://www.ebi.ac.uk/biomodels-main/BIOMD0000000249">BioModels Link</a>

        </Slide>

      </Deck>

    );
  }
}
