// Import React
import React from "react";
import * as d3 from "d3";
import * as d3Geo from "d3-geo";
import * as d3GeoProjection from "d3-geo-projection";
import * as topojson from "topojson";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/fontawesome-free-solid";
import * as us from "./us-10m.v1.json";
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
import scott_county from "./images/scott_county.png";
import nejm from "./images/nejm.png";
import tab from "./images/tab.png";
import response from "./images/response.png";
import sites from "./images/sites.png";
import title from "./images/title.png";
import options from "./images/options.png";
import network_view from "./images/network_view.png";
import cluster_list from "./images/cluster_list.png";
import phylotree from "./images/phylotree.jpeg";
import finch from "./images/finch.jpg";
import concert from "./images/concert.jpg";
import creeper from "./images/creeper.jpg";

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
  map(us) {
    var indiana =
      "M680.3426577515245,265.6833857301281L680.7424898256024,269.24863269351823L680.8624394478257,270.2714494453105L681.3622295404232,275.13421251668854L681.8820112367243,279.6112275559621L680.8124604385661,280.6223549734481L681.0923428904206,281.39969570481026L682.0119566607997,282.9426878332283L681.562145577462,284.29280594559407L683.0215326478464,284.5090586302587L682.9815494404386,285.1227486813341L682.531738357101,285.5786327192758L682.8316124126594,286.78847881996717L681.5421539737582,286.7066534798238L679.3030943589221,287.71193623015677L676.9440851218625,289.6640550592917L676.4342992274132,289.6582103921386L675.5646644662938,288.82826765639857L674.0652941885018,288.89840366223575L672.3560120718188,289.2432390242686L672.0561380162604,290.19007510307057L672.8058231551564,292.4402719570135L672.885789569972,293.8429920737572L671.8862093847773,295.22233352188846L670.0869650514268,296.0756549262409L669.7071245810528,297.4608410415252L669.2673092995672,299.3019111947513L668.2377417088165,300.1376985976444L667.2881405328816,299.80455256991775L666.6584050162089,300.1376985976444L666.5684427995415,300.9851753348437L665.6788164347181,302.4288081216591L665.6288374254584,305.9180744120589L665.3289633699,306.3447351142351L664.3893579958169,306.66619180765554L663.6196812532171,307.6597852236823L662.4601682383911,306.55514313174666L661.2406804124537,306.7304831463396L659.471423484659,305.64337505586326L659.3414780605837,304.05947025737356L658.2319440550176,303.18861485156185L658.3618894790928,303.7847709011779L657.1024184457475,305.01215100332865L656.1028382605529,304.7666749828985L656.642611560558,305.4914137098827L656.4127081179632,306.338890447082L655.7529851957347,306.51423046167497L655.2032160938776,306.97011449961667L655.7429893938827,309.12095201195694L654.3335813327582,309.47747670829597L654.2036359086828,310.9152648279582L653.3539927512674,311.3594595315937L653.3539927512674,309.8573800732474L652.1445007271818,310.3307981126484L651.534756814213,309.93920541339077L650.2452983753118,308.12151392877706L648.8358903141873,309.4482533725305L647.5364360734342,309.93336074623767L646.6368139067589,310.55289546446613L646.2169902289771,312.96674299869585L645.2573932511903,313.44016103809685L644.4977123104422,312.2361596045585L643.4981321252475,312.148489597262L642.6085057604242,311.56402288195216L641.9787702437516,311.17243018269454L640.5493705789231,310.45938079001655L639.3098911492817,310.44769145571036L638.3303025677909,311.3243915286751L636.7809532807391,309.8866034090129L636.2911589899937,310.8918861593458L636.980869317778,311.8796349082195L636.7209784696274,313.1128596775233L635.6914108788768,313.3057336935756L635.6614234733211,311.8036542352292L635.0616753622041,311.8153435695354L632.8426073510719,312.48163562498866L631.6631027325421,311.4179062031247L631.1133336306851,312.06081958996555L630.9833882066098,312.7738689826436L631.6431111288383,314.14736576362174L631.0533588195734,314.93055116213696L629.5539885417813,314.50973512711386L628.2645301028801,312.54008229651964L629.623959154745,312.3413636133143L628.67435797881,311.8562562396071L629.4840179288177,310.49444879293515L628.864278213997,309.16186468202864L630.1037576436385,308.4020579521258L630.1237492473423,307.6539405565292L629.4140473158541,308.0747565915523L629.9738122195631,306.9408911638512L630.6435309436436,306.67203647480864L629.4740221269658,304.7666749828985L629.3840599102982,304.16467426612934L629.8938458047476,304.56795629969315L630.3936358973449,303.13601284718396L630.7334931603111,303.7847709011779L631.1433210362409,302.9548281654379L631.6531069306902,303.550984215054L632.3228256547707,301.5111953786226L633.2924184344096,300.26043660785945L633.2524352270018,298.8927844940344L634.6118642788666,298.0453077568351L634.5918726751627,296.66596630870384L635.3915368233185,294.35147811607675L636.601028847404,293.5682927175616L636.8309322899988,291.7038438957231L636.031268141843,290.1024050957741L636.041263943695,288.85164632501096L636.2111925751781,287.77622756884085L635.0116963529445,287.1040908462345L634.9717131455367,285.5552540506634L633.6222798955238,284.0648639266232L633.5723008862641,283.41026120547616L634.6118642788666,281.94324975004844L634.0321077714536,281.06654967708363L633.982128762194,279.85670357639225L635.09166276776,278.96831416912124L634.8317719196094,276.06351459403123L634.5618852696068,273.1411810174819L633.9921245640459,266.95167850235055L633.4823386695965,260.995962673343L632.9125779640356,253.60830339182638L632.8825905584797,253.28684669840595L632.3927962677343,247.76948090588087L631.8430271658772,241.63258039512735L631.5231615066149,238.14331410472747L631.2532748566124,235.1800678581065L630.93340919735,231.3167428699083L630.4835981140125,225.97471709197617L631.4331992899474,226.69361115180732L632.5827165029214,226.48320313429576L632.272846645511,227.29561186857646L633.9521413566381,227.5936898933845L635.6214402659132,227.41250521163843L637.2707475714845,226.7695918247976L640.2195091178089,225.016191678868L641.888808027084,223.74205423949252L646.8467257456498,223.26863620009152L651.7446686531039,222.76015015777193L654.4335393512777,222.46791680011702L658.901662779098,222.02956676363462L661.0607559791185,221.78993541035757L667.1082160995466,221.10026468629195L668.6775569903023,220.924924671699L674.784991921842,220.21187527902094L675.2647904107354,221.6029060614584L675.7245972959249,225.30842503652295L676.0144755496315,227.63460256345618L676.4243034255612,231.09464551809054L676.474282434821,231.51546155311365L677.1739885644573,237.40104137628396L677.3639087996443,238.8972761674772L677.8936862977974,243.24570852938257L678.3035141737273,246.73497481978242L678.8532832755844,251.65033989553837L678.9632370959558,252.60302064149343L679.6529474237402,259.4471258777719L679.8628592626311,261.42262337551927Z";

    var svg = d3.select("#svg");
    var path = d3Geo.geoPath();

    svg
      .append("g")
      .attr("class", "states")
      .selectAll("path")
      .data(topojson.feature(us, us.objects.states).features)
      .enter()
      .append("path")
      .attr("d", path);

    svg.append("path").attr("class", "state-borders").attr(
      "d",
      path(
        topojson.mesh(us, us.objects.states, function(a, b) {
          return a !== b;
        })
      )
    );

    var test = d3.selectAll("path[d='" + indiana + "']");

    test
      .transition()
      .styleTween("fill", function() {
        return d3.interpolateRgb("white", "red");
      })
      .duration(5000);
  }

  componentDidMount() {
    _.delay(this.map, 1000, us);
    d3.select("body").on("keydown", () => {
      this.map(us);
    });
    d3.select("body").on("focus", () => {
      this.map(us);
    });
  }

  componentDidUpdate() {
    this.map(us);
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
          bgImage={concert}
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
              icon="dove"
            />
            TOWARD DEFINING THE COURSE OF EVOLUTION 
            <FontAwesomeIcon
              style={{ color: "white", marginLeft: "20px" }}
              icon="dove"
            />
          </Heading>

          <hr />

          <Heading
            padding="20px"
            size={6}
            caps
            lineHeight={1}
            textColor="primary"
          >
            MINIMUM CHANGE FOR A SPECIFIC TREE TOPOLOGY
          </Heading>
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
            February 19th, 2019
          </Text>
          <Image
            src="http://datamonkey.org/assets/img/header-logo.svg"
            margin="40px 50px"
            width="100px"
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
          bgImage="https://vidalcuglietta.com/wp-content/uploads/2018/08/goldfinch-painting-fresh-goldfinch-in-acrylics-by-marion-dutton-available-now-of-goldfinch-painting.jpg"
          bgDarken="0.5"
          align="flex-start flex-start"
        >

          <Heading size={1} style={{marginTop: "20px"}} fit italic textColor="primary">
            A Grand Title for Grand Ambitions
          </Heading>

          <Heading size={6} style={{marginTop: "20px"}} fit textColor="primary" >
            TOWARD DEFINING THE COURSE OF EVOLUTION 
          </Heading>

          <Heading size={6} fit textColor="primary" >
              MINIMUM CHANGE FOR A SPECIFIC TREE TOPOLOGY
          </Heading>


          <List fit="true">
            <ListItem fit="true" textColor="primary">What does the title mean to you?</ListItem>
            <ListItem fit="true" textColor="primary">How does it give insight into the era's zeitgeist?</ListItem>
            <ListItem fit="true" textColor="primary">Do you feel that the subtitle complements or contrasts sharply with its ambitions?</ListItem>
          </List>

        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={finch}
          bgDarken="0.5"
          align="flex-start flex-start"
        >
          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
            The Razor that Motivates Walter Monroe Fitch 
          </Heading>
          <Text textColor="primary">Born 1929 in San Diego, CA</Text>

          <BlockQuote fit>
            <Quote textSize={50} fit>
							It has been a goal of those attempting to
							deduce phylogenetic relationships from information on biological characteristics to
							find the ancestral relationship(s) that would
							permit one to account for the descent of
							those characteristics in a manner requiring
							a minimum number of evolutionary steps
							or changes.
						</Quote>
          </BlockQuote>


        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={finch}
          bgDarken="0.5"
        >
          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
						Wait... That Approach Sounds Awfully Familiar
          </Heading>

          <BlockQuote fit>
            <Quote textSize={50} fit>
							Numquam ponenda est pluralitas sine necessitate("Plurality must never be posited without necessity")
						</Quote>
						<Cite>William of Ockham</Cite>
          </BlockQuote>


        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={finch}
          bgDarken="0.5"
        >

          <BlockQuote fit>
            <Quote textSize={50} fit>
							Its solution provides the most reasonable hypotheses on the ancestral states and therefore is the best estimate of the course of evolution.
						</Quote>
						<Cite>Walter Fitch</Cite>
          </BlockQuote>

          <Heading size={6} style={{marginTop: "20px"}} fit textColor="primary">
						Bold!
          </Heading>


        </Slide>


        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={creeper}
          bgDarken="0.7"
        >
          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
						Before We Discuss Its Merits : The Algorithm
          </Heading>

					<Text style={{marginTop:"20px"}} textColor="primary">
						Ingredients
					</Text>
          <List fit="true">
            <ListItem fit="true" textColor="primary">Descendant Characteristic(s) (e.g. nucleotide, phenotype, geographic location) </ListItem>
            <ListItem fit="true" textColor="primary">Presumed Topology</ListItem>
          </List>

					<Text textColor="primary">
						Result - Parsimony Score
					</Text>



        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={creeper}
          bgDarken="0.7"
        >
          <Heading size={1} style={{marginTop: "20px"}} fit textColor="primary">
          	<a href="https://beta.observablehq.com/@stevenweaver/fitch-algorithm">Demo</a>
          </Heading>

        </Slide>



        <Slide
          transition={["spin"]}
          bgColor="secondary"
          textColor="primary"
          bgImage={concert}
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



      </Deck>
    );
  }
}
