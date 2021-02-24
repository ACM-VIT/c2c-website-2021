import Accordion from '../Accordion/Accordion'
import './FaqSection.css'
import data from './FaqSectiondata'
import {
  Fade,
  Zoom,
  Flip,
  Rotate,
  Bounce,
  Slide,
  Roll,
  LightSpeed,
} from "react-reveal";
const Question = ({id, question, answer}) => {
   return (
      <div className="tab overflow-hidden w-full md:w-3/4">
               <input className="absolute opacity-0" id={id} type="radio" name="faq" />
               <label className="block cursor-pointer" htmlFor={id}>{question}</label>
               <div className="tab-content overflow-hidden leading-normal">
                  <p>{answer}</p>
               </div>
            </div>
   )
}

const FaqSection = ({scrollFAQ}) => {
    return (
      <article className="faqcontainer" ref={scrollFAQ}>
          <h1 className="faqheading">Frequently Asked Questions</h1>
          <div className="tabscontainer">
            {data.map((ques, key) => (
              <Accordion
                key={key}
                id={ques.id}
                title={ques.question}
                content={ques.answer}
              />
            ))}
          </div>
      </article>
    );
}

export default FaqSection