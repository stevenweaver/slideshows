// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Image,
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
import cluster from './images/cluster.png';
import distances from './images/distances.png';

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
        <Slide transition={['zoom']} bgColor="primary" bgImage={cluster} bgDarken="0.95">
            <Heading padding="20px" size={4} caps lineHeight={1} textColor="primary">
              HIV-TRACE
            </Heading>
            <Heading padding="20px" size={6} caps lineHeight={1} textColor="primary">
              A tool for large scale molecular epidemiology of HIV-1 and other rapidly evolving pathogens.
            </Heading>
            <Text padding="20px" margin="40px 0 0" textColor="primary" size={2} bold>
              Steven Weaver - 2018
            </Text>
            <Image src="http://datamonkey.org/assets/img/header-logo.svg" margin="40px 50px" width="100px" display="inline"/>
            <Image src="http://igem.temple.edu/images/igem_logo.svg" margin="40px 50px" width="200px" display="inline"/>
            <Image src="http://igem.temple.edu/images/temple_logo.svg" margin="60px 40px" width="200px" display="inline"/>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/SIV_1280x720.jpg?itok=EduK0pcR" bgDarken="0.9">
          <Heading size={2} fit textColor="primary">
            Key Terms
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/SIV_1280x720.jpg?itok=EduK0pcR" bgDarken="0.9" align="flex-start center">

          <Text size={6} textColor="primary" textAlign="left">
            Key Terms
          </Text>

          <Heading size={2} fit textColor="primary">
            What is a Transmission Network in HIV-TRACE?
          </Heading>

          <Text size={6} textColor="primary" textAlign="left" margin="20px 0px">
            A network of HIV transmission wholly inferred from the sequence data that is supplied. 
          </Text>

          <Text size={6} textColor="primary" textAlign="left" margin="20px 0px">
            It is composed of discrete <span textColor="yellow" textAlign="left">clusters</span> which in turn comprise individual <span textColor="yellow" textAlign="left">nodes.</span>
          </Text>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/SIV_1280x720.jpg?itok=EduK0pcR" bgDarken="0.9">

          <Text size={6} textColor="primary" textAlign="left">
            Key Terms
          </Text>

          <Heading size={2} fit textColor="primary">
            What is a Node in HIV-TRACE?
          </Heading>

          <Text size={6} textColor="primary" textAlign="left" margin="20px 0px">
            A node represents a single patient. Within HIV-TRACE, it is commonly a single representative HIV-1 pol sequence from an individual patient.
          </Text>
         
          <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c6/HIV-genome.png" margin="60px 40px" bgColor="white" padding="50px 30px 50px 50px" />

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/SIV_1280x720.jpg?itok=EduK0pcR" bgDarken="0.9">

          <Text size={6} textColor="primary" textAlign="left">
            Key Terms
          </Text>
          <Heading size={2} fit textColor="primary">
            How Do We Define a Cluster?
          </Heading>

          <List>
            <ListItem margin="20px">Find an infected individual</ListItem>
            <ListItem margin="20px">Identify person with genetically highly similar virus</ListItem>
            <ListItem margin="20px">Identify partners of these partners with genetically highly similar viruses</ListItem>
            <ListItem margin="20px">Repeat until no more links can be drawn</ListItem>
          </List>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/SIV_1280x720.jpg?itok=EduK0pcR" bgDarken="0.9" align="flex-start flex-start">

          <Heading size={2} fit textColor="primary">
            Example of Usage
          </Heading>

          <Image src={distances} margin="60px 40px" bgColor="white" padding="50px 30px 50px 50px" />

          <Text size={6} textColor="primary" textAlign="left" margin="20px 0px">
            Gray lines show the best-fitting mixture distribution. 
          </Text>

          <Text size={6} textColor="primary" textAlign="left" margin="20px 0px">
            Blue denotes potential transmission partners (≤0.02 substitutions/site). Red denotes partners with "random" within or between subtype viral divergence.
          </Text>

        </Slide>

         <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/SIV_1280x720.jpg?itok=EduK0pcR" bgDarken="0.9">

          <BlockQuote>
            <Quote>Phylogenetic support (bootstrap, posterior, etc) is designed to separate clades, not connect nodes.</Quote>
            <Cite>Sergei L. Kosakovsky Pond</Cite>
          </BlockQuote>


        </Slide>
       

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/SIV_1280x720.jpg?itok=EduK0pcR" bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            <a href="https://test.hivtrace.org/hivtrace/5a46af8401d72ca833fe9cef">The Application</a>
          </Heading>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/SIV_1280x720.jpg?itok=EduK0pcR" bgDarken="0.9">

          <Heading size={2} fit textColor="primary">Acknowledgements</Heading>

          <hr />

          <Image src="http://igem.temple.edu/images/temple_logo.svg" margin="40px 50px" width="200px" display="inline"/>
          <Text textColor="primary" display="inline">Sergei Pond</Text>

          <Image src="http://pakedx.org/wp-content/uploads/2017/05/UCSD_Seal.svg_.png" margin="40px 50px" width="150px" display="inline"/>
          <Text textColor="primary">Joel Wertheim</Text>


        </Slide>


      </Deck>

    );
  }
}
