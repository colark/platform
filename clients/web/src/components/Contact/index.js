import React from 'react';
import BasicPage from '../BasicPage'

export default class Contact extends React.Component {
    render() {
        return (
            <BasicPage
            backgroundGradient="linear-gradient(180deg, #5C6DFF 0%, #FFFFFF 73.73%)"
            topMazeSrc="/assets/home-maze.svg"
            teamMazeBottom="none"
            navBackgroundColor="transparent"
            >
            <div className="contact-form__container">
                {/* <div className="contact-form__image--container">
                    <img className="contact-form__image" src="https://res.cloudinary.com/colark/image/upload/c_crop,h_490,w_1034/v1542324928/Colark%20Marketing%20Site/user.png" />
                    <h4 className="contact-form__input--title">Sign up with one of the following</h4>
                </div> */}
                <div className="contact-form__input--container">
                    <div>
                        <div>
                            <h4 className="contact-form__input--title">First Name</h4>
                            <input type="name" name="name" className="contact-form__input--name" placeholder="Jenny" required />
                            <hr className="contact-form__line"></hr>
                        </div>
                        <div>
                            <h4 className="contact-form__input--title">Last Name</h4>
                            <input type="name" name="name" className="contact-form__input--name" placeholder="Appleseed" required />
                            <hr className="contact-form__line"></hr>
                        </div>
                        <div>
                            <h4 className="contact-form__input--title">Email</h4>
                            <input type="email" name="email" className="contact-form__input--email" placeholder="jennyappleseed@gmail.com" required />
                            <hr className="contact-form__line"></hr>
                            <button className="contact-form__button">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            </BasicPage>
        );
    }
} 