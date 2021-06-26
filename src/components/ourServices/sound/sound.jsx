import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import "./sound.css";
import Footer from "../../footer/footer";
import LowerFooter from "../../footer/lower_footer";

function Sound() {
  return (
    <div className="sound_system">
      <div className="sound_header">
        <div className="sound_header_background"></div>
        <Typography variant="h2" className="sound_header_text">
          Best Sound systems in town for masjid, mehfil e naat, and events.
        </Typography>
      </div>

      <div>
        <Paper className="sound_des">
          <div className="sound_body">
            <Typography variant="h3" className="sound_body_text">
              <em>We deal in every kind of Sound Systems.</em>
            </Typography>
          </div>
          <div className="sound_des_div1">
            <Typography variant="p" className="sound_des_body">
              Along with high class inverters for non-interepted backup. Along
              with high class inverters for non-interepted backup. Along with
              high class inverters for non-interepted backup. Along with high
              class inverters for non-interepted backup. Along with high class
              inverters for non-interepted backup.
            </Typography>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgSEhUYGRgaGRkYGBgYGBgYGBgYHBgZGhgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQkJCs2NDQ0NDYxNDQ0NDQ0NDQ0NDY0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NjQ0NP/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABIEAACAQICBgYFCgMGBQUAAAABAgADEQQhBRIxQVFxBiJhgZGhBxMyscEUI0JSYnKCstHwkqLCM1Nj0uHxFiRDRJM0VHODs//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAAMAAgIBBAIDAQAAAAAAAAABAgMRITFRBBIiQTJhQnGBFP/aAAwDAQACEQMRAD8Ai1EUVJ1RFFEg0OKsVVZ1ViqJADirFlWBEiyU4CDIsVRIESL00gAemkd00iaAAXJAA2k5AczIfSHSyhTutMesbsNkH4t/cCO2KqU9jUuuizU0jM6coB/VU29Y+dwmarb6z7OywuZnWk9P4ivk72U/QTqp3j6XeTC6BrEVhntBHhnOe8z18TecK/katS0h9jwa/wAI4XSlMZlW7gD8ZAYWpexirE6pmKz2vst4Z8FiTStLeSOan4RxS0lQOx18x7xKgaxABJy4xHD42ndhrpty6wlL1F+CXhjyaPTxdNvZdTyYH4xcETNy/WByzuD8IPW6pNrjkSJa9U/tE/8AP4ZpMEqGg9KOKiozEq3VsxvY2yIJ2Zi1u2W+dOLIrW0YXDh6Z2CCCaEAggggBlvpKFsfhTxpsPN5DPsPIyc9KC/81hG+y49/6yDJmT7NJ6NE0Vnh0+4v5BHuhPYI7TGWgc8Mn3E/II90NsYdpmpH0SYgEAgEBAaKJsHKJtFE2DlAA8EEEABBBBAAQQQQAEEEEAMLWKoIRYsokGgdBF1EIgiyLAQdFi6LEKtdEGtUYKOJ39gG88pB47pQB1aK/jf4L+vhJq5nsqYddFnd1RSzsFUbSxAHiZCY/pXTQEUV1z9ZrqncNreUp2Jx9Sqxao5YjZfYOQ2DujcG4MwrK31wbTiS7JLHaXrVj845I3LsQclGXft7YzvcnlE1O+HBzEyfL5NeugynKOcA+rURuDDwjZTkRDKbHviA0rBPlyMX0hilpo7tsA2cScgPEiRui6txfiobyuffEulrH1KHdrrrd6uo/mKzOJVWkx2/bLZWdK6We2s5J4LuHdKvU07Uvlbzkhpu+r2W+OchTgQU1gRfhaeqkpWkee229sndE9JqiMAzWF9v0b/aX4y+YDSq1tvVe2Y3HLavllMcpKb2lv0VUdFVgc1ORmWXDNr9mmPK5f6NLw9UqysPolT4EGaOpuLiZdg64dFcfSUH9R75o2iautRRvsgeGXwmHpXqnLNfULaTH0EEE7TlBBBBADNPSqvzuDb7Tj3Su3ln9LC54Rv8Rh+WVW8xrs0no0foznhqf3E/KI/0Vtcdsj+iZvhaf3F+Ikho7J35zZEEnBOTojEAxSnsETMUpbBEAeCCCAAggggAIIIIACCCCAGHoIsoiSGLU5BYsgi6CJLF0EAKb0oqN8osTkFXV5EXPneQ0sHTKlaqj/WS3erH/MJXmnJa+TOqPxQVD1rcRDpEQ3X7/fFhkZLRZ1NkO52RPZfnFCLiIBRRmRDAfvyhFOY5e6HWIRcej1S6JxsV8D/tJnHYRa1FqTZa1wDtKsOsrDtDAHula6MVciODX8f9pbEa15i3quDTtGa4zDMdalUGq65MN19zLxU7QfiDKzqPTYoQbfDieE13TOiqdcBjdXW4V19oZ3IN/aU8D5HOVfH6DrIbPTDjc6fFD1gewa3Oehj9RFLnhnFeKpfHKKro3C67X7ZZHphEA3wYXCFfYo1Ce1Ht+WSuD0O7vrVxqgC+rlc8BlsHnNKyzK22RMVT0kS+hFIpIDwv3MSR5ETQ+itS9DV+qxHccx75RKTZy29Dq2dROTfD9Jw4L3m352deadY9eNFqgggnpHCCCCCAGeelsfN4ZuFb32lPvLd6WK4NJEG1KiFuzWvYeA85TrzGuzSejSuhpvhk+7bwZhJTBe20iOg5vhl/H5O8mMOPnGmyIY/nROTojEAyk9M+mdXButGlTQllvruSQM/qi1/GXYzJPSsvz9M/YPvEyytzLaNMUqq0xpS6Y4921mrsPsqFVR3ASTpdNMUuTVb81U/CUfBvsjbTruAdQ7WF+U58LqnptnRlUytpI2jov0nevUFOoVIYHVIFusM7eF5cp556BaWdMQgc+y6nuvY+V56GE6p2uGctafKOwQQSiQQQQQAxBBFUiaRVZBYvTjlY2px0kAK/0zp9Sm/Byv8AEt/6JUSJe+k9LWwz8VKt4MAfImUWc2VfI6cT+I3rbmjh9t4m4y8Ya/VU9khmgH9rmIrS/WJN9E90PT2xPoBW+QPbDsM7wlsiIpfKIRL6BqWcjit/A/peXeg1zzHwmfaKe1Re248QR8ZfME91Q9378Zjk7NJ6DY6qqIWY7CLcSTlYeErGL0zUqNq01PYFBJNuWZ8oXT+ONSoVB6qkqOGRszHvB7lEq+KxrurLTbUo7GY5Gpbe28jgL2Habk9mDBKn3Uts5MuZt6knji8QmXrAPsmqn5daO8Lp91YGsusLWuoANuNth8pQKi0R9N+eqQPdO06tRBrU31l322j7yn3zesUUtNGU5Kl7TNZw9dXAdCCDvH7yPZLF0Xq6tcfaUr5XHmJkegtNkHWXs1k3MOI4EfvKaRobGLr06qG66ykHsvY+8zz7xPDaf1s7Fayw19mnQSGPSjRwJBxmGBBIINencEZEEa22G/4p0d/73Df+el/mnqHATE4TGNDS+FcBkr0mB2FaiMD3gyP6V6RCYSq1M6zMuouqbka/VJy4Ak90AMy6TY/5RSxNbccTTK/cF1T+VRGIaFxH/o8QOBpN/MRE1aYs1RpnQJr4Yfef/wDRpPoPnO6V30etfD/jqfnv8ZY/piaz0Qx5BAIJRJ2Y76TamtiQNwS02F2sCZhnTPSCVsQSpvqllPMGY5/wNsP5EDhz74+xeF11y3jOR65NJMVrJltvYd848barg6rSc8jbQmi3SprsbiegdC4n1lCm+8qL8wLHzE8+LpgI+qSSN5Oy82b0d49auGIBvqMfBut77zuW98nG9a4LbBBBLMwQQQQAxJDFUMaoY4QyCxykcpGqGOEMAOY6lr0qlP6yOBzKm3nM1UzU6czDEU9R3T6rsv8ACxHwmOZdM2xPtCJ3zi+zyJnWnF+kORmBsdqHqg8DFFGcSK3UiGVtndAByu09s6dkIDmIpuIiAUovYq3Agy7LidShUcfQVnHcCR8JR1OUsLV74Osf8E+QsfdIqdtDT0mV/HEhNQHNiEvvt9I342B8Y1q6qgZDL2eC7r24x1jfaT8Z7wsYY63K89Q4BvVxVz/v8YzqKQdZcmHDYewiGekRxt27YRTugBzXtaqmRBGsBuPEdhl96H6UuQl8n6y/ZcDNe+3l2zPwdVrn2Tk3I/u/OSmg6rI5W/WVgyntU3B5bJGSFctMqKc0mc6XUfV43EKNhqM45PZwPBhIf1plo9IiA1qVdR1atBGvxYErbmFCeMqV445lMVcUxQv2DwmxdEVC6Po2AF1ZjbLMu0xqbR0ZFsBQ+5/U0YIhce3zOKH2VPg4/WM6b5DlJJ8C74fG1h7KIA3aXbdy1fOQ9FuqOQ90hoaZqHo5a9Bux3/pPxlpPtiUv0d19Wi9t1Rh4ohlifHPrgC0uehMnhBI8Yl+MHrm4yiRLpPpAYfC1ax+ijHvtlPPGFrMyBmNySWPM5/Gah6X9IMuC9WDm7qvMXufdMtwosoHACY5/wATbD+Q6bcY5ZuqOcaA5RcG6zjh6pM66W5aIHEm5PfNJ9B+liK1XCsfaTWXmpz8mmb4hLM3P3yZ9HmN9RpDDvewL+rbk4Ke8g909E889NwQQQECCCCAGFoYuhjNGi6NILHyGOEMYo0dI0AHimUDpHS1cTU4MQw/Eik+d5e0MqXTOnasj/WS3erH4MJnlXxNMT+RXm3Qqmx5idfZOMM++cyOgNS4cxOJs8YFyPfO7zzgAuYosREVQxAdWTmil16FSlvZKijmyG3mZCCTHRypqsRwIP78pN+Rz4Iao+slJ+NgfxIR77SKxdfVdb7r/v8AfGWHG4Eq1fDDajFqf3WOvT8CSPwyD0jhvWIKiDO17b+1edx5T0k00mvs4GtNoeUwKq2AzkM9DVa3l2/v3RXRmMKZHbw334WjxqRYliMz5Em9uedu6N8ICMxVO63/AHln+scYI/O02+ugvzF1/pEXxdOynkfymFwNPr0BvCFjy1z+hiQMmullPXwWHqb6dWpSPJgGXwCHxlIml6TwuvozEZXKOtQdliik/wALPM0kw+14ZVLr+gCbNoWnfAYbMiyK2W+18j2ZzGRNp0KbYHD/APxL7pQkTeGwIXQ2JbfUWtUP4TqgeFO/fM1w56i/dHumwaKo6+iHT61HEr3k1AJjeDa6Ifsj3SaBGhdAKgFKrc2+c/oT9JPvVXXDbhKr0Mb5tx9sflEsJjT4DRJHHruBMIdJHcojCKOllU8bx7YaQ00xgKWK1PlChghuoOwHjaVDpno6lSWn6tFS5INha+UvIlS6f+wh+0fcZnl5lmmP8kUhYrR4d0QUxambGcLOxDHSmFb2hu2/rGGALLUUjaGBHMEES2NS1lDDaMiOIiFDRqFwwUi3HZO6Mic7Zx3DVaR6H0diBUpU6g+kqt4gGOpW+guJ18Ig3oWTuBuPIiWOaJ7WzJrT0dgggjEYCjRwjRmGiqPMyx8jRyjyPR44R4ASKPIHpml0pvwcr/EL/wBEladSMuka62Hf7JVv5gD5ExVzLKl6pFLbZCvsvyMMNk5unIjqOuc+YnC2d+Ig+qeydbdABZIddpidMxRYgFGj/Q72qW4j3Z/CRxjjBPaoh7R5xUtyxy9NFj6RYewTGKL6ihatsyaRNtbLbqtnyJldxuH9U/8Ah1DdTuVztHJss+POaBoizJ1gDYkEHMEE5gjgc5A4/RS0D8lqi+HqHVo1DnqE7KLsdhH0Sdoy2ibekzJr2V/hj6jHp+5f6VP1IU9vmOzs5Q6JHWMwNWgbVFZ02K6i7KNwYH2vfzjU4imf+si/eDKw/CRtnY5ZzbG2PQuRTUZnLL6t8z37I90Xhw1RnHsoBSU8SL6xHZrFvCcoUi11oXJPt12BUKN+pfNmtv2DdLPofRaqqqososAOPPtP6mHXLDvolcLgdbDPS/vEqL3shVfhMPnovCU9UC26x8v9Jg/SDB+pxNekBYJVdVH2Qx1bdlrTl9Pe6r9vZvmnSRGibd0U0e9fAoTUVBTpUyLZ6xa4CvfYMt0xESy6F0rUShUVahA6l1vkQCbeE6KekYo3ro7XanRXDMqMqhtZ1fMhmJ9jV+1bbMXpUig9WdqEoeakqfdLV6MtMetxLUmYEmncC99jpfLkZEdM6QoY7EU7WBqFxyqWfLvcjui22tseknwT/QpupUH2l9xlkJlQ6CYgN60cNQ/mltJjQB7w71AVUbxeMtJ4pcOgqV7ohNlJBzNibDicjKpjenKC4ooW+0+Q8NsTpLsalvouoOUqHTrEIURAQTrE2B2ZSs47pNiamTVNUHcmXntkO+kF2lrntNzMbt0tSjaY9r22OQYYPnImppMbhGz49zIWGmW80ot6YlgnUQvy3QyYquRlTA5mVjR+PqLcByAdok7gahJGsTLWFpaM3mWzVPRdUrWrLUWy9RlIva+YYX7lmgyrdAcbr4cqbXRrdxFx8ZaZvM+1aMKe3s7BBBKJPO6vFFeNFeKK8zLHqPFleMFeKI8AJFKkGM69N04owHOxt5xojxZHgMpymAb4KiarMvAkeBt8IP0nJo6jiHLkYY7IWmdo5GGXhEwDoc4qpiCmLRAHhlbZCnfOQA0To7W1rrxAP78ZY62EWopSooZWWzKwuCDtvKZ0UrZoePVPmBNCpUjYZcf1mGNcv9Glvgp1TRNejdUU4ikL9RmUVkH1QzWWqv3irdrRg+BwjE3BRgbFXVqWfZrgA81uJonyY6xyiDYU32bh5TunPcrTWzlrHLfHBTcNo2nlqAvvGqCw7mNkH8V5MYbBWVXIz4DMDZvsLntsOwCWL5OFGeUYPiqCIQ9WmuqfpOq/mIiyXdrXSKiZh77ZylSmK+k3C6mOZvroj/y6h80PjNi/4k0cvtYvD91VG9zGZz6X6dNzhsVSYOtRXUOuYZVKuufN38DDDHsr+xZa90mbCa3orDUnw2H1kUkUkzsL31ReZHNG0TiyKNIcET8onWc+zauimFRMLRVALBTY2F/aaRvSXoLhMbWFeq9VHCBD6tkAIBJBIZDn1iLjskl0QfWwdE8VP5mk1FoRUdC9AcJhmL03rHWABDuhBANxsQGWSjhKVP2UA7bXPic45JidTZDoZmfpu0kUw1KmFBD1ASx+iVBIA55zD3xjGbj6XqQqYdEO5w194tf9ZiT4AjYZPxfLKTpLSGrVSdphI4OEac+TNKTQntiU6Ip8naAYdobQtMPhmzlgwb7DIClRe+yTOj0qsQiJc7obHo1P0caRCVvVscnW34hmPjNTvMS0Do2pRdKtZ0UKQ2rfPLiZoL9NMGo9u57M4bQNFsvBeU9enGEO8x5Q6V4NtlQDmbQ2haZhyvDh40EOoHCQUPFqjjDLW4XjVG7IsrwAcrUbhDhm4xujxVXi2BC6RS1Ru0g+IBPxiF9ke6XHXVuIt4H/AFEYtsnPS5OmXuUFot1rcxDoc4TY3f74fYYmUGEVvlG7ttg+UKBFpgPQYmzRg+PG6N3xw4yljpku0i8dFMSLgX9lge7L9DLJil6QO7mlVRKeu2pZsOq6msdQg6pbZbbnMo0dphqNQVFFxvU5Bhwvu5zQNF9PGqKRTw6KBa5eqxJ5BUHviWK4ptLaYVkmktvofHQGnnI9Zj1S/DE1Af4UUCcqdAsc39rpTzrv73ih6T4piCBRX/63Y+PrB7oodNYh9tYqfsJSH50abqb8GTqfI2p+imi2dXGu53laQX3kxzR9E+jwTrVcS1u2ko8lJnTjKxyavVI7HCfkCxH1anaajffrV38mcylF+US6kkqfo50SntUnbteuw/KBKh6UcXhUp0MDhdTVpsSFVi2otmyYkk6xLk93KPdOaLp1KFRVprr6pKm2esMxnt2zJ41je06fQnS1pI5J/DaeKIqal9VQL3IvYAcJAWlxwRAoo2WSA/y5y2Qi39GfSytKnSwr4N2CgjWp1NZm6xI1aeoL/wAUvOA9IOFqtq+qxSGxPXw1QgW4+rDHft2TOeg+kNJ4vXTB1FRaKqdVwpADFrBTq32hpcPk/SJfp4d+d/gIbYy6YPTNCspalUVwDZtU5q31WG1T2Gdr6RUbjM00mdMUXGNqUaA1FYVXRiNelbY4+kFPWB2izW2m7mtpfSgHzmCU9q1ImwSHfS4fKF1Rlzmf1ujtQfSWT+K6Q1h/aYV15MpjddMI2ZR17h+shlFebQNQfV8Y2r6JqKCxXIbTLG+lRsVG5tYCRuLxLvk2zhuiGiDNAcIEw190kfV7zH+iMfh6Z1nQsdxJy7hbbBMGg+hOij1CGcFE7dp5CaRonQFGkoAQDuuxle0b05wIyYEN22y7toliwPS3BNnr9b7Qt3DcJomkSSL6AwrgNVpIbbLjZzkdieg2Cc62oyDgjst+0i+UlcLpjDPn61Cdy6wy/Ux6lVXz1hq8Li559nZHwIo1b0cUGa9PEVkXdmrXPHrDZIqv6Na9/m8WCvF0zv3Gaaw1sl9neePYJxyQdVRcjbwA/WLQbPPamHUxANDh5AxwGh1MbB4dXgA7RoorxorRVXgAnpbNVbgbeI/0kUXFpL4sayOPskjmMx5ynNiCZLx+57NFalaJOpiF2xKrjt4kaTOS1iRLyv6HVTFsYiajHfE4BLUpEOqf2GhgIUGdBjJDSb6KVOuU4iQke6Dq6tdD228YAaLh6d4/p0YhhVkpQSUBxKBiow8e0aOUcrQjGQzUDMc01gzSrOhFgGJXKw1STq293dN2xFCUfp185TSiQt0JZCRmAT1lv9Um+UVcBozGSuCrlaRW9gSbnfw27oyJzsR4SQXBFgqjZttf3zNsaRpPoNqqK2JVdhpoR+F2Bv8AxibGZlnof0SKPrav0mATLgDeagWhsNCWJpI6sjgFWBVgdhUixHgZW9E1yEbC1DerQsjX2un/AEquwXDoBcjLWDjdLHUaV3TeBp1iHDMlRL6lWmbOoO7MWZTYXVgRkMpLGiB07TU32SnYhMzaT2lflqg9alWG4shpv32JUnuEq74nEk/2Cf8Aky/LJ0VsWFLxgajGy4jEfVpr3s36Q4p4tswafg36x6DZ16XZfslZ09iCX9XrX1cmz2tv7hsk9WesDqMy3yN0BHmTeL6GpUqtQUcQodKnVuR1lJyDK20G/vgmkwa2iA0XiUqr8nrqGG1HsA6HgH2lew3El06M0lC/82qM17B0rACxsQXSmy3798r+ntGvhMS9Am5Rrqcs12gm2+0tSKa+HRlNi51L8KirdG5Fbg8uUvsgTTo1i/8At6qVrf3VVHb+ANr/AMsbs2kKL6h1lf6rayP/AAmzeUgRpWopIcA2NiMjmMjJvBdMaoHq2csv924FROXq3DKO4QaDZLYbT2l02K58fcRJah0y0ov/AG7G+Z6oOfHbGujOkdPaEZD/AILELy9RV1kP4SkuuhdMishIpevCkKWpAU2DWvapTqsADbersOUNDP/Z"
              alt="sound_system"
            />
          </div>
          <div className="sound_des_div1">
            <img
              src="data:image/jpeg;base64,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"
              alt="sound_system"
            />
            <Typography variant="p" className="sound_des_body">
              Along with high class inverters for non-interepted backup. Along
              with high class inverters for non-interepted backup. Along with
              high class inverters for non-interepted backup. Along with high
              class inverters for non-interepted backup. Along with high class
              inverters for non-interepted backup.{" "}
            </Typography>
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