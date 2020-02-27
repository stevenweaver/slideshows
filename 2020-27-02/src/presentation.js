// Import React
import React from "react";
import * as d3 from "d3";
import * as d3Geo from "d3-geo";
import * as d3GeoProjection from "d3-geo-projection";
import * as topojson from "topojson";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/fontawesome-free-solid";
import * as _ from "underscore";
import Plot from 'react-plotly.js';

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
import still from "./images/still.jpeg";
import longtime3 from "./images/longtime3.png";

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
            Progress and Situation Report
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
            February 27th, 2020
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
          bgDarken="0.7"
        >

					<Plot
						data={[
							{
								x: ["R21", "SH-T", "Seguro","MalAvi", "Neuromonkey","Datamonkey","Admin","DSPS", "HyPhy", "Phylotree", "Research"],
								y: [60, 125, 10, 3, 14, 35, 29, 4, 4, 13, 14],
								type: 'bar',
								mode: 'lines+markers',
								marker: {color: 'red'},
							}
						]}
						layout={ {width: 1320, height: 800, title: 'Time Allocation per Project (January 1st, 2020 - February 26th, 2020)'} }
					/>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.7"
        >
          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
            Contrast-FEL
          </Heading>

          <ListItem>Allow multiple partition selection</ListItem>
          <ListItem>Parse existing labels in newick tree</ListItem>

          <ListItem>Slated for release ASAP and top priority.</ListItem>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={still}
          bgDarken="0.7"
        >
          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
            [Pet Project] Neuromonkey
          </Heading>

          <ListItem>Kevin has made nice progress</ListItem>
          <ListItem>Anticipating new feature release in Datamonkey by May.</ListItem>
          <ListItem>Further work to be proposed after initial release.</ListItem>

        </Slide>



      </Deck>

    );
  }
}
