import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact-form__container">
                <div className="contact-form__image--container">
                    <img className="contact-form__image" src="https://res.cloudinary.com/colark/image/upload/v1537563258/Colark%20Marketing%20Site/Illustration_1.png" />
                </div>
                <div className="contact-form__input--container">
                    <h1 className="contact-form__input--header">Get in touch</h1>
                    <div>
                        <div>
                            <input type="name" name="name" className="contact-form__input--name" placeholder="Name" required />
                        </div>
                        <div>
                            <input type="email" name="email" className="contact-form__input--email" placeholder="Email" required />
                        </div>
                        <div>
                            <textarea name="text" className="contact-form__input--message" placeholder="Message" required />
                        </div>
                        <button className="contact-form__button">Send</button>
                    </div>
                </div>
            </div>
        );
    }
} 