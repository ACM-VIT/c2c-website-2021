/* eslint-disable no-loop-func */
import { useEffect} from "react";
/** Styles */
import "./2MarqueeSection.css";
const SecondMarqueeSection = () => {
  useEffect(() => {
    const ele = document.querySelectorAll(".marquee__inner2 span");
    for (let span of ele) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let letters = span.innerHTML
        .split("")
        .map((ele) => `<span class="letter2">${ele}</span>`)
        .reduce(reducer);
      span.innerHTML = letters;
    }

    const l = document.getElementsByClassName("letter2");
    if(!l) return;
    for(let letter of l) {
      letter.addEventListener("mouseover",(ele)=>{
        ele.target.style = `-webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: var(--color-bg);
        -webkit-text-fill-color: var(--color-highlightStroke);`
        setTimeout(()=>{
          ele.target.style ="";
        },1300);
      })
    }
    return () => {
      return;
    };
  }, []);

  return (
    <div className="marquee2">
      <div className="marquee__inner2" aria-hidden="true">
        <span>CREATION</span>
        <span>COMPUTING</span>
        <span>CHANGE</span>
        <span>CHALLENGING</span>
        <span>CREATIVITY</span>
      </div>
    </div>
  );
};
export default SecondMarqueeSection;