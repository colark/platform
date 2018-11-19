import React from 'react';

export default function Subscribe(props) {
    return (
        <div className="subscription">
            <div className="subscription__header">Subscribe to our News</div>
            <div className="subscription__container">
                <div className="subscription__input">
                    <input type="email" name="email" className="subscription__email" placeholder="Enter your Email to subscribe" required></input>
                </div>
                <button className="subscription__button">DONE</button>
            </div>
        </div>
    );
} 