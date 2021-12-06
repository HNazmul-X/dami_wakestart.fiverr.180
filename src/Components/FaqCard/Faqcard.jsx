import React, { useRef,useState } from 'react';

const FaqCard = () => {
    const [isFaqActive, setIsFaqActive] = useState(false)
    const faqCardContentRef = useRef(null)
    



    return (
        <article id="Faq-card">
            <div onClick={()=> setIsFaqActive(!isFaqActive)}  className="faq-label d-flex justify-content-between">
                <div className="faq-title">What Makes Restock World Stand Out From Other Group</div>
                <div className={`${!isFaqActive?"active":""} icon flex-shrink-0`}> 
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                 </div>
            </div>
            <div style={{maxHeight:isFaqActive?`${faqCardContentRef?.current?.scrollHeight}px`:0}} ref={faqCardContentRef} className="faq-description">
                <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quasi nemo eaque obcaecati ullam doloribus rerum debitis culpa quas quae!</div>
            </div>
        </article>
    );
};

export default FaqCard;