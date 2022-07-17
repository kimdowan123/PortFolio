import '../css/Section1Item.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Section1Item(props) {

    const txt = "신입 프론트엔드 개발자 김도완";
    const [Text, setText] = useState('');
    const [Count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
            setCount(Count + 1); // 개수 만큼 체크 
        }, 100);
        if (Count === txt.length) {  // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
        }
        return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    })
    return (
        <div className='section1'>
            <div className='search'>
                <img src="/face.png" alt="#" width="90px" height="90px" />
                <p>{Text}<span className='blink'>|</span></p>

                <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' onClick={() => {
                    window.scrollTo({ top: props.a.current.offsetTop - 70, left: 0, behavior: "smooth" });
                }} />
                <img src="/click.png" alt="" width="30px" height="30px" className='click' />
            </div>
        </div>
    )
} export default Section1Item;