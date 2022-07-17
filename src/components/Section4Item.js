/* eslint-disable */
import '../css/Section4Item.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

import { useRef } from 'react';
function Section4Item(props) {

    const TOP = useRef(null);

    const onHomeClick = () => {
        TOP.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='section4'>
            <h1 className='section4-title' ref={props.c}><FontAwesomeIcon icon={faPaperclip} className='Myclip' />&nbsp;Portfolio</h1>
            <br />
            <br />
            <br />
            <div className='section4Box'>
                <div className='monitor'>
                    <img src="/포폴1.png" alt="" width="630px" height="400px" />
                    <FontAwesomeIcon icon={faCirclePlay} style={{ fontSize: "100px" }} className="playButton" onClick={() => {
                        let copy = [...props.myself]
                        copy[1] = true
                        props.setMyself(copy)
                    }} />
                    {
                        props.myself[1] == true ? <div className='black-bg'>

                            <div className='white-bg'>
                                <br ref={TOP} />
                                <br />
                                <div className='white-bg-box'>
                                    <button onClick={() => {
                                        let copy = [...props.myself]
                                        copy[1] = false;
                                        props.setMyself(copy)
                                    }}>X</button>
                                    <h2>⭐프로젝트 이름</h2>
                                    <p>빌리지(캠핑용품대여 사이트)</p>
                                    <h2>⭐만든목적</h2>
                                    <p>친구의 부탁으로 친구가 운영하는 캠핑용품업체의 상품및 가게소개 위치등을
                                        안내하는 서비스를 만들게 되었습니다.
                                        <br />
                                        프로그래밍을 배우며 처음 만들어본 서비스인데 만들면서 리액트의 Hook 들에 대해서 공부 할수있어서 좋았습니다.
                                        <br />
                                        그리고 서버와 db까지 다루며 웹페이지가 전체적으로 어떻게 만들어지는지에 대해서 조금이나마 알수있었습니다.
                                    </p>
                                    <h2>⭐기능</h2>
                                    <p>-관리자 페이지에서 서버에 axios 요청하여 DB에 상품을 저장 및 수정 삭제 할수 있습니다</p>
                                    <p>-상품진열 페이지에서는 서버에 axios 요청으로 DB에서 상품정보를 불러와 볼수 있습니다.</p>
                                    <p>-카카오지도 api이용.</p>
                                    <p>-반응형으로 제작되어 웹,테블릿,모바일에서도 이용이 가능합니다.</p>

                                    <h2>⭐쓰인기술</h2>
                                    <p> <span className='react' style={{ padding: '10px' }}>React</span> <span className='node' style={{ padding: '10px' }}>Node</span> <span className='mongo' style={{ padding: '10px' }}>MongoDB</span></p>
                                    <p style={{ fontWeight: 'bold' }}>-useState,useEffect 등 리액트 훅 을 이용</p>
                                    <p>&emsp;&emsp;useState 를 이용해 웹에 즉각렌더</p>
                                    <p>&emsp;&emsp;useEffect 와 같은 라이플 사이클 이용해 애니메이션,상품정보 ,axios요청 등 구현</p>
                                    <p style={{ fontWeight: 'bold' }}>-useNavigate,useParams 와 같은 react-router-dom 이용</p>
                                    <p>&emsp;&emsp;useNavigate를 이용해 페이지 간 이동구현 </p>
                                    <p>&emsp;&emsp;useParams를 이용해 상품고유id 값 전달 (상품 디테일페이지 구현)</p>
                                    <p style={{ fontWeight: 'bold' }}>-component</p>
                                    <p>&emsp;&emsp;component로 구역,페이지 구현</p>
                                    <p style={{ fontWeight: 'bold' }}>-Routes</p>
                                    <p>&emsp;&emsp;Routes로 페이지 분리</p>
                                    <p style={{ fontWeight: 'bold' }}>-node express / session 로그인구현</p>
                                    <p>&emsp;&emsp;관리자 로그인시 DB에 저장되어있는 ID와PW 를 검증</p>
                                    <p>&emsp;&emsp;관리자 페이지 URL 직접접근 X</p>

                                    <br />
                                    <h1>- 영상1 -</h1>
                                    <video controls muted preload="bbb" width="650px" height="360px" >
                                        <source src="/빌리지1.mp4" ></source>
                                    </video>
                                    <br />
                                    <br />

                                    <h1>- 영상2(관리자기능) -</h1>
                                    <video controls muted preload="bbb" width="650px" height="360px" >
                                        <source src="/빌리지2.mp4" ></source>
                                    </video>
                                    <br />
                                    <br />
                                    <FontAwesomeIcon icon={faCircleArrowUp} onClick={onHomeClick} style={{ fontSize: '50px', cursor: "pointer" }} />
                                    <br />
                                    <br />
                                </div>

                            </div>
                        </div> : null
                    }
                </div>
                <div className='portFolio'>
                    <h1><span style={{ color: 'gray' }}>project name</span> : 빌리지</h1>
                    <br />
                    <p style={{ color: 'gray' }}>프로젝트 설명:</p>
                    <p>
                        캠핑용품을 대여해주는 업체의 상품소개 및 가격등 간단한 안내가 있는 사이트입니다.
                        <br />
                        그리고 세션로그인을 통해 접근가능한 관리자 페이지가 있습니다.
                        관리자 페이지 에서는 상품을 추가,삭제,수정 등을 할수있는 crud기능이 있습니다.
                        <br />
                        또한 웹,테블릿,모바일 반응형으로 제작되었습니다.
                    </p>
                    <br />
                    <p style={{ color: 'gray' }}>기간/인원:</p>
                    <p>2022.06.01~2022.07.01 / 1인개발</p>
                    <br />
                    <p style={{ color: 'gray' }}>쓰인기술:</p>

                    <div style={{ display: 'flex' }}>
                        <p className='react'>React</p>&nbsp;
                        <p className='node'>nodeJS</p>&nbsp;
                        <p className='mongo'>mongoDB</p>
                    </div>

                    <br />
                    <p style={{ color: 'gray' }}>프로젝트 바로가기</p>
                    <p><a href="https://villeasy.du.r.appspot.com" style={{ color: 'black' }} target='_blank'>https://villeasy.du.r.appspot.com</a></p>
                    <br />
                    <p style={{ color: 'gray' }}>github 바로가기</p>
                    <p><a href="https://github.com/kimdowan123/villeasy" style={{ color: 'black' }} target='_blank'>https://github.com/kimdowan123/villeasy</a></p>
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className='section4Box'>

                <div className='monitor'>
                    <img src="/포폴2.png" alt="" width="630px" height="400px" />

                    <FontAwesomeIcon icon={faCirclePlay} style={{ fontSize: "100px" }} className="playButton" onClick={() => {
                        let copy = [...props.myself]
                        copy[3] = true

                        props.setMyself(copy)
                    }} />



                    {
                        props.myself[3] == true ? <div className='black-bg'>

                            <div className='white-bg'>
                                <br ref={TOP} />
                                <br />
                                <div className='white-bg-box'>
                                    <button onClick={() => {
                                        let copy = [...props.myself]
                                        copy[3] = false;
                                        props.setMyself(copy)
                                    }}>X</button>
                                    <h2>⭐프로젝트 이름</h2>
                                    <p>Todolist</p>
                                    <h2>⭐만든목적</h2>
                                    <p>localstoryage에 대해 알기 위해서 todolist를 만들어 보았습니다. 간단한 프로젝트지만 localstoryage에 데이터를 어떻게 담고 꺼내서 수정하고 삭제등을 하는지에 대해서 알수있었습니다.
                                    </p>
                                    <h2>⭐기능</h2>
                                    <p>-localstoryage에 데이터를 저장하고 읽어올수 있습니다.</p>
                                    <p>-localstoryage에있는 데이터를 삭제할수 있습니다.</p>
                                    <p>-체크기능으로 한일을 표시할수 있습니다.</p>

                                    <h2>⭐쓰인기술</h2>
                                    <p> <span className='react' style={{ padding: '10px' }}>React</span></p>
                                    <p style={{ fontWeight: 'bold' }}>-useState,useEffect 등 리액트 훅 을 이용</p>
                                    <p>&emsp;&emsp;useState 를 이용해 웹에 즉각렌더</p>
                                    <p>&emsp;&emsp;useEffect 와 같은 라이플 사이클 이용해 mount,unmount 시 함수실행</p>

                                    <p style={{ fontWeight: 'bold' }}>-localstoryage를 이용</p>
                                    <p>&emsp;&emsp;데이터를  localstoryage에 저장함으로써 영구저장가능</p>
                                    <p style={{ fontWeight: 'bold' }}>-component</p>
                                    <p>&emsp;&emsp;component로 구역 분리</p>
                                    <br />
                                    <h1>- 영상1 -</h1>
                                    <video controls muted preload="bbb" width="650px" height="360px" >
                                        <source src="/todolist1.mp4" ></source>
                                    </video>

                                    <br />
                                    <br />
                                    <FontAwesomeIcon icon={faCircleArrowUp} onClick={onHomeClick} style={{ fontSize: '50px', cursor: "pointer" }} />
                                    <br />
                                    <br />
                                </div>

                            </div>
                        </div> : null
                    }



                </div>

                <div className='portFolio'>
                    <h1>project name : Todolist</h1>
                    <br />
                    <p style={{ color: 'gray' }}>프로젝트 설명:</p>
                    <p>localstoryage를 이해 하기위해 localstoryage를 이용해 todolist를 만들어봤습니다. 데이터를 localstoryage 에 저장 ,읽음, 삭제를 할수 있습니다.</p>
                    <br />
                    <p style={{ color: 'gray' }}>기간/인원:</p>
                    <p>2022.07.01~2022.07.02  / 1인개발</p>
                    <br />
                    <p style={{ color: 'gray' }}>쓰인기술:</p>
                    <p className='react'>React</p>
                    <br />
                    <p style={{ color: 'gray' }}>프로젝트 주소</p>
                    <p><a href="https://kimdowan123.github.io" target='_blank' style={{ color: 'black' }}>https://kimdowan123.github.io</a></p>
                    <br />
                    <p style={{ color: 'gray' }}>github 바로가기</p>
                    <p><a href="https://github.com/kimdowan123/kimdowan123.github.io" target='_blank' style={{ color: 'black' }}>https://github.com/kimdowan123/kimdowan123.github.io</a></p>
                </div>

            </div>


            <br />
            <br />
            <br />

            <div className='section4Box'>

                <div className='monitor'>
                    <img src="/포폴3.png" alt="" width="630px" height="400px" />


                    <FontAwesomeIcon icon={faCirclePlay} style={{ fontSize: "100px" }} className="playButton" onClick={() => {
                        let copy = [...props.myself]
                        copy[4] = true

                        props.setMyself(copy)
                    }} />


                    {
                        props.myself[4] == true ? <div className='black-bg'>

                            <div className='white-bg'>
                                <br ref={TOP} />
                                <br />
                                <div className='white-bg-box'>
                                    <button onClick={() => {
                                        let copy = [...props.myself]
                                        copy[4] = false;
                                        props.setMyself(copy)
                                    }}>X</button>
                                    <h2>⭐프로젝트 이름</h2>
                                    <p>포트폴리오</p>
                                    <h2>⭐만든목적</h2>
                                    <p>제출용 포트폴리오 사이트가 있으면 좋겟다고 생각해 만들게 되었습니다.
                                        <br />
                                        현재 보시는 이 사이트입니다. 이 포트폴리오 사이트를 만들면서 useRef 를 통해 스크롤 이동에대해서 익힐수 있었습니다.
                                    </p>
                                    <h2>⭐기능</h2>
                                    <p>-인적사항 그리고 간단한 자기소개서, skills ,portfolio 등에 대해서 볼수있습니다.</p>

                                    <h2>⭐쓰인기술</h2>
                                    <p> <span className='react' style={{ padding: '10px' }}>React</span></p>
                                    <p style={{ fontWeight: 'bold' }}>-useState,useEffect,useRef 등 리액트 훅 을 이용</p>
                                    <p>&emsp;&emsp;useState 를 이용해 웹에 즉각렌더</p>
                                    <p>&emsp;&emsp;useEffect 와 같은 라이플 사이클 이용해 스크롤이벤트 감지, 에니메이션 등을 구현</p>
                                    <p>&emsp;&emsp;useRef를 통해 navbar 목록 클릭시 해당 스크롤 위치로 이동</p>
                                    <p style={{ fontWeight: 'bold' }}>-component</p>
                                    <p>&emsp;&emsp;component로 페이지 분리</p>


                                    <br />
                                    <br />
                                    <FontAwesomeIcon icon={faCircleArrowUp} onClick={onHomeClick} style={{ fontSize: '50px', cursor: "pointer" }} />
                                    <br />
                                    <br />
                                </div>

                            </div>
                        </div> : null
                    }



                </div>

                <div className='portFolio'>
                    <h1>project name : 포트폴리오</h1>
                    <br />
                    <p style={{ color: 'gray' }}>프로젝트 설명:</p>
                    <p>
                        포트폴리오용 사이트로 만들었으며 리액트로 제작되었습니다.
                        <br />
                        반응형x
                    </p>

                    <br />
                    <p style={{ color: 'gray' }}>기간/인원:</p>
                    <p>2022.07.10~2022.07.13 / 1인개발</p>
                    <br />
                    <p style={{ color: 'gray' }}>쓰인기술:</p>
                    <p className='react'>React</p>
                    <br />
                    <p style={{ color: 'gray' }}>프로젝트 바로가기</p>
                    <p><a href="#" target='_blank' style={{ color: 'black' }}>추후</a></p>
                    <br />
                    <p style={{ color: 'gray' }}>github 바로가기</p>
                    <p><a href="https://github.com/kimdowan123" target='_blank' style={{ color: 'black' }}>https://github.com/kimdowan123</a></p>
                </div>

            </div>



        </div>
    )
} export default Section4Item;