import '../css/Section3Item.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

function Section3Item(props) {
    return (
        <div className='section3' >
            <h1 className='section3-title' ref={props.b}><FontAwesomeIcon icon={faPaperclip} className='Myclip' />&nbsp;Skills</h1>
            <br />
            <br />
            <br />
            <div>
                <img src="/htmlImage.png" alt="이미지" width="120PX" />
                <img src="/cssImage.png" alt="" width="120PX" />
                <img src="/jsImage.png" alt="" width="87PX" />
                <img src="/reactImage.png" alt="" width="120PX" />
                <img src="/ts.png" alt="" width="170px" />
                <img src="/es6Image.png" alt="" width="115px" />
            </div>
            <br />
            <br />
            <div>
                <img src="/mongoImage.png" alt="" width="120PX" />
                <img src="/nodeImage.png" alt="" width="180PX" />
                <img src="/git.png" alt="" width="110px" />
                <img src="/github.png" alt="" width="130px" />
            </div>

        </div>
    )
} export default Section3Item;