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
              Detecting Amino Acid Coevolution with Bayesian Graphical Models
            </Text>
            <Text margin="20px" textColor="primary">
              Mariano Avino, Art F. Y. Poon
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Motivation
          </Heading>

          <Text margin="20px" textColor="primary">
						Infer potential structural, and ultimately, functional constraints
						on protein evolution. Applications include development of vaccines, better
						understand disease-associated phenotypes (polygenic scores), and prevalence of epistasis.
          </Text>

          <Text margin="20px" textColor="primary">
            If site 6 is evolving, it's probable that site 146 is evolving too. <a href="http://localhost:8080/BGM">Example page</a>
          </Text>
            
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Motivation  
          </Heading>

					<Text textColor="primary">
						Some reasons why some sites may not be independent of each other.
					</Text>

          <List>
            <ListItem>Amino acid translation</ListItem>
            <ListItem>Physical properties of proteins like direct interaction, energetic, structural, allosteric mechanisms</ListItem>
            <ListItem>Can even assign probability sequence-signature pairs for protein-protein interaction</ListItem>
          </List>
           
        </Slide>


        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
						The problem with correlated substitutions
          </Heading>

					<Cite>
						One of the major confounding factors affecting the comparative study
						of protein sequences is that the amino acids in different sequences are not
						independent observations; instead, they are copies that descend from a common
						ancestor such that shared genotypes may be due to identity by descent.
					</Cite>


        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
						The problem with correlated substitutions
          </Heading>

					<Text fit textColor="primary">
						The "curse of dimensionality" and the inability to retrieve joint probabilities of all potential interactions
					</Text>

        </Slide>


        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
						What is a Bayesian Network
          </Heading>


          <Image src="https://cdn-images-1.medium.com/max/1600/1*9OsQV0PqM2juaOtGqoRISw.jpeg" />
					<Cite>P(Sprinkler|Cloudy, Rain) = P(Sprinkler|Cloudy)</Cite>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
						Joint Probability of a Bayesian Network
          </Heading>

          <Image src="https://cdn-images-1.medium.com/max/1600/1*YfhbkEJaSBduQHoYoXnmKg.png" />
					<Cite>Product of P(node|parents(node)) for all nodes</Cite>

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

      </Deck>

    );
  }
}
