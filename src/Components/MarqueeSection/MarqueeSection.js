import {useEffect,useRef} from 'react'
/** Styles */
import './MarqueeSection.css';
const MarqueeSection = ()=>{

  useEffect(() => {
	  const ele = document.querySelectorAll(".marquee__inner span");
	  for(let span of ele) {
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		let letters = span.innerHTML.split("").map((ele)=>`<span class="letter">${ele}</span>`).reduce(reducer);
		console.log(letters);
		console.log(typeof letters)
		span.innerHTML = letters;
	  }
	  return () => {
		  return;
	  }
  }, [])
 

  return (
  <div className="marquee">
   	<div className="marquee__inner" aria-hidden="true" >
   		<span>COMPUTING</span>
   		<span>CHANGE</span>
   		<span>CHALLENGING</span>
   		<span>CREATIVITY</span>
   	</div>
   </div>
 )
};
export default MarqueeSection;
