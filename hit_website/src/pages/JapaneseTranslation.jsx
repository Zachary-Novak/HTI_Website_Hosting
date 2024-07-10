import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import Menu from '../components/Menu';

const JapaneseTranslation = () => {

  // ページの内容
  const pageTitle = 'ホーム';
  const pageDescription = 'React Bootstrap テンプレートへようこそ';
  const [show, setShow] = useState(true);

  const [modalText, setModalText] = useState('最初のタスク： “学生アンケート” セクションを見つける');

  const [hasClosedModal, setHasClosedModal] = useState(false);
  const [firstClickSuccess, setFirstClickSuccess] = useState(false);
  const [secondClickSuccess, setSecondClickSuccess] = useState(false);
  const [misclickCount, setMisclickCount]  = useState(0);
  const [time, setTime] = useState(0);

  const navigate = useNavigate();

  const handleClose = () => { 
    setShow(false); setHasClosedModal(true);
    if (time === 0) {
      setInterval(() => {setTime(time => time + 1)}, 1000);
    }
  };

  const handleFirstSuccess = () => {
    setModalText('最初の隠れたアンケートリンクを見つけました！次は "HTI アンケート" を見つけてください');
    setShow(true);
    setFirstClickSuccess(true);
  };

  const handleWrongClick = () => {
    setMisclickCount(currentCount => currentCount + 1);
    if (!secondClickSuccess) {
      setModalText("間違ったリンクです！もう一度試してください");
    } else {
      setModalText("タスクは既に終了しました！アンケートに進んでください");
    }
    setShow(true);
  }

  const handleSecondSuccess = () => {
    setModalText(`おめでとうございます、タスクを完了しました！アンケートに進んでください。\nミスクリック数:${misclickCount}`);
    setSecondClickSuccess(true);
    setShow(true);
  }

  let modalFooter = <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      開始
    </Button>
  </Modal.Footer>;

  if ((!firstClickSuccess && hasClosedModal) || (firstClickSuccess && !secondClickSuccess)) {
    modalFooter = <></>;
  } else if (secondClickSuccess) {
    modalFooter = <Modal.Footer>
      <Button variant="primary" onClick={() => navigate('/survey', { state: { time, count: misclickCount, siteVersion: "American (Japanese-translated)"} })}>
        アンケート
      </Button>
    </Modal.Footer>;
  }

  return (
    <div>
      <Menu />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>タスク</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalText}
        </Modal.Body>
        {modalFooter}
      </Modal>

      <div class="container">
        <div class="row">
          <div className="col-12 col-md-2">
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom: 20 }}>
              <Card.Body>
                <Card.Text style={{fontSize:12}}>
                  <div>
                    <strong>最新と最近</strong>
                    <div>最新の更新を見つける</div>
                    <strong>今日の人気</strong>
                  </div>
                  <div>今日の注目のショット</div>
                  <strong>フォロー中 <span style={{background:"orange", padding:3}}>24</span></strong>
                  <div>お気に入りの人から探索</div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom: 20 }}>
              <Card.Body>
                <Card.Title>人気のタグ</Card.Title>
                <Card.Text style={{fontSize:12}}>
                  {[["#コンピュータサイエンス", "82,645 投稿"], ["#アルバイト", "65,523 このタグで投稿"], ["#リサーチ", "#アンケート"], 
                    ["#プロジェクト", "48,029 投稿"], ["#スタートアップ", "1,300 投稿"], 
                  ].map(category => {
                    return <div onClick={handleWrongClick} className='hoverable'>
                      <strong>{category[0]}</strong>
                      <div style={{color:"gray"}}>{category[1]}</div>
                    </div>
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom: 20 }}>
              <Card.Body>
                <Card.Title>カテゴリー</Card.Title>
                <Card.Text style={{fontSize:12}}>
                  {[["クラスの推奨", "82,645 投稿", handleWrongClick], ["宿題の助け", "65,523 このタグで投稿", handleWrongClick], firstClickSuccess ? ["既に発見済み！", "0", handleWrongClick] : ["学生アンケート", "投稿", handleFirstSuccess], 
                    ["家庭教師の助け", "48,029 投稿", handleWrongClick], ["本の寄付", "100 投稿", handleWrongClick], 
                    ["寮", "11,000 投稿", handleWrongClick], ["アルバイト", "8,645 投稿", handleWrongClick], ["愚痴", "3,622 投稿", handleWrongClick]
                  ].map(category => {
                    return <div onClick={category[2]} className='hoverable'>
                      <strong>{category[0]}</strong>
                      <div style={{color:"gray"}}>{category[1]}</div>
                    </div>
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom: 20 }}>
              <img style={{cursor:"pointer", backgroundColor:'#ADD8E6', height:400, borderRadius:4}} src="/assets/images/screenshot_20240614_at_1629451.png" />
            </Card>
          </div>
          <div className="col-12 col-md-7">
            <Card style={{ padding: 20, marginBottom: 20, "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
              <InputGroup>
                <Form.Control
                  disabled={true}
                  placeholder={modalText}
                  aria-label={modalText}
                  aria-describedby="basic-addon2"
                />
                <Button variant="success" id="button-addon2">
                  ボタン
                </Button>
              </InputGroup>
            </Card>
            {[firstClickSuccess ? ["どのドーナツブランドが好きですか？", "ライフスタイル|スイーツ|推奨", handleWrongClick] : ["助けて！このアンケートに答えてください", "UI|UX|アンケート", handleWrongClick], 
              ["歓迎パーティーはどうでしたか？", "新入生|セミプロ|SILS", handleWrongClick], !firstClickSuccess ? ["KPOPに興味がある？！KPOPダンスサークルに参加してください", "KPOP|ダンス|サークル", handleSecondSuccess] : ["HTI アンケート", "UI|UX|アンケート", handleSecondSuccess], 
              ["家庭教師の助け", "48,029 投稿", handleWrongClick], ["本の寄付", "100 投稿", handleWrongClick], 
              ["寮", "11,000 投稿", handleWrongClick], ["アルバイト", "8,645 投稿", handleWrongClick], ["愚痴", "3,622 投稿", handleWrongClick]
            ].map((category, i) => {
              return <Card bg={i === 0 && !firstClickSuccess ? "warning" : ""} onClick={category[2]} style={{

 "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom: 20 }}>
                <Card.Body>
                  <Card.Title>{category[0]}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{category[1]}</Card.Subtitle>
                  <Card.Text>
                    空白のテキスト
                  </Card.Text>
                  <Button>クリック</Button>
                </Card.Body>
              </Card>
            })}
          </div>
          <div className="col-12 col-md-3">
            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom: 20 }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  <strong style={{ fontSize: 20 }}>
                    <img style={{backgroundColor:'#ADD8E6', borderRadius:4, margin:5}} src="/assets/images/hti_logo_4.png" />
                    早稲田コネクト！
                  </strong>
                  早稲田コネクトは、クラス「人間技術インターフェース」のグループ1によって作成された架空のフォーラムサイトで、ユーザーインタラクションのさまざまな側面を探求することを目的としています。現在、日本と西洋のUIデザインの違いに関する研究を実施しており、ランダムに割り当てられました。割り当てられたタスクを2つ完了し、最後にアンケートに回答してください。ご協力と貴重な洞察に感謝します。
                </Card.Text>
                <Button>クリック</Button>
              </Card.Body>
            </Card>
            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom: 20 }}>
              <img style={{cursor:"pointer", backgroundColor:'#ADD8E6', height:400, borderRadius:4}} src="/assets/images/screenshot_20240614_at_1639571.png" />
            </Card>
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom: 20 }}>
              <Card.Body>
                <Card.Title>早稲田のミートアップ</Card.Title>
                <Card.Text style={{fontSize:12}}>
                  {[["GDSC Figma ワークショップ", "新宿、東京"], ["コーヒーミートアップ", "渋谷、東京"], ["ICCバスケットボールトーナメント", "早稲田キャンパス、東京"], 
                    ["テックミートアップ", "新宿、東京"]
                  ].map(category => {
                    return <div onClick={handleWrongClick} className='hoverable'>
                      <strong>{category[0]}</strong>
                      <div style={{color:"gray"}}>{category[1]}</div>
                    </div>
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom: 20 }}>
              <img style={{cursor:"pointer", backgroundColor:'#ADD8E6', height:400, borderRadius:4}} src="/assets/images/image.png" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JapaneseTranslation;