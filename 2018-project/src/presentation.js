// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  Layout,
  Fill,
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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary" bgImage="https://i.ytimg.com/vi/pgl37R7hILE/maxresdefault.jpg" bgDarken="0.9">
            <Heading padding="20px" size={2} caps lineHeight={1} textColor="primary">
              Steven Weaver
            </Heading>
            <Text padding="20px" margin="40px 0 0" textColor="primary" size={2} bold>
              2018
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://datamonkey.org/assets/img/header-logo.svg" bgDarken="0.9">
          <Heading size={2} fit textColor="primary">
            Datamonkey and HyPhy-Vision
          </Heading>

          <Text textAlign="left" margin="20px" textColor="primary"><a href="https://waffle.io/veg/hyphy">32 Open Issues</a> regarding mostly Availability and UX</Text>

          <Heading textAlign="left" margin="30px 0 0" size={6} textColor="primary">
            New Features
          </Heading>

          <List>
            <ListItem>MSA Viewer</ListItem>
            <ListItem>Administration Portal</ListItem>
            <ListItem>Additional Route - <Code textColor="primary">/msa/:id</Code></ListItem>
          </List>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://datamonkey.org/assets/img/header-logo.svg" bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Datamonkey and HyPhy-Vision
          </Heading>
          <BlockQuote>
            <Quote>Focus should be on the desktop application</Quote>
          </BlockQuote>


        </Slide>

        <Slide transition={['zoom']} bgColor="secondary">
            <Heading fit padding="20px" size={2} caps lineHeight={1} textColor="primary" bgColor="secondary">
              Project Proposals
            </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary" textColor="primary" bgImage="https://eightiesvinylsingles.files.wordpress.com/2014/01/scan-79.jpeg" bgDarken="0.9">

            <Heading fit padding="20px" size={2} caps lineHeight={1} textColor="primary">
              Datamonkey - Stripped
            </Heading>

            <Text margin="20px" fit textColor="primary">A response to the high demand of a generic job spawner</Text>

            <List margin="20px 0 0">
              <ListItem margin="20px 0 0">Current projects do too much. (form generation, results page viz, etc.)</ListItem>
              <ListItem margin="20px 0 0">Provides a project where the user only has to supply the html form and the command to begin.</ListItem>
              <ListItem margin="20px 0 0">Supplies just a specified text file as a result.</ListItem>
              <ListItem margin="20px 0 0">Paper as a gateway to provide consultation and collaborate further.</ListItem>
            </List>

        </Slide>

        <Slide transition={['zoom']} bgColor="primary" textColor="primary" bgImage="http://datamonkey.org/assets/img/header-logo.svg" bgDarken="0.9">

            <Heading fit padding="20px" size={2} caps lineHeight={1} textColor="primary">
              HyPhy C++ add-on 
            </Heading>

            <Text textColor="primary">The benefits of going JavaScript</Text>
            <List>
              <ListItem>Will help with identifying core necessities of HyPhy codebase.</ListItem>
              <ListItem>Tight integration in future electron application.</ListItem>
              <ListItem>Flexible once implemented. For example, could theoretically write a Babel compiler for batch language.</ListItem>
              <ListItem>Even if the project ends up being limited in use, it would only serve to strengthen core code design given parallel development of two interfaces - the new parser and the C++ add-on.</ListItem>
            </List>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://datamonkey.org/assets/img/header-logo.svg" bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            2018 in summary
          </Heading>

          <List>
            <ListItem>Datamonkey.js support with monthly feature updates as Electron application is developed</ListItem>
            <ListItem>HIV-TRACE support with quarterly feature updates</ListItem>
            <ListItem>Completed PRIME rewrite</ListItem>
            <ListItem>Highly extensible MSA Viewer, written as a React component.</ListItem>
            <ListItem>Stripped Datamonkey</ListItem>
            <ListItem>HyPhy Node C++ add-on</ListItem>
          </List>

        </Slide>


      </Deck>

    );
  }
}
