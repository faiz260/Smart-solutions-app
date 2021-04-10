import React from 'react';
import Screen1 from './screen1/screen1';
import Screen2 from './screen2/screen2';
import Screen3 from './screen3/screen3';
import Footer from './footer/footer';
import LowerFooter from './footer/lower_footer';
 
function home() {
    return (
        <div>
            <Screen1/>
            <Screen2/>
            <Screen3/>
            {/* <Footer/>
            <LowerFooter/> */}
        </div>
    )
}

export default home
