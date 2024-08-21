import React from "react"
import './style.css';
import expertiseImage from '../../../assets/aboutUsPageImages/1.png'
import commitmentImage from '../../../assets/aboutUsPageImages/2.png'
import customization from '../../../assets/aboutUsPageImages/3.png'
import supportImage from '../../../assets/aboutUsPageImages/4.png'

function ChooseUsSection() {

    return (
        <div className="ChooseUs_container">
            <h1 className="section_title">
                <span className="text-primary">Why</span>  Choose Us
            </h1>
            <div class="grid-container">
                <div class="grid-item">
                    <div className="cards-container">
                        <img className="image" src={expertiseImage} alt="Expertise" />

                        <div className="card-info">
                            <div className="card-title">Expertise</div>
                            <p className="card-description">
                                Our team consists of highly skilled professionals
                                with a passion for technology and innovation.
                            </p>
                        </div>

                    </div>
                </div>
                <div class="grid-item">
                    <div className="cards-container">
                        <img className="image" src={commitmentImage} alt="Commitment" />
                        <div className="card-info">
                            <div className="card-title">Commitment</div>
                            <p className="card-description">
                                Our commitment is to provide exceptional quality results that surpass our clients' expectations.
                            </p>
                        </div>

                    </div>
                </div><div class="grid-item">
                    <div className="cards-container">
                        <img className="image" src={customization} alt="Customization" />
                        <div className="card-info">
                            <div className="card-title">Customization</div>
                            <p className="card-description">
                                We provide personalized solutions tailored to your specific business needs and objectives.
                            </p>
                        </div>

                    </div>
                </div><div class="grid-item">
                    <div className="cards-container">
                        <img className="image" src={supportImage} alt="Support" />
                        <div className="card-info">
                            <div className="card-title">Support</div>
                            <p className="card-description">
                                We offer continuous support and maintenance to ensure the longevity and success of your projects.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default ChooseUsSection