/* eslint-disable */
import '../css/Section2Item.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";


function Section2Item(props) {
    return (
        <div className='section2'>
            <h1 className='section2-title' ref={props.a}><FontAwesomeIcon icon={faPaperclip} className='Myclip' />&nbsp;About me</h1>
            <div className='section2-box'>
                <img src="/face.png" alt="" width='130px' height="130px" />
                <p>임시(증명사진위치)</p>
                <div>
                    <p>안녕하세요. 저의 포트폴리오 사이트에 방문해주셔서 감사합니다 !</p>
                    <br />
                    <p>저는 웹 프론트엔드 개발분야에 취업을 준비중인 김도완 입니다.</p>
                    <br />
                    <p><span className="react" style={{ padding: '13px' }}>React</span> <span className="node" style={{ padding: '13px' }}>Express</span> <span className="typescript" style={{ padding: '13px' }}>Typescript</span> 등 웹개발에 필요한것들에 관심이 많습니다.</p>
                    <br />
                    <br />
                    <br />
                    <p style={{ color: 'black', cursor: 'pointer' }} onClick={() => {
                        let copy = [...props.myself]
                        copy[0] = true

                        props.setMyself(copy)
                    }}>자기소개서 펼쳐보기➡️</p>
                    <br />
                    <a href="https://github.com/kimdowan123" style={{ color: 'black' }} target='_blank'>깃허브 바로가기➡️</a>
                    <br />
                    <br />
                    {
                        props.myself[0] == true ? <div className='black-bg'>

                        <div className='white-bg'>
                            <br />
                            <br />
                            <div className='white-bg-box'>
                                <button onClick={() => {
                                    let copy = [...props.myself]
                                    copy[0] = false;
                                    props.setMyself(copy)
                                }}>X</button>
                                <div>
                                    추후개설
                                </div>
                            </div>

                        </div>
                    </div> : null
                    }
                </div>
                <div className='Information'>
                    <div>
                        <span style={{ fontSize: '25px', fontWeight: 'bold' }}><FontAwesomeIcon icon={faUser} />&nbsp;이름</span>
                        <br />
                        <br />
                        <p>김도완</p>
                    </div>
                    <div>
                        <span style={{ fontSize: '25px', fontWeight: 'bold' }}><FontAwesomeIcon icon={faCalendar} />&nbsp;생년월일</span>
                        <br />
                        <br />
                        <p>1994.03.27</p>
                    </div>
                    <div>
                        <span style={{ fontSize: '25px', fontWeight: 'bold' }}><FontAwesomeIcon icon={faBuildingColumns} />&nbsp;학력</span>
                        <br />
                        <br />
                        <p>동아대학교(분자유전공학)</p>
                    </div>
                    <div>
                        <span style={{ fontSize: '25px', fontWeight: 'bold' }}><FontAwesomeIcon icon={faMobileScreen} />&nbsp;전화번호</span>
                        <br />
                        <br />
                        <p>010-2884-9403</p>
                    </div>
                    <div>
                        <span style={{ fontSize: '25px', fontWeight: 'bold' }}><FontAwesomeIcon icon={faEnvelope} />&nbsp;이메일</span>
                        <br />
                        <br />
                        <p>kdw0247@gmail.com</p>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
} export default Section2Item;