import './body.css';
import './booking.css';
import './newpage.css';
import './floor.css';
import Floor from './floor.js';
import React, {Component} from 'react';
import {render} from 'react-dom';

function parseUrl() {
    if (!window.location.search) return;
    const url = window.location.search.match(/\?(.+)/)[1].split('&');
    let res = {};
    url.forEach((entry) => {
        res[entry.split('=')[0]] = entry.split('=')[1];
    });
    return res;
}
let id = parseUrl()['id'];


class Booking extends Component {
    constructor(props) {
        super(props);

    };

    render() {

        return (
            <div>
                <div class="body">
                    <div id="head">
                    </div>
                    <div id="body_booking">
                        <div id="booking_left">
                            <div>20:00</div>
                            <div>"Билли Бадд"</div>
                            <div>Зал "Филармония"</div>
                            <div className={`chair.price1`}></div>
                        </div>
                        <div id="booking_center">
                            <div id="floor1">
                            </div>
                        </div>
                    </div>
                    <div id = "footer"></div>
                </div>
                <div id="buttons">
                    <a class="backnew" href="index.html"><img class="back"
                                                              src='./img/no-translate-detected_318-140060.jpg'
                                                              alt="back"/> Назад</a>
                    <a class="closenew" href="index.html"><img class="back"
                                                              src='../img/no-translate-detected_318-140070.jpg'
                                                              alt="close"/></a>
                </div>

            </div>
        );
    }
};



export default Booking;




