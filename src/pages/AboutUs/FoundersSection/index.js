import React from "react";
import './style.css';

function FoundersSection() {
    return (
        <div className="founderSection_container">
            <h1 className="section_title">
                <span className="text-primary">Message From The </span> Founders
            </h1>
            <div className="main_container">
                <div className="profile_card">
                    <div className="profile_photo-wrapper">
                        <img
                            className="profile_photo"
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                            alt="Shamodha Shahan"
                        />
                    </div>
                    <div className="profile_info">
                        <h2 className="profile_name">MR. Shamodha Shahan</h2>
                        <p className="profile_title">CEO, Octal Technologies</p>
                         
                        <div className="profile_link">
                            <a href="#">View Profile</a>
                        </div>
                    </div>
                </div>
                <div className="profile_card">
                    <div className="profile_photo-wrapper">
                        <img
                            className="profile_photo"
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                            alt="Isuru Prabath"
                        />
                    </div>
                    <div className="profile_info">
                        <h2 className="profile_name">MR. Isuru Prabath</h2>
                        <p className="profile_title">COO, Octal Technologies</p>
                         
                        <div className="profile_link">
                            <a href="#">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoundersSection;
