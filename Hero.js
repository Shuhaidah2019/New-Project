import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const HeroImg = () => {
    return (
        <div>
            <img style={styles.heroImg}  alt=""/>
        </div>);
};

const HeroText = () => {

    const navigate = useNavigate();
    const [hoveredButton, setHoveredButton] = useState(null);
    const handleContactClick = () => { navigate('/form'); };
    const handleButtonHover = (buttonName) => {
        setHoveredButton(buttonName);
    };
    const handleButtonLeave = () => {
        setHoveredButton(null);
    };
    return (
        <div style={styles.heroTextContainer}>
            <h1 style={styles.headerText}>Welcome to Ribbow Tech co.</h1>
            <p style={styles.heroText}>We are your number one tech solution in Abuja cause we are second to non. 
            We have a team of dedicated staffs whose main goal is to deliver exceptional digital products and services 
             to our customers both within and outside abuja, We work remotely.</p>
            <div className="heroBtn" style={styles.heroBtn}>
                <button className='button' style={hoveredButton === 'contact' ? { ...styles.button, ...styles.hoveredButton } : styles.button} onClick={handleContactClick} onMouseEnter={() => handleButtonHover('contact')} onMouseLeave={handleButtonLeave}>    Contact Us </button>
                <button className='button' style={hoveredButton === 'bookMeeting' ? { ...styles.button, ...styles.hoveredButton } : styles.button} onClick={handleContactClick} onMouseEnter={() => handleButtonHover('bookMeeting')} onMouseLeave={handleButtonLeave}>  Book Meeting </button>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <div>
            <div style={styles.flexBox}>
                <HeroImg />
                <HeroText />
            </div>
            <br />
            <Footer />
        </div>
    );
};

const styles = {
    flexBox: {
        display: 'flex',
        alignItems: 'center', gap: '60px',
        justifyContent: 'space-between center',
        height: '100vh',
    },
    heroImg: {
        width: '550px',
        borderRadius: '15px',
    },
    heroTextContainer: {
        display: 'flex',
        flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', marginTop: '-25px',
    },
    headerText: {
        fontSize: '35px',
    },
    heroText: {
        fontSize: '15px',
        textAlign: 'center',
    },
    heroBtn: {
        display: 'flex',
        gap: '20px',
    },
    button: {
        padding: '10px 30px',
        fontSize: '1.2rem',
        fontWeight: 'semi-bold',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#784cfb',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        transition: 'background-color 0.3s ease',
    },
    hoveredButton: {
        backgroundColor: '#5b2eae',
    },
};

export default Hero;