import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import Omikuji from './image/omikujiImg.png';
import Daikichi from './image/daikichi.png';
import Kichi from './image/kichi.png';
import Chukichi from './image/chukichi.png';
import Syokichi from './image/syokichi.png';
import Suekichi from './image/suekichi.png';
import Kyo from './image/kyo.png';

import Title from './image/omikujiTitle.png'
import kimononegai from './image/thumbnail_omairi_family_kimono.jpg';
import KaoDaikichi from './image/daikichi_kao.png';
import KaoDaikichiW from './image/daikichi_kao_w.png';
import KaoChukichi from './image/chukichi_kao.png';
import KaoChukichiW from './image/chukichi_kao.png';
import Kaokichi from './image/kichi_kao.png';
import KaokichiW from './image/kichi_kao_w.png';
import KaoSyokichi from './image/kichi_kao.png';
import KaoSyokichiW from './image/kichi_kao_w.png';
import KaoSuekichi from './image/suekichi_kao.png';
import KaoSuekichiW from './image/suekichi_kao_w.png';
import KaoKyo from './image/kyo_kao.png';
import KaoKyoW from './image/kyo_kao_w.png';

import "./App.css"

export default class Snow extends Component
 {

    constructor (props) {
        super(props);
        this.state = {
            omikujiImg:"oImg",
            OmikujiResult:"",
            KaoResult:"",
            WKaoResult:"",
        };
    }

    omikujiClick = () =>{
      this.setState({ omikujiImg: "omikuji" })
      setTimeout(this.GetOmikujiResult, 2000);
    }

    GetOmikujiResult = () => {
      this.setState({ omikujiImg: "oImg" });

      var rand = Math.floor(Math.random() * 11);
      var buf;
      var Kao;
      var WKao;
      switch(rand){
        case 0:
          buf = Daikichi;
          Kao = KaoDaikichi;
          WKao = KaoDaikichiW;
          break;
        case 1:
        case 2:
          buf = Kichi;
          Kao = Kaokichi;
          WKao = KaokichiW;
          break;
        case 3:
        case 4:
          buf = Chukichi;
          Kao = KaoChukichi;
          WKao = KaoChukichiW;
          break;
        case 5:
        case 6:
          buf = Syokichi;
          Kao = KaoSyokichi;
          WKao = KaoSyokichiW;
          break;
        case 7:
        case 8:
          buf = Suekichi;
          Kao = KaoSuekichi;
          WKao = KaoSuekichiW;
          break;
        case 9:
          buf = Kyo;
          Kao = KaoKyo;
          WKao = KaoKyoW;
          break;
        default:
          buf = Kichi;
          break;
      }
      this.setState({ OmikujiResult: buf });

      this.setState({ KaoResult: Kao });
      this.setState({ WKaoResult: WKao });
    }

    render() {
      const {omikujiImg} = this.state;
      const {OmikujiResult} = this.state;
      const {KaoResult} = this.state;
      const {WKaoResult} = this.state;

      const meta = {
        title: 'Elsammitのおみくじアプリ作成してみた',
        description: 'React初心者がおみくじアプリを作ってみました。2021年の運だめしにどうぞ！！',
        canonical: 'http://example.com/path/to/page',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'react,meta,document,html,tags'
          }
        }
      };

      return (
        <div className="background">
          <DocumentMeta {...meta}>
            <div className="KujiMain">
              <div className="KujiTitle">
                <img src={Title} height="300px"/>
              </div>
              <div className="Kujileft">
                <img src={kimononegai} height="380px"/>
                <img className="ResultImg" src={KaoResult} height="380px"/>
              </div>
              <div className="Kujihonbun">
                <div className="Kujicenter">
                  <div className="KujiImg">
                    <img className={omikujiImg} src={Omikuji} alt="omikuji" width="350px" height="445px" />
                  </div>
                  <div className="KujiButton">
                    <a class="btn-gradient-3d-orange" onClick={this.omikujiClick} >おみくじスタート</a>
                  </div>
                  <div className="KujiResult">
                    <img className="omikujiResult" src={OmikujiResult} height="500px"/>
                  </div>
                </div>
              </div>
              <div className="Kujiright">
                <img src={kimononegai} height="380px"/>
                <img className="ResultImg" src={WKaoResult} height="380px"/>
              </div>
            </div>
          </DocumentMeta>
        </div>
      );
    }
  }