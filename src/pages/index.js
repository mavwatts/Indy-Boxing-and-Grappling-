import React, {useState} from 'react';
import InfoSection from '../components/InfoSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>   
         <Navbar toggle={toggle}/>
         <HeroSection/>
         <InfoSection {...homeObjOne}/>
         <Services />
         <InfoSection {...homeObjThree}/>
         <InfoSection {...homeObjTwo}/>
         <Footer/>
        </>
    );
};

export default Home
