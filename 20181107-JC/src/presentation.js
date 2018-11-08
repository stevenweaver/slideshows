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

var bgImage = "https://cdn-images-1.medium.com/max/2000/1*xJ7ew1IqICMwkqKNwD0J-w.jpeg";

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

          <Text padding="20px" size={2} caps lineHeight={1} textColor="primary">
            This can become computationally expensive for large networks!
          </Text>


        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Practical Example - HCV
          </Heading>

          <List>
            <ListItem>Find therapeutic targets</ListItem>
            <ListItem>Associate variation with treatment outcomes</ListItem>
            <ListItem>My personal favorite, explain the global prevalence of drug resistance-associated mutations</ListItem>
          </List>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={bgImage} bgDarken="0.9" align="flex-start flex-start">

          <Heading size={2} fit textColor="primary">
            Pipeline
          </Heading>

          <List>
            <ListItem>Query some database like GenBank for relevant sequences, and make sure you know which region</ListItem>
            <ListItem>Align to a reference sequence using an alignment tool like MAFFT</ListItem>
            <ListItem>(Contextual) General data quality assurance procedures.</ListItem>
            <ListItem>Build phylogenetic tree</ListItem>
            <ListItem>Fit Codon Model and Ancestral State Reconstruction</ListItem>
            <ListItem>BGM Analysis</ListItem>
          </List>

          <a href="https://github.com/PoonLab/comet-prot">More Info</a>

        </Slide>


      </Deck>

    );
  }
}
