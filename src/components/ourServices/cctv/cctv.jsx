import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import "./cctv.css";
import Footer from "../../footer/footer";
import LowerFooter from "../../footer/lower_footer";

function Sound() {
  return (
    <div className="cctv">
      <div className="cctv_header">
        <div className="cctv_header_background"></div>
        <Typography variant="h2" className="sound_header_text">
          CCTV Cameras services are done by our team.
        </Typography>
      </div>
      <div>
        <Paper className="sound_des">
          <div className="sound_body">
            <Typography variant="h3" className="sound_body_text">
              <em>We deal in every kind of CCTV Cameras.</em>
            </Typography>
          </div>
          <div className="cctv_des_div1">
            <div>
              <Typography variant="h3" className="cctv_des_head">
                Dahua Pro HDCVI 5MP IR Dome 2.7-13.5mm Multi-Format Security
                Camera, White (A52AM9Z)
              </Typography>
              <Typography variant="p" className="cctv_des_body">
                Color White Brand Dahua Video Capture Resolution 5 MP Wireless
                Communication Technology Ir Low light technology Starlight
              </Typography>
            </div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51MmVaM-GvL._AC_SY355_.jpg"
              alt="sound_system"
            />
          </div>
          <div className="cctv_des_div1">
            <div>
              <Typography variant="h3" className="cctv_des_head">
                IMOU Indoor Security Camera Ranger 2.
              </Typography>
              <Typography variant="p" className="cctv_des_body">
                Wi-Fi Camera, Image Sensor-1/2.7” 2 Megapixel Progressive CMOS.
                Effective Pixels 2MP (1920 x 1080) Night Vision 10m (33ft)
                Distance Focal Length 3.6mm Fixed Lens Field of View 93°(H),
                48°V, 115°(D) Pan / Tilt 355°Pan & -5~80°Tilt, Built-In Mic &
                Speaker-Yes, Built-in Mic & Speaker Auxiliary Interface Micro SD
                Card Slot (up to 256GB), Reset Button-Yes, Power Supply DC 5V1A
                Power Consumption Working Environment -10°C~+45°C, Less Than
                95%RH Dimensions 106.1 × 77.4 × 77.4mm (4.17 × 3.04 × 3.04 nch)
                Weight 238g (0.52lb) Certification CE, FCC
              </Typography>
            </div>
            <img
              src="https://www.singersl.com/sites/default/files/styles/product_large/public/images/products/2020-06/IMU_DH-I-A22EP-IMOU-01-Zoom.png?itok=qzKZzeo1"
              alt="sound_system"
            />
          </div>
          <div className="cctv_des_div1">
            <div>
              <Typography variant="h3" className="cctv_des_head">
                IMOU Indoor Security Camera Cue 2
              </Typography>
              <Typography variant="p" className="cctv_des_body">
                Wi-Fi Camera Image Sensor 1/2.7” 2Megapixel Progressive CMOS
                Effective Pixels 2MP (1920 x 1080) Night Vision 10m (33ft)
                Distance Focal Length 2.8mm Fixed Lens Field of View 112°(H),
                58°(V), 131°(D) Built-In Mic & Speaker Yes, Built-in Mic &
                Speaker Auxiliary Interface Micro SD Card Slot (up to 256GB)
                Reset Button Yes Power Supply DC 5V1A Power Consumption Working
                Environment -10°C~+45°C, Less Than 95%RH Dimensions 66 × 33 ×
                109mm (2.6 × 1.3 × 4.3 inch) Weight 102.7g (0.23lb)
                Certification CE, FCC
              </Typography>
            </div>
            <img
              src="https://www.singersl.com/sites/default/files/styles/product_large/public/images/products/2020-06/IMU_DH-I-C22EP-IMOU-01-Zoom.png?itok=Zekf2qER"
              alt="sound_system"
            />
          </div>
          <Button
            href="https://www.facebook.com/smartsolutionsunofficial"
            target="_blank"
            variant="contained"
            className="sound_des_button"
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

export default Sound;
