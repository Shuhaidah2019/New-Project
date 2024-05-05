import React from 'react'
import Footer from './Footer';
import sd from "./images/sd.jpg.jpg";
import sd2 from "./images/sd2.jpg.jpg";
import md from "./images/md.jpg.jpg";
import ray from "./images/ray.jpg.jpg";


const Testimonials = () => {
    return (
        <div>
            <br /><br />
            <h1 style={styles.headerText}>Testimonials</h1>
            <hr style={styles.hr} />
            <p style={styles.heroText}>Here's what some of the people that worked with us have to say about us:</p>
            <br /><br />
            <div className="testimonials" style={styles.testimonials}>
                <div className="testimonial" style={styles.testimonial}>
                    <img style={styles.tImg} alt="" src={sd} />
                     <p style={styles.tText}>Ribbow's school for tech and digital services offered an excellent service
                     for our project which is beyond our imagination.
                        <br />
                        <span style={styles.tSpan}>Abubakar Inuwa,</span>
                        <br />
                        <span style={styles.tLight}>
                            CEO at MNET. programming Abuja.
                        </span>
                    </p>
                </div>
                <div className="testimonial" style={styles.testimonial}>
                    <img style={styles.tImg} alt="" src={sd2} />
                    <p style={styles.tText}> We enjoyed working with Ribbow school for Tech! it was a great 
                    experience for us and for our team development.
                        <br />
                        <span style={styles.tSpan}>Sadeeq Garba,</span>
                        <br />
                        <span style={styles.tLight}>
                       CEO at Sadeeq enterprises..
                        </span>
                    </p>
                </div>
                <div className="testimonial" style={styles.testimonial}>
                    <img style={styles.tImg} alt="" src={md} />
                    <p style={styles.tText}>Choosing Ribbow for our web solutions was one of the best decisions we made! 
                    Their attention to detail and timely delivery were impressive.
                        <br />
                        <span style={styles.tSpan}>Mr and Mrs Yakubu Aliyu,</span>
                        <br />
                        <span style={styles.tLight}>
                        Founders Abuja school for Tech.
                        </span>
                    </p>
                </div>
                <div className="testimonial" style={styles.testimonial}>
                    <img style={styles.tImg} alt="" src={ray} />
                    <p style={styles.tText}>Ribbow's team provided excellent support throughout the development process!
                     Their expertise and professionalism were second to none.
                        <br />
                        <span style={styles.tSpan}>Rayhana Idris,</span>
                        <br />
                        <span style={styles.tLight}>
                        MD at school for Science and Technology
                        </span>
                    </p>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    )
}


const styles = {
    headerText: {
        fontSize: '35px',
    },

    hr: {
        width: '80px',
        background: 'linear-gradient(to right, #784cfb, pink)',
        border: 'none',
        height: '5px',
        borderRadius: '20px',
        marginTop: '-20px',
    },
    testimonials: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '30px',
        height: '100vh',
    },
    testimonial: {
        // width: 'calc(45.33% - 10px)',
        width: '510px',
        borderRadius: '15px',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(50px)',
        padding: '7px 20px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'start',
        fontSize: '15px',
    },
    tImg: {
        width: '100px',
        height: '100px',
        borderRadius: '100%',
        marginRight: '30px',
    },
    tText: {
        fontWeight: '280',
    },
    tSpan: {
        fontWeight: 'bold',
        letterSpacing: '2px',
    },
    tLight: {
        fontWeight: '400',
        letterSpacing: '2px',
        color: 'white',
    },
}

export default Testimonials;