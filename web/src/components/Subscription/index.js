import React from 'react';

export default function Subscribe(props) {
    return (
        <div className="subscription">
            <div className="subscription__header">Subscribe to our Newsletter</div>
            <div className="subscription__input">
                <input type="email" name="email" className="subscription__email" placeholder="Enter your Email to subscribe" required></input>
                <button className="subscription__button">Submit</button>
            </div>
        </div>
    );
} 