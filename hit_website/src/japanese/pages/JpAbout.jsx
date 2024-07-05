import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import beerImage from '../assets/beer.png';
import babyImage from '../assets/baby.png';
import jamImage from '../assets/jam.png';
import yamaImage from '../assets/yama.png';
import Menu from '../Menu';
import { useLocation, useNavigate } from 'react-router-dom';

const JpAbout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [misclickCount, setMisclickCount] = useState(0);

  useEffect(() => {
    // Check if state exists and has a count property
    if (location.state && location.state.count !== undefined) {
      setMisclickCount(location.state.count);
    }
  }, [location]);

  useEffect(() => {
    // Run on initial render
    alert("タスク２：「日本のウエブサイトのレイアウトについて（HTI）のアンケート」を見つけてください！")
  }, []);

  const handleMisclick = () => {
    setMisclickCount(prevCount => prevCount + 1);
    alert(`ミス数: ${misclickCount + 1}`);

};

  const pageTitle = 'About';
  const pageDescription = 'welcome to react bootstrap template';

  const sidebarLinks = [
    'ショッピング', 'ニュース', 'マップ', '天気', '災害', 'ファション', '番組', 'ボクシング',
    '旅行', 'ドラマ', 'ガチャ', 'ファイナンス', 'ゲーム', 'アンケート', '掲示板', '天気',
    '知恵袋', '占い', 'カレンダー', '宝くじ', 'オークション', '海外ニュース', '音楽', '映画',
    '漫画', 'アニメ'
  ];

  const categories = [
    { title: '社会問題・意識調査', items: ['環境保護に対する意識と行動に関するアンケート', 'ジェンダー平等に対する意識と経験についてのアンケート', '人種差別と多様性に関する意識アンケート'] },
    { title: 'エンターテイメント', items: ['好きな映画のジャンルとその理由に関するアンケート', '音楽の聴取習慣と好みのアーティストに関するアンケート', 'ゲームのプレイ頻度と好みのジャンルについてのアンケート', '趣味・特技の種類とその継続期間に関するアンケート', 'テレビ番組の視聴習慣と好みの番組についてのアンケート'] },
    { title: 'テクノロジー', items: ['スマートフォンの使用頻度と最も利用するアプリアンケート', 'サイバーセキュリティの意識と対策についてのアンケート', '日本のウエブサイトのレイアウトについて（HTI）のアンケート'] },
    { title: '旅行・レジャー', items: ['最近の旅行の計画と実行状況についてのアンケート', '旅行先での観光地の満足度とおすすめポイントに関するアンケート', '旅行にかける予算と実際の支出に関するアンケート'] },
    { title: '人間関係', items: ['友人関係の維持方法とその満足度に関するアンケート', '家族との関係性とコミュニケーション方法に関するアンケート', '恋愛・結婚に関する意識と経験についてのアンケート'] },
    { title: 'パーソナルデベロップメント', items: ['自己啓発のための活動とその効果についてのアンケート', 'モチベーションの維持方法とその成功体験に関するアンケート', '効果的なタイムマネジメント方法に関するアンケート'] }
  ];

  const adImages = [babyImage, jamImage, yamaImage];

  return (
    <Container>
            <Menu/>

      <Row>
        <Col xs={2}>
          <Card style={{marginTop: 20}}>
            <Card.Body>
              {sidebarLinks.map((link, index) => (
                <li onClick={handleMisclick} key={index} style={{listStyleImage: '🌐 ', marginBottom: 20}}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col xs={8}>
          <Card style={{marginTop: 20}}>
            <Card.Body>
              <Row>
                <Col sm={12} style={{backgroundColor: '#9EB4DB', padding: 20}}>
                  {['主要', '経済', 'スポーツ', '科学'].map((text, index) => (
                    <Button onClick={handleMisclick} key={index} style={{marginRight: 20}} variant="light">{text}</Button>
                  ))}
                </Col>
              </Row>

              <Row style={{marginTop: 20}}>
                {categories.map((category, index) => (
                  <React.Fragment key={index}>
                    <li onClick={handleMisclick} ><a href="#">{category.title}</a></li>
                    <ol style={{listStyleType: 'lower-alpha', marginLeft: 50}}>
                      {category.items.map((item, itemIndex) => (
                        <li onClick={!item.includes("HTI") ? handleMisclick: ()=>{
                          alert("おめでとうございます！")
                          navigate('/survey', { state: { count: misclickCount, siteVersion:"Japanese"} }) 
                        }}  key={itemIndex}><a href="#">{item}</a></li>
                      ))}
                    </ol>
                  </React.Fragment>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={2}>
          <Card style={{marginTop: 20}}>
            <Card.Body>
              {adImages.map((image, index) => (
                <img onClick={handleMisclick} key={index} style={{width: 160, height: 250, marginTop: 20}} src={image} alt={`Ad ${index + 1}`} />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JpAbout;