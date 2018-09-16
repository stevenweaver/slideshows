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
        <Slide transition={['zoom']} bgColor="primary" bgImage="https://www.ebi.ac.uk/gwas/images/GWAS_Catalog_circle_178x178.png" bgDarken="0.9">
            <Heading padding="20px" size={2} caps lineHeight={1} textColor="primary">
              NHGRI-EBI GWAS Catalog
            </Heading>
            <Text margin="20px" fit textColor="primary">
             Consistent, searchable, visualisable and freely available database of published SNP-trait associations
            </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="https://www.ebi.ac.uk/gwas/images/GWAS_Catalog_circle_178x178.png" bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            History
          </Heading>

          <Text margin="20px" textColor="primary">
            Founded by the NHGRI in 2008 in response to the rapid increase in the number of published genome-wide association studies.
          </Text>


        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="https://www.ebi.ac.uk/gwas/images/GWAS_Catalog_circle_178x178.png" bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            History
          </Heading>

          <Text margin="20px" textColor="primary">
            Since 2010, delivery and development of the Catalog has been a collaborative project between the EMBL-EBI and NHGRI.
          </Text>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="https://www.ebi.ac.uk/gwas/images/GWAS_Catalog_circle_178x178.png" bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Curation Process
          </Heading>

          <Text margin="20px" textColor="primary">
            Published GWA studies are identified through a weekly PubMed search. The search terms are "genome-wide" OR "genome wide" OR "genome-wide" OR "GWAS".
          </Text>

          <Text>
            <a href="https://www.ebi.ac.uk/gwas/docs/methods">More Information</a>
          </Text>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="https://www.ebi.ac.uk/gwas/images/GWAS_Catalog_circle_178x178.png" bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Database Structure
          </Heading>

          <Text>
            <a href="https://www.ebi.ac.uk/gwas/diagram">More Information</a>
          </Text>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="https://www.ebi.ac.uk/gwas/images/GWAS_Catalog_circle_178x178.png" bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Database Structure
          </Heading>

          <Text>
            <a href="https://www.ebi.ac.uk/gwas/diagram">More Information</a>
          </Text>

        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary" bgImage="https://www.ebi.ac.uk/gwas/images/GWAS_Catalog_circle_178x178.png" bgDarken="0.9">

          <Heading size={2} fit textColor="primary">
            Example Code
          </Heading>

          <a href="https://beta.observablehq.com/@stevenweaver/gwas-summary-statistics">More Information</a>

        </Slide>



      </Deck>

    );
  }
}
