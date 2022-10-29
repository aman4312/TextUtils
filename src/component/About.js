import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });
  const [btntext, setBtntext] = useState('Enable Sark Mode');
  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtntext('Enable Dark MOde');
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtntext('Enable Light Mode');
    }
  };
  return (
    <div className="container" style={myStyle}>
      <h1>About Us</h1>
      <div classsName="accordion" id="accordionExample">
        <div classsName="accordion-item">
          <h2 classsName="accordion-header" id="headingOne">
            <button
              classsName="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1f
            </button>
          </h2>
          <div
            id="collapseOne"
            classsName="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div classsName="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div classsName="accordion-item">
          <h2 classsName="accordion-header" id="headingTwo">
            <button
              classsName="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            classsName="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div classsName="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div classsName="accordion-item">
          <h2 classsName="accordion-header" id="headingThree">
            <button
              classsName="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            classsName="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div classsName="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
