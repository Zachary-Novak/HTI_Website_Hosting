import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import Menu from '../components/Menu';


const JapaneseTranslation = () => {

  const pageTitle = 'ホーム'
  const pageDescription = 'React Bootstrapテンプレートへようこそ'
  const [show, setShow] = useState(true);

  const [modalText, setModalText] = useState('最初のタスク： "学生アンケート" セクションを探す');

  const [hasClosedModal, setHasClosedModal] = useState(false);
  const [firstClickSuccess, setFirstClickSuccess] = useState(false)
  const [secondClickSuccess, setSecondClickSuccess] = useState(false)
  const [misclickCount, setMisclickCount]  = useState(0)
  const [time, setTime] = useState(0);

  const navigate = useNavigate();

  const handleClose = () => { 
    setShow(false); setHasClosedModal(true)
    if (time === 0) {
      setInterval(()=>{setTime(time=>time+1)},1000)
    }
   };
  const handleFirstSuccess = () => {
    setModalText('最初のアンケートリンクを見つけました！次のタスク："HTIアンケート" を探す')
    setShow(true)
    setFirstClickSuccess(true)
  };
  const handleWrongClick = () => {
    setMisclickCount(currentCount=>currentCount+1)

    if (!secondClickSuccess){
    setModalText("間違ったリンク！再試行してください")
    } else {
      setModalText("既にタスクを完了しました！アンケートに進んでください")
    }
    
    setShow(true)
  }

  const handleSecondSuccess = () => {
    setModalText(`おめでとうございます！タスクを完了しました！アンケートはこちら。\nミスクリック回数:${misclickCount}`)
    setSecondClickSuccess(true)
    setShow(true)
  }

  let modalFooter = <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    開始
  </Button>
</Modal.Footer>

  if ((!firstClickSuccess && hasClosedModal) || firstClickSuccess && !secondClickSuccess) {
    modalFooter = <></>
  } else if (secondClickSuccess){
    modalFooter = <Modal.Footer>
      <Button variant="primary" onClick={()=>   navigate('/survey', { state: { time, count: misclickCount, siteVersion: "American (Japanese-translated)"} })
      }>アンケート</Button>
    </Modal.Footer>
  }

  return (
    <div>
      <Menu/>

      <Modal
        show={show}
        onHide={handleClose}
      >
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
            
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                
                <Card.Text style={{fontSize:12}}>
                  <div>
                    <strong>最新・最近の投稿</strong>
                    <div>最新の更新を探す</div>
                    <strong>今日の人気</strong>
                  </div>
                  <div>キュレーターのおすすめを表示</div>
                  <strong>フォロー中 <span style={{background:"orange", padding:3}}>24</span></strong>
                  <div>お気に入りの人から探す</div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>人気のタグ</Card.Title>
                <Card.Text style={{fontSize:12}}>
                  {[["#コンピュータサイエンス", "82,645 投稿"], ["#アルバイト", "65,523 投稿"], ["#リサーチ", "#アンケート"], 
                  ["#プロジェクト", "48,029 投稿"], ["#スタートアップ", "1,300 投稿"]
                  ].map(category => {
                    return <div onClick={handleWrongClick} className='hoverable'>
                      <strong>{category[0]}</strong>
                      <div style={{color:"gray"}}>{category[1]}</div>
                    </div>
                  }
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>カテゴリ</Card.Title>
                <Card.Text style={{fontSize:12}}>
                  {[["クラスのおすすめ", "82,645 投稿", handleWrongClick], ["宿題ヘルプ", "65,523 投稿", handleWrongClick], firstClickSuccess ? ["既に見つけました！", "0", handleWrongClick] : ["学生アンケート", "投稿", handleFirstSuccess], 
                  ["家庭教師のヘルプ", "48,029 投稿", handleWrongClick], ["本の寄付", "100 投稿", handleWrongClick], 
                  ["寮", "11,000 投稿", handleWrongClick],["パートタイム", "8,645 投稿", handleWrongClick],["こぼれ話", "3,622 投稿", handleWrongClick]].map(category => {
                    return <div onClick={category[2]} className='hoverable'>
                      <strong>{category[0]}</strong>
                      <div style={{color:"gray"}}>{category[1]}</div>
                    </div>
                  }
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <img style={{cursor:"pointer" ,backgroundColor:'#ADD8E6', height:400, borderRadius:4}} src="/assets/images/screenshot_20240614_at_1629451.png" />
            </Card>
          </div>
          <div className="col-12 col-md-7">
            <Card style={{ "padding":20, marginBottom:20, "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
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
            {(firstClickSuccess &&
              ([firstClickSuccess ? ["どのドーナツブランドが好きですか？", "ライフスタイル | お菓子 | おすすめ",  handleWrongClick] : ["助けて！このアンケートに答えてください", "UI|UX|アンケート",  handleWrongClick], ["歓迎パーティーはどうでしたか？", "新入生 | センプロ | SILS", handleWrongClick], !firstClickSuccess ? ["KPOPが好きですか？KPOPダンスサークルに参加してください", "KPOP|ダンス|サークル", handleSecondSuccess] : ["HTIアンケート", "UI | UX | アンケート",  handleSecondSuccess], 
              ["家庭教師のヘルプ", "48,029 投稿", handleWrongClick], ["本の寄付", "100 投稿", handleWrongClick], 
              ["寮", "11,000 投稿", handleWrongClick],["パートタイム", "8,645 投稿", handleWrongClick],["こぼれ話", "3,622 投稿", handleWrongClick]].map((category,i) => {
                return <Card bg={i ===0 && !firstClickSuccess ? "warning":""} onClick={category[2]} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
                  <Card.Body>
                    <Card.Title>{category[0]}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{category[1]}</Card.Subtitle>
                    <Card.Text>{"関連情報........"}</Card.Text>
                    <Button>クリック</Button>
                  </Card.Body>
                </Card>
              }
              ))) || (!firstClickSuccess && 
                <center><img style={{borderRadius:4, margin:4, height:400, width: 400, opacity: 0.4}} src="/assets/images/hti_logo_4.png" /></center>
              )
            }
          </div>

          <div className="col-12 col-md-3">
            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  <strong style={{ fontSize: 20 }}>
                    <img style={{backgroundColor:'#ADD8E6', borderRadius:4, margin:5}} src="/assets/images/hti_logo_4.png" />
                    早稲田コネクト！
                  </strong>
                  早稲田コネクトは、“Human Technology Interface”のクラスのグループ1が作成した仮想フォーラムサイトで、ユーザーインタラクションのさまざまな側面を探求することを目的としています。
                  現在、私たちは日本と西洋のUIデザインの違いについての調査を行っており、あなたはランダムに割り当てられました。割り当てられた2つのタスクをフォローし、最後にアンケートに回答してください。ご協力と貴重な意見をありがとうございます。
                </Card.Text>
                <Button>クリック</Button>
              </Card.Body>
            </Card>

            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <img style={{cursor:"pointer" ,backgroundColor:'#ADD8E6', height:400, borderRadius:4}} src="/assets/images/screenshot_20240614_at_1639571.png" />
            </Card>

            <Card style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginBottom:20}}>
              <Card.Body>
                <Card.Title>早稲田ミートアップ</Card.Title>
                <Card.Text style={{fontSize:12}}>
                  {[["GDSC Figmaワークショップ", "東京都 新宿"], ["コーヒーミートアップ", "東京都 渋谷"], ["ICCバスケットボールトーナメント", "東京都 早稲田キャンパス"], 
                  ["テックミートアップ", "東京都 新宿"]].map(category => {
                    return <div onClick={handleWrongClick} className='hoverable'>
                      <strong>{category[0]}</strong>
                      <div style={{color:"gray"}}>{category[1]}</div>
                    </div>
                  })}
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card onClick={handleWrongClick} style={{ "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height: 200, marginBottom:20}}>
              <img style={{cursor:"pointer", height:400, borderRadius:4}} src="/assets/images/hti_logo_4.png" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JapaneseTranslation