// Import React
import React from "react";
import * as d3 from "d3";
import * as d3Geo from "d3-geo";
import * as d3GeoProjection from "d3-geo-projection";
import * as topojson from "topojson";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/fontawesome-free-solid";
import * as _ from "underscore";

// bgImage="http://www.themilanese.com/wp-content/uploads/2014/04/Munari-Curva-Peano.jpg"
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  Deck,
  Image,
  Heading,
  Layout,
  Fit,
  Fill,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import sites from "./images/sites.png";
import title from "./images/title.png";
import options from "./images/options.png";
import network_view from "./images/network_view.png";
import cluster_list from "./images/cluster_list.png";
import phylotree from "./images/phylotree.jpeg";
import tree from "./images/tree.jpg";
import still from "./images/still.jpeg";
import reproduce_1 from "./images/reproduce_1.jpg";
import reproduce_2 from "./images/reproduce_2.jpg";

import longtime from "./images/longtime.png";
import longtime2 from "./images/longtime2.png";
import longtime3 from "./images/longtime3.png";

import benchmarks from "./images/benchmarks.png";

// Require CSS
require("normalize.css");
require("./style.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          bgImage={still}
          bgDarken="0.50"
        >
          <Heading
            padding="20px"
            size={4}
            caps
            lineHeight={1}
            textColor="primary"
          >
            <FontAwesomeIcon
              style={{ color: "white", marginRight: "20px" }}
              icon="feather"
            />
            Reproducible Computational Phylogenetics with JavaScript
            <FontAwesomeIcon
              style={{ color: "white", marginLeft: "20px" }}
              icon="feather"
            />
          </Heading>

          <hr />

          <Text
            padding="20px"
            margin="40px 0 0"
            textColor="primary"
            size={2}
            bold
          >
            Steven Weaver
          </Text>
          <Text textColor="primary" size={2} bold>
            February 28th, 2019
          </Text>
          <Image
            src="http://datamonkey.org/assets/img/header-logo.svg"
            margin="60px 50px"
            width="200px"
            display="inline"
          />
          <Image
            src="http://igem.temple.edu/images/igem_logo.svg"
            margin="40px 50px"
            width="200px"
            display="inline"
          />
          <Image
            src="http://igem.temple.edu/images/temple_logo.svg"
            margin="60px 40px"
            width="200px"
            display="inline"
          />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.5"
          align="flex-start flex-start"
        >

          <Heading size={1} style={{marginTop: "20px"}} fit italic textColor="primary">
            The Crisis of Irreproducible Research
          </Heading>

          <BlockQuote fit>
            <Quote textSize={50} fit>
              More than 70% of researchers have tried and failed to reproduce another scientist's experiments, and more than half have failed to reproduce their own experiments.
						</Quote>
						<Cite>Baker, Monya. "1,500 scientists lift the lid on reproducibility." Nature News 533.7604 (2016): 452.</Cite>
          </BlockQuote>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.5"
          align="flex-start flex-start"
        >
          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
            Software/Methodology is Widely Considered a Large Part of the Problem
          </Heading>

          <Image src={reproduce_1} margin="40px 50px" width="400px" display="inline"/>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.5"
          align="flex-start flex-start"
        >
          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
            Software/Methodology is Widely Considered a Large Part of the Problem
          </Heading>

          <Image src={reproduce_2} margin="40px 50px" width="400px" display="inline"/>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.5"
        >
          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
            Beyond Dataset and Code Location : Some Questions that Afflict Our Lives Daily
          </Heading>

          <List fit="true">
            <ListItem fit="true" textColor="primary">How do I install this?</ListItem>
            <ListItem fit="true" textColor="primary">Where is the documentation?</ListItem>
            <ListItem fit="true" textColor="primary">How do I use Python 3 instead of 2?</ListItem>
            <ListItem fit="true" textColor="primary">I'm getting an error about stdlib.h missing. What is Clang/GCC?</ListItem>
            <ListItem fit="true" textColor="primary">What do you mean by I have to set an environment variable?</ListItem>
          </List>

        </Slide>


        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.7"
        >

          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
            eLife Proposes Steps Towards a Solution
          </Heading>

          <Image src={longtime} width="100%" padding="50px 30px 50px 50px" />

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.7"
        >

          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
            eLife Proposes Steps Towards a Solution
          </Heading>

          <Image src={longtime2} width="1100px" padding="50px 30px 50px 50px" />

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.7"
        >

          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
            eLife Proposes Steps Towards a Solution
          </Heading>

          <Image src={longtime3} width="1100px" padding="50px 30px 50px 50px" />

        </Slide>



        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.7"
        >
          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
            Wouldn't this all be easier if the code just ran natively in the browser?
          </Heading>

          <Image src={benchmarks} width="800px" padding="50px 30px 50px 50px" />

        </Slide>



        <Slide
          transition={["spin"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.6"
        >

          <Heading size={2} fit textColor="primary">
						Discussion Topics
          </Heading>
					
          <List ordered start={1} fit="true">
						<ListItem>Why has Fitch's Algorithm been a stalwart in computational phylogenetics? What is the algorithm useful for?</ListItem>
						<ListItem>What are some of the drawbacks to parsimony methods? Is Fitch's approach to ancestral reconstruction still widely used?</ListItem>
					</List>
					
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage={still} bgDarken="0.5">

          <Heading size={2} fit textColor="primary">Acknowledgements</Heading>

          <hr />

          <Image src="http://igem.temple.edu/images/temple_logo.svg" margin="40px 50px" width="200px" display="inline"/>
          <Text textColor="primary" display="inline">Alexander Lucaci</Text>
          <Text textColor="primary" display="inline">Sergei Pond</Text>
          <Text textColor="primary" display="inline">Stephen Shank</Text>

        </Slide>


      </Deck>

    );
  }
}
