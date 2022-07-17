/* eslint-disable */
import './App.css';
import { useState, useEffect, useRef } from 'react';
import NavItem from './components/NavItem';
import Section1Item from './components/Section1Item'
import Section2Item from './components/Section2Item'
import Section3Item from './components/Section3Item'
import Section4Item from './components/Section4Item'
import FooterItem from './components/FooterItem'

function App() {
  let [test, setTest] = useState('')
  let [myself, setMyself] = useState([false, false, false, false])
  const a = useRef(null);
  const b = useRef(null);
  const c = useRef(null);

  //스크롤 이벤트 감지
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 50) {
      setTest('navChange')
    } else {
    // 스크롤이 50px 미만일경우 false를 넣어줌
      setTest('')
    }
  };

  return (
    <div className="App">
      <NavItem test={test} a={a} b={b} c={c}></NavItem>

      <section>
        <Section1Item a={a} />
        <Section2Item a={a} myself={myself} setMyself={setMyself} />
        <Section3Item b={b} />
        <Section4Item c={c} myself={myself} setMyself={setMyself}/>
      </section>

      <FooterItem></FooterItem>
    </div>
  );
}

export default App;
