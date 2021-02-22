import Accordion from '../Accordion/Accordion'
import './FaqSection.css'
import data from './FaqSectiondata'

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

const FaqSection = () => {
    return (
      <article className="faqcontainer">
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
          <Accordion
            title="How do I track my order?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </article>
    );
}

export default FaqSection