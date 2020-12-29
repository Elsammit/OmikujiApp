import React, { Component } from 'react';
import Omikuji from './image/omikujiImg.png';
import Daikichi from './image/daikichi.png';
import Kichi from './image/kichi.png';
import Chukichi from './image/chukichi.png';
import Syokichi from './image/syokichi.png';
import Suekichi from './image/suekichi.png';
import Kyo from './image/kyo.png';
import "./App.css"

export default class Snow extends Component  {

    constructor (props) {
        super(props);
        this.state = {
            omikujiImg:"oImg",
            OmikujiResult:"",
        };
    }

    omikujiClick = () =>{
      this.setState({ omikujiImg: "omikuji" })
      setTimeout(this.test, 2000);
    }

    test = () => {
      this.setState({ omikujiImg: "oImg" })
      var rand = Math.floor(Math.random() * 11);
      var buf;
      switch(rand){
        case 0:
          buf = Daikichi;
          break;
        case 1:
        case 2:
          buf = Kichi;
          break;
        case 3:
        case 4:
          buf = Chukichi;
          break;
        case 5:
        case 6:
          buf = Syokichi;
          break;
        case 7:
        case 8:
          buf = Suekichi;
          break;
        case 9:
          buf = Kyo;
          break;
        default:
          buf = Kichi;
          break;
      }
      this.setState({ OmikujiResult: buf })
    }

    render() {
      const {omikujiImg} = this.state;
      const {OmikujiResult} = this.state;

      return (
        <div className="KujiMain">
          <div className="KujiTitle">
            <p>2021年 開運おみくじ</p>
          </div>
          <div className="KujiImg">
            <img className={omikujiImg} src={Omikuji} alt="omikuji" width="250px" height="318px" />
          </div>
          <div className="KujiButton">
          <a class="btn-gradient-3d-orange" onClick={this.omikujiClick} >click Here</a>
          </div>
          <div className="KujiResult">
            <img className="omikujiResult" src={OmikujiResult} height="500px"/>
          </div>
        </div>
      );
    }
  }