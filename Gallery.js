import React from 'react';
import Footer from './Footer';
import image1 from "./Gallery/img1.jpg.jpg";
import image2 from "./Gallery/image2.jpg.jpg";
import image3 from "./Gallery/image3.jpg.jpg";
import img5 from "./Gallery/img5.jpg";
import img6 from "./Gallery/img6.jpg";
import img7 from "./Gallery/img7.jpg";

const Gallery = () => {
    return (
        <div>
            <br />
            <h1 style={styles.headerText}>Our fantastic works</h1>
            <hr style={styles.hr} />
            <br /><br />
            <div className="gallery" style={styles.gallery}>
                <img className="picture" style={styles.picture} alt="" src={image1} />
                <img className="picture" style={styles.picture} alt=""  src={image2} />
                <img className="picture" style={styles.picture} alt="" src={image3} />
                <img className="picture" style={styles.picture} alt="" src={img5} />
                <img className="picture" style={styles.picture}  alt="" src={img6} />
                <img className="picture" style={styles.picture} alt="" src={img7} />
            </div>
            <br />
            <Footer />
        </div>
    );
};

const styles = {
    headerText: {
        fontSize: '35px',
    },

    hr: {
        width: '80px',
        background: 'linear-gradient(to right, #784cfb, pink)',
        border: 'none',
        height: '5px',
        marginTop: '-20px',
    },
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    picture: {
        width: '27vw',
        margin: '5px',
        borderRadius: '10px',
    },
};

export default Gallery;