import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import StrydesWord from './img/StrydesLogoWord.png'
import SpeechBubbles from './img/speech-bubbles.png'
import Peoples from './img/collaboration.png'
import Rocket from './img/shuttle.png'

function PriorHome() {

    useEffect(() => {
        Aos.init({ duration: 1500, once: true, offset: -275, delay: 400 })
    }, [])
    
    return (
        <div>
            <div class="bg-cover largeImage">
                <div class="jumbotron jumbotron-fluid">
                            <div class="mt-4 container text-left">
                                <h1 class="biggerText display-4">Take Your First</h1>
                                <h1 class="biggerText display-4">Step With</h1>
                                <h1 class="biggerText display-4">A <i>Stryde</i></h1>
                            </div>
                    </div>
            </div>
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,213.3C384,181,480,139,576,128C672,117,768,139,864,170.7C960,203,1056,245,1152,256C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div class="d-flex justify-content-around boxes container">
                    <div class="card cardWidth shadow-lg" style={{borderRadius: '25px'}} data-aos="fade-right">
                        <div class="card-body text-center d-flex flex-column justify-content-center">
                                <img src={SpeechBubbles} style={{height: '70%', width: '85%'}}/>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card cardWidth shadow-lg" style={{borderRadius: '25px'}} data-aos="fade-up">
                        <div class="card-body text-center d-flex flex-column justify-content-center">
                            <img src={Peoples} style={{height: '70%', width: '85%'}}/>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card cardWidth shadow-lg" style={{borderRadius: '25px'}} data-aos="fade-left">
                        <div class="card-body text-center d-flex flex-column justify-content-center">
                            <img src={Rocket} style={{height: '70%', width: '85%'}}/>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <main class="container2">
                        <section class="cardFr card-1">
                            <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt=""/>
                                <div>
                                    <h3 class="text-center">Create Blueprints</h3>
                                    <p class="cardText text-center">
                                      Lorem ipsum dolor sit amet. Si yo quiero.
                                    </p>
                                </div>
                        </section>
                        <section data-aos="fade-right" class="cardFr">
                            <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt=""/>
                                <div>
                                    <h3 class="text-center">Create Blueprints</h3>
                                    <p class="cardText text-center">
                                    Lorem ipsum dolor sit amet. Si yo quiero.
                                    </p>
                                </div>
                        </section>
                        <section data-aos="fade-left" class="cardFr">
                            <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt=""/>
                                <div>
                                    <h3 class="text-center">Create Blueprints</h3>
                                    <p class="cardText text-center">
                                    Lorem ipsum dolor sit amet. Si yo quiero.
                                    </p>
                                </div>
                        </section>
                        <section data-aos="fade-right" class="cardFr card-last">
                            <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt=""/>
                                <div>
                                    <h3 class="text-center">Create Blueprints</h3>
                                    <p class="cardText text-center">
                                        Lorem ipsum dolor sit amet. Si yo quiero.
                                    </p>
                                </div>
                        </section>
                </main>
                <footer>
                    <div class="container-fluid padding w-75" style={{paddingTop: '85px'}}>
                        <div class="row text-center">
                            <div class="col-md-4">
                                <img src={StrydesWord} height="12%" class="wordLogo"/>
                                <p class="footerElementPadding">555-555-5555</p>
                                <p class="footerElementPadding">email@myemail.com</p>
                                <p class="footerElementPadding">100 Street Name</p>
                                <p class="footerElementPadding">City, State, 92130</p>
                            </div>
                            <div class="col-md-4">
                                <h3>Company</h3>
                                <p class="footerElementPadding">FAQ</p>
                                <p class="footerElementPadding">About</p>
                            </div>
                            <div class="col-md-4">
                                <h3>Legal</h3>
                                <p class="footerElementPadding">Terms of Service</p>
                                <p class="footerElementPadding">Privacy Policy</p>
                            </div>
                            <div class="col-12">
                                <hr class="light-100"/>
                                <h5>&copy;STRYDES 2020</h5>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    )
}

export default PriorHome
