import React from "react";
import '../styles/index.scss';

const Button = () => {
    return (
        <div className="parent">
            <div className="title"> STOCK MANAGEMENT SYSTEM</div>
            <div className="inputField">
                <input type="text" id="name" placeholder="Enter your product name here!" />
                <input type="text" id="price" placeholder="Enter your price here!" />
                <button id="button">Create</button>
            </div>
            <div className="fieldTitle">
                <div id="nameField">Name</div>
                <div id="priceField">Price</div>
                <div id="actionField">Action</div>
            </div>
            <div className="info">
            <input type="checkbox" id="chk"/>
                <div id="info">iPhone7</div>
                <div id="info1">$400</div>
                <button id="action">Delete</button>
            </div>
            <hr></hr>
            <div className="info">
            <input type="checkbox" id="chk"/>
            <div id="info">iPhone5</div>
                <div id="info1">$300</div>
                <button id="action">Delete</button>
            </div>
            <hr></hr>
            <div className="info">
            <input type="checkbox" id="chk"/>
            <div id="info">iPhonex</div>
                <div id="info1">$1200</div>
                <button id="action">Delete</button>
            </div>
            <hr></hr>
            <div className="info">
            <input type="checkbox" id="chk"/>
            <div id="info">iPhone8 plus</div>
                <div id="info1">$800</div>
                <button id="action">Delete</button>
            </div>
            <hr></hr>


        </div>
    )
}

export default Button;