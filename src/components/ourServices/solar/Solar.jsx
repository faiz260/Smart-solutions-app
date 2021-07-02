import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import "./solar.css";
import Carousel from "react-material-ui-carousel";
import Item from "./solarItems";
import item from "./solar.json";
import Footer from "../../footer/footer";
import LowerFooter from "../../footer/lower_footer";
import Fade from "react-reveal/Fade";

function Solar() {
  return (
    <div className="solar_panel">
      <div className="solar_header">
        <div className="solar_header_background"></div>

        <Typography variant="h2" className="solar_header_text">
          <Fade top>
            {" "}
            Best Solar Panel service in town for your homes and factories.
          </Fade>
        </Typography>
      </div>
      <div className="solar_body">
        <Typography variant="h2" className="solar_body_text">
          <Fade bottom>
            <em>Here's some of our work</em>
          </Fade>
        </Typography>
        <Carousel navButtonsAlwaysVisible={true} className="carousel">
          {Object.entries(item).map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
      <div>
        <Paper className="solar_des">
          <Typography variant="h3" className="solar_des_head">
            <Fade bottom>We deal in every kind of Solar Energy Systems.</Fade>
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              We provide full fledge solar energy systems for your houses,
              factories, commercial buildings etc. Which will reduce your
              electricity bill to 0. High Efficiency Low LID Bifacial PERC with
              Half-cut technology with High module conversion efficiency(up to
              20.9%). Bifacial technology enables energy harvesting from rear
              side (up to 25%). Along with high class inverters for
              non-interepted backup.
            </Fade>
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              With different specifications, The Smart Solutions offers a wide
              range of Solar Panels for selection per customers’ requirements.
              Designed with different solar cells in type and varying in their
              number count, these panels tend to yield different outputs.
              Featuring a great deal of flexibility in choice, these Solar
              Panels are simply categorized to make your choice easier.
            </Fade>
          </Typography>
          <Typography variant="h5" className="solar_module_head">
            Standard Module
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              Based on either Monocrystalline or Polycrystalline technology, JA
              Solar standard modules are developed in 60-cell and 72-cell count.
              The maximum output and efficiency rate vary for each panel. These
              are standard modules with no extra features, perfect for regular
              usage and low budget. These work fine; however, they are like your
              old vanilla solar panels.
            </Fade>
          </Typography>
          <Typography variant="h5" className="solar_module_head">
            Half Cell Module
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              Featuring bit unique and smaller cells, the half-cell solar panels
              are available in either 60-cell or 72 cell count. In actuality,
              each type in this category has double solar cells as they are
              split in half. This is a more advanced technology in which the
              cells are further cut and divided thus called half cells. The
              result is improved conversion of sunlight into electrical current
              and a higher yield.
            </Fade>
          </Typography>
          <Typography variant="h5" className="solar_module_head">
            Double Glass Module
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              For increasing durability and reliability, these panels have
              double glass cover at the back instead of traditional, polymer
              ones. However, in aesthetics, these glasses back sheets are not
              transparent and can have different basic colors. They add a
              beautiful look to the setup as well as are known to be highly
              efficient with enhanced production capacities.
            </Fade>
          </Typography>
          <Typography variant="h5" className="solar_module_head">
            Bifacial Mono PERC Double Glass Module
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              With bifacial PERCIUM cells, these modules have the tendency of
              energy generation on each side. The technology used in these cells
              results in higher performance. The rear end of the module is
              fitted with a transparent sheet that allows sunlight reflected
              from the floor to fall on the rear end of cells and generate
              electricity consequently having higher yield. This is by far the
              latest tech in Solar panel technology.
            </Fade>
          </Typography>
          <Typography variant="h3" className="solar_des_head">
            <Fade bottom>Why The Smart Solutions?</Fade>
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              The smart solutions Solar panels are mark of high-end technology
              used and their reliability has many other distinguishing features
              which are as follows:
            </Fade>
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              <ul>
                <li>Up to 19.2% Max Efficiency</li>
                <li>Up to 400W Rated Power</li>
                <li>High-performance PERCIUM cells</li>
                <li>ISO, OHSAS and IEC certifications</li>
                <li>Superior, low irradiance performance</li>
                <li>
                  Higher tolerance for harsh environment and extreme weather
                  conditions
                </li>
                <li>IP68 Junction Box</li>
                <li>Maximum System Voltage of 1500 V DC</li>
              </ul>
            </Fade>
          </Typography>
          <Typography variant="h5" className="solar_module_head">
            <Fade bottom>Warranty</Fade>
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              The smart solutions Solar panels have an impressive 10 to 12 years
              product quality warranty and 25-year performance warranty. This
              makes them a safe investment and a viable option for reducing
              energy costs via PV solar panels.
            </Fade>
          </Typography>
          <Typography variant="h5" className="solar_module_head">
            <Fade bottom>Net Metering</Fade>
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              Net metering is the most beneficial aspect of a solar panel
              system. Premier Energy has attained and maintained the most
              prestigious V1 certificate from Alternative Energy Development
              Board (AEDB). This certificate is the proof of our excellent
              service in Net Metering. We take care of everything that has to be
              done to get a net meter installed. We handle the whole process
              from the fulfillment of application to installation of the meter.
            </Fade>
          </Typography>
          <Typography variant="h5" className="solar_module_head">
            <Fade bottom>Solar Inverters</Fade>
          </Typography>
          <Typography variant="p" className="solar_des_body">
            <Fade bottom>
              Solar Inverters are an integral component of the solar system which
              are considered equally significant as PV plates. However
              installing best Solar Inverters in Pakistan might seem expensive
              at first, but one of the best way to invest your money. It is
              pertinent to mention here that solar systems are classified into
              three categories mainly. These include On-grid or Grid-tie Solar
              System, Off-Grid or stand-alone power system (SAPS) and Hybrid
              Solar Systems. On the same pattern we have Grid-tie Inverters,
              Off-grid Inverters and Hybrid inverters.
              <br />
              A Grid Tie Solar Inverter / On Grid Solar Inverter is always
              synchronized with a utility line interface. Suitable to be
              attached with an electric grid, it converts DC power of solar
              panels into home appliances friendly AC power.
              <br />
              Off-Grid Inverters are not connected to utility line phase. The
              electric current runs from PV plates to the battery or charge bank
              and then converted into AC power.
              <br />
              Hybrid Inverters also termed as multi-mode inverters, are said to
              be the smart choice owing to their technology and advantages.
              These inverters intelligently manage power input from battery and
              from solar PV plates. The batteries are either charged by solar
              power or electricity grid connection when these inverters are
              installed to your solar system.
              <br />
              The smart solutions deals in the world’s best inverters that have
              with around 10 years of warranty that makes investing with Premier
              Solar Solutions the right thing to do. We deal in only the top
              solar inverter companies in the world.
            </Fade>
          </Typography>
          <Button
            href="https://www.facebook.com/smartsolutionsunofficial"
            target="_blank"
            variant="contained"
            className="solar_des_button"
          >
            Get in touch with us
          </Button>
        </Paper>
      </div>
      <Footer />
      <LowerFooter />
    </div>
  );
}

export default Solar;
