import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import posthog from 'posthog-js'
import img1 from "../assets/image_13.png";
import img2 from "../assets/image_10.png";
import img3 from "../assets/image_11.png";
import img4 from "../assets/image_14.png";
import img5 from "../assets/image_12.png";
import stonkImg from "../assets/stonk.png";
import radImg from "../assets/rad.png";
import yamaImg from "../assets/yama.png";
import Menu from '../Menu';
import { useNavigate } from "react-router-dom";


const JpHome = () => {
  

  const navigate = useNavigate();

  const [misclickCount, setMisclickCount] = useState(0);
  const [time, setTime] = useState(0);

  const handleMisclick = () => {
    setMisclickCount(prevCount => prevCount + 1);
    alert(`ミス数: ${misclickCount + 1}, time: ${time}`);
  
};
  const links = [
    { text: "ショッピング", href: "javascript:void(0)" }, { text: "ニュース", href: "javascript:void(0)" }, 
    { text: "マップ", href: "javascript:void(0)" }, { text: "天気", href: "javascript:void(0)" }, 
    { text: "災害", href: "javascript:void(0)" }, { text: "ファション", href: "javascript:void(0)" }, 
    { text: "番組", href: "javascript:void(0)" }, { text: "ボクシング", href: "javascript:void(0)" }, 
    { text: "旅行", href: "javascript:void(0)" }, { text: "ドラマ", href: "javascript:void(0)" }, 
    { text: "ガチャ", href: "javascript:void(0)" }, { text: "ファイナンス", href: "javascript:void(0)" }, 
    { text: "ゲーム", href: "javascript:void(0)" }, { text: "アンケート", href: "javascript:void(0)" }, 
    { text: "掲示板", href: "javascript:void(0)" }, { text: "天気", href: "javascript:void(0)" },
    { text: "知恵袋", href: "javascript:void(0)" }, { text: "占い", href: "javascript:void(0)" }, 
    { text: "カレンダー", href: "javascript:void(0)" }, { text: "宝くじ", href: "javascript:void(0)" }, 
    { text: "オークション", href: "javascript:void(0)" }, { text: "海外ニュース", href: "javascript:void(0)" }, 
    { text: "音楽", href: "javascript:void(0)" }, { text: "映画", href: "javascript:void(0)" }, 
    { text: "漫画", href: "javascript:void(0)" }, { text: "アニメ", href: "javascript:void(0)" }
  ];

  const newsItems = [
    "G7声明 伊が「中絶」の明記を拒否する可能性", 
    "能登地震 医療チームを門前払いもあるという",
    "マルチ商法の問題点と甘すぎる規制の状況について", 
    "五輪観戦ツアー400万円 ほとんど完売状態になる", 
    "ラーメン経営難 チェーン2社の勢いが増している", 
    "子から父のことを聞かれたら 母恐怖を感じる", 
    "緊急降板の由伸 明らかだった異変の理由とは", 
    "時空がゆがむサザエさん 大谷の回も含めての話", 
    "企業の不祥事 弁護士はコンサル化が進んでいる", 
    "ラーメン経営難 チェーン2社の勢いが増している", 
    "100%オレンジ飲料の市場が縮小へ向かっている", 
    "アメ横 飲食店の7割が外国人経営者である現状", 
    "山田うどん 健康ブームになぜ逆行するのか不明", 
    "自転車の中学生が車と衝突し重体になる事件"
  ];

  const events = [
    { img: img1, title: "先輩から新入生へのアドバイス！新しい出会いを始める会！4/3午後12:20参加費無料！", description: "せんぱいぐるーぷ" },
    { img: img2, title: "KPOPに興味ある！？サークルに参加！初心者大歓迎！！参加費無料！4/3午後12:20参加費無料！", description: "キムチダンスサークル" },
    { img: img3, title: "ボランティア活動募集中・未経験OK！", description: "世界の始まりNPO" },
    { img: img4, title: "UI・UXワークショップ報告・参加費無料！", description: "テクテク株式インターネット技術会社" },
    { img: img5, title: "助けて！食にアンケートを答えてください！", description: "ナットウ発酵株式会社" }
  ];


  useEffect(() => {
    // Run on initial render
    confirm("最初のタスク：アンケートの場所を見つけてください！")
    setInterval(()=>{setTime(time=>time+1)},1000)
  }, []);



  return (
    <div>
      <Menu/>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Card style={{ marginTop: 20 }}>
              <Card.Body>
                <ul>
                  {links.map((link, index) => (
                   
                    <li key={index} style={{ marginBottom: 20 }} onClick={link.text !== "アンケート" ? handleMisclick: ()=>{
                      navigate('/jpabout', { state: { time,count: misclickCount} });
                    }}><a  href="javascript:void(0)" >{link.text}</a></li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </div>
          <div className="col-8">
            <Card style={{ marginTop: 20 }}>
              <Card.Body>
                <div className="row">
                  <div style={{ backgroundColor: 'javascript:void(0)9EB4DB', padding: 20 }} className="col-sm-12">
                    {["主要", "経済", "スポーツ", "科学"].map((category, index) => (
                      <Button　onClick={handleMisclick}　 key={index} style={{ marginRight: 20 }} variant="light">{category}</Button>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 20 }} className="row">
                  <ul>
                    {newsItems.map((item, index) => (
                      <li onClick={handleMisclick} key={index}><a href="javascript:void(0)">{item}</a></li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>

            <Card style={{ marginTop: 20 }}>
              <Card.Body>
                {events.map((event, index) => (
                  <div key={index} style={{ marginBottom: 15 }} className="row">
                    <div className="col-3">
                      <Card>
                        <Card.Body>
                          <img onClick={handleMisclick} style={{ width: 150, height: 150 }} src={event.img} alt={`img${index + 1}`} />
                        </Card.Body>
                      </Card>
                    </div>
                    <div className="col-9">
                      <Card>
                        <Card.Body onClick={handleMisclick}>
                          <a href="javascript:void(0)" style={{ fontSize: 20 }}>{event.title}</a>
                          <p style={{ color: 'javascript:void(0)828282', fontSize: 20, marginTop: 15 }}>{event.description}</p>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </div>

          <div style={{ marginTop: 20 }} className="col-2">
            <Card onClick={handleMisclick}>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="ユーザー名" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="パスワード" />
                  </Form.Group>
                </Form>
                <Button variant="dark">ロッグイン</Button>

                {[stonkImg, radImg, yamaImg].map((image, index) => (
                  <img key={index} style={{ width: 160, height: 250, marginTop: 20 }} src={image} alt={`img${index + 6}`} />
                ))}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JpHome;