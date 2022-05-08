import React, { useState } from 'react'; 
import FAQ from './FAQ';
import FaqsData from './FaqsData'; 

const FAQS = () => { 
    const [ faqs, setFaqsData ] = useState(FaqsData); 

    return (
        <div>
            <p>how to create FAQ section for website</p>
            <h1>FAQS</h1>
            {faqs.map((faq, index) => <FAQ key={index} {...faq}/>)} 
        </div>
    ) 
}

export default FAQS;