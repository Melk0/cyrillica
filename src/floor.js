import React, { Component } from 'react';
import './body.css';
import './booking.css';
import './newpage.css';
import './floor.css';



class Floor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chairsCount: 15,
            lineCount: 7,
            buyed: [],
            changed: [],
            empty: [ 1,15,75,89,90],
            scene: [0],
            price1: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29, 30],
            price2: [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
            price3: [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
            price4: [76,77,78,79,80,81,82,83,84,85,86,87,88],
            price5: [91,92,93,94,95,96,97,98,99,100,101,102,103,104],

        }
    }
    changeChair = (chairId) => {
        console.log('Выбран стул ' + (chairId));

            if (this.state.buyed.indexOf(chairId) === -1) {
                if (this.state.empty.indexOf(chairId) === -1) {
                    if (this.state.changed.indexOf(chairId) === -1) {
                        if (this.state.scene.indexOf(chairId) === -1) {
                            if(this.state.changed.length<10) {
                            this.setState({
                                changed: [...this.state.changed, chairId]
                            })
                        }else {alert('Нельзя купить больше 10 мест')};}
                    } else {
                        this.setState({
                            changed: this.state.changed.filter((index) => index !== chairId)
                        })
                    }
                } else {
                    this.setState({
                        changed: this.state.changed.filter((index) => index !== chairId)
                    })
                }
            } else {
                alert('Место куплено');
            }

    };


    buyChairs = () => {
        this.setState({
            buyed: [...this.state.buyed,...this.state.changed],

        })
    };
    render() {
        let chairs = [];
        for (let i = 0; i < this.state.chairsCount * this.state.lineCount+1; i++) {
            chairs.push({
                isBuyed: this.state.buyed.indexOf(i) !== -1,
                isChanged: this.state.changed.indexOf(i) !== -1,
                isEmpty: this.state.empty.indexOf(i) !== -1,
                isScene: this.state.scene.indexOf(i) !== -1,
                isPrice1: this.state.price1.indexOf(i) !== -1,
                isPrice2: this.state.price2.indexOf(i) !== -1,
                isPrice3: this.state.price3.indexOf(i) !== -1,
                isPrice4: this.state.price4.indexOf(i) !== -1,
                isPrice5: this.state.price5.indexOf(i) !== -1,
            });

        }
        return (
            <div className="floor2">
                <div className="floor3">

                    <div id="booking_data">
                        21.02.2018, среда
                    </div>

                    <div id="place">
                        Выберите место в зале
                    </div>


                    <div className="floor">
                        {

                            chairs.map((chair, index) => {
                                    let statusClass =  chair.isChanged ? 'changed': chair.isBuyed ? 'buyed' : chair.isEmpty ? 'empty'
                                        : chair.isScene ? 'scene' : chair.isPrice1 ? 'price1' : chair.isPrice2 ? 'price2'
                                            : chair.isPrice3 ? 'price3' : chair.isPrice4 ? 'price4' :  'price5';
                                    return <div key={index} className={`chair ${statusClass}`} onClick={() => this.changeChair(index)}/>
                                }
                            )
                        }
                    </div>
                    <button onClick={this.buyChairs}>Забронировать</button>
                </div>
                <div id = "floor6">Выбрано мест: {this.state.changed.length}</div>
                <div id = "floor4">
                   {this.state.changed.map(function(i) {
                    let Row = (i) =>{
                        if (Math.floor(i / 15) + 1 > 1 )
                            if (Math.floor(i % 15) === 0 )
                                return(Math.floor(i / 15));
                            else return(Math.floor(i / 15) + 1);
                        else return(1)
                    };
                    let
                        Place =(i) => {
                            if (Math.floor(i / 15) + 1 > 1 )
                                if (Math.floor(i % 15) === 0 )
                                    return(15);
                                else return(Math.floor((i % 15)));
                            else return(Math.floor((i % 15) - 1))
                        };
                    return  (Row(i) + " ряд " + Place(i) + " место ")})}<br/>
                </div>
                <div id = "floor6">Выбрано мест: {this.state.changed.length, console.log(this.state.buyed.length)}</div>
                <div id = "floor5">Общая сумма:</div>
            </div>
        );
    }
}

export default Floor;
