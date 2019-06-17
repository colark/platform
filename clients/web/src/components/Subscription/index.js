import React from "react";

export default function Subscription(props) {
  return (
    <div className="subscription">
      <div className="subscription__header">Get in touch</div>
      <div className="subscription__container">
        <div className="subscription__input">
          <input
            type="email"
            name="email"
            className="subscription__email"
            placeholder="email@address.com"
            required
          />
        </div>
        <button className="subscription__button">DONE</button>
      </div>
    </div>
  );
}
