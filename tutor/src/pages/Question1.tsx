import { useState,useEffect } from "react"
import Header from "../components/header"
import { MathJax,MathJaxContext } from "better-react-mathjax";
import '../styles/Question1.css';
export default function Question1() {
    const [u,setU] = useState("");
    const [du, setDU] = useState("");
    const [equation, setEquation] = useState("");
    const [integratedEquation, setIntegratedEquation] = useState("");
    const [feedBackStep1, setFeedBackStep1] = useState("");
    const [feedBackStep2,setFeedBackStep2] = useState("");
    const [feedBackStep3,setFeedBackStep3] = useState("");
    const [feedBackStep4,setFeedBackStep4] = useState("");
    const [feedBackStep5, setFeedBackStep5] = useState("");
    const [answer, setAnswer] = useState("");
    const [step, setStep] = useState("step1")


    async function handleStep1(){
        const formData = new FormData();
        formData.append('step', "step1");
        formData.append('Answer1', u);
        formData.append('Answer2', du);
        try {
            const response = await fetch('http://localhost:5000/Question1', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setFeedBackStep1(data.feedback)
            if (data.feedback.includes('correct')){
                setStep('step2');
            }
        }catch (error) {
            console.error('Fetch error:', error);
        }
    }
    async function handleStep2(){
        const formData = new FormData();
        formData.append('step', "step2");
        formData.append('Answer1', equation);
        try {
            const response = await fetch('http://localhost:5000/Question1', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setFeedBackStep2(data.feedback)
            if (data.feedback.includes('correct')){
                setStep('step3')
            }
        }catch (error) {
            console.error('Fetch error:', error);
        }
    }
    async function handleStep3(){
        const formData = new FormData();
        formData.append('step', "step3");
        formData.append('Answer1', integratedEquation);
        try {
            const response = await fetch('http://localhost:5000/Question1', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setFeedBackStep3(data.feedback)
            if (data.feedback.includes('correct')){
                setStep('step4')
            }
        }catch (error) {
            console.error('Fetch error:', error);
        }        
    }
    async function handleStep4(){
        const formData = new FormData();
        formData.append('step', "step4");
        formData.append('Answer1', answer);
        try {
            const response = await fetch('http://localhost:5000/Question1', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setFeedBackStep4(data.feedback)
            if (data.feedback.includes('correct')){
                setStep('finish')
                setFeedBackStep5('Finish')
            }
        }catch (error) {
            console.error('Fetch error:', error);
        }        
    }



    return(
        <div className="Question1">
            <Header/>
            <h1> Solve the Integral by using u substitiution</h1>
            <dl>
                <dt><li><strong>Identify a Complex Expression:</strong></li></dt>
                    <dd>- Look for a part of the integral that is more complicated and can be simplified.</dd>
                <dt><li><strong>Choose a Suitable u:</strong></li></dt>
                    <dd>- Make a substitution by letting u be a function of x that simplifies the expression. This choice is often guided by differentials, powers, or trigonometric functions.</dd>
                <dt><li><strong>Calculate du/dx:</strong></li></dt>
                    <dd>- Find the differential du/dx, which allows you to express dx in terms of du.</dd>
                <dt><li><strong>Perform Substitution:</strong></li></dt>
                    <dd>- Replace the complicated expression in the integral with the new variable u and dx in terms of du.</dd>
                <dt><li><strong>Integrate with Respect to u:</strong></li></dt>
                    <dd>- After substitution, integrate with respect to u, which should result in a simpler integral.</dd>
                <dt><li><strong>Convert Back To Original Variable:</strong></li></dt>
                    <dd>- Finally, convert back to the original variable, if necessary.</dd>
            </dl>

            <div className="Question_Feedback">
                {/* Place all Questions here */}
                <div className="Questions">
                    {step.includes('step1') && (
                        <div>
                            <MathJaxContext>
                                <h2 className="question_font">
                                <MathJax>Solve: {"\\(\\int 2xe^{x^2} \\, dx\\)"}</MathJax>
                                <hr className="underline"/>
                                </h2>
                            </MathJaxContext>
                            <p>Step 1: find the correct substitiution for u,du</p>
                            <div className="inputFix">
                                <input onChange={e => setU(e.target.value)} value={u}placeholder="u"/>, 
                                <input onChange={e => setDU(e.target.value)} name={du} placeholder="du"/>
                                <button type="submit" onClick={handleStep1}>submit</button>
                            </div>
                        </div>
                        )}
                    {step.includes('step2')  && (
                            <div>
                                <MathJaxContext>
                                    <h2 className="question_front">
                                        <MathJax>Substitue u/du: {"\\(\\int 2xe^{x^2} \\, dx\\)"}</MathJax>
                                        <hr className="underline"/>
                                    </h2>
                                </MathJaxContext>
                                <p>Step 2: Now that we have selected the correct values to substitue for u/du. Write the equation in terms of u/du. </p>
                                <div className="inputFix">
                                    <input className="inputFix" onChange={e => setEquation(e.target.value)} placeholder="equation"/>
                                    <button className="buttonFix" type="submit" onClick={handleStep2}>submit</button>
                                </div>
                            </div>
                        )}
                    {step.includes('step3') && (
                        <div>
                            <MathJaxContext>
                                <h2 className="question_front">
                                    <MathJax>Integrate: {"\\(\\int e^u \\, du\\)"}</MathJax>
                                    <hr className="underline"/>
                                </h2>
                            </MathJaxContext>
                            <p>Step 3: We have the equation in terms of u/du now integrate with respect to u</p>
                            <div className="inputFix">
                                <input className="inputFix" onChange={e => setIntegratedEquation(e.target.value)} placeholder="equation"/>
                                <button className="buttonFix" type="submit" onClick={handleStep3}>submit</button>
                            </div>
                   </div>
                    )}
                    {step.includes('step4') && (
                        <div>
                            <MathJaxContext>
                                <h2 className="question_front">
                                    <MathJax>Convert: {"\\(e^u \\)"}</MathJax>
                                    <hr className="underline"/>
                                </h2>
                            </MathJaxContext>
                            <p>Step 4: All that is left is to convert u to terms of x. write the final answer in terms of x.</p>
                            <div className="inputFix">
                                <input className="inputFix" onChange={e => setAnswer(e.target.value)} placeholder="answer"/>
                                <button className="buttonFix" type="submit" onClick={handleStep4}>submit</button>
                            </div>
                        </div>
                    )}
                    {step.includes('finish') && (
                        <h1>Good Job!</h1>
                    )}
                </div>

                {/* This is where to place All feedback */}
                <div className="Feedback">
                    <h2>FeedBack</h2>
                    <hr className="underline2"/>
                    {feedBackStep1 && (
                        <div>
                            <MathJaxContext>
                                <MathJax> <h3>Step 1:{"\\(\\int 2xe^{x^2} \\, dx\\)"}</h3></MathJax>
                            </MathJaxContext>
                            <p>Identify u/du</p>
                            <dl>
                                <dt><li>{feedBackStep1.replace('**','^')}</li></dt>
                            </dl>
                        </div>
                    )}
                    {feedBackStep2 && (
                        <div>
                            <MathJaxContext>
                                <MathJax><h3>Step 2: {"\\(\\int 2xe^{x^2} \\, dx\\)"}</h3></MathJax>
                            </MathJaxContext>
                            <p>Equation in terms of u/du</p>
                            <dl>
                                <dt><li>{feedBackStep2.replace('**','^').replace('exp(u)','e^u')}</li></dt>
                            </dl>
                        </div>
                    )}
                    {feedBackStep3 && (
                        <div>
                            <MathJaxContext>
                                <MathJax><h3>Step 3: {"\\(\\int e^u \\, du\\)"} </h3></MathJax>
                            </MathJaxContext>
                            <p>Integrate</p>
                            <dl>
                                <dt><li>{feedBackStep3.replace('**','^').replace('exp(u)','e^u')}</li></dt>
                            </dl>
                        </div>
                    )}
                    {feedBackStep4 && (
                        <div>
                             <MathJaxContext>
                                    <MathJax><h3>Step 4: {"\\(e^u \\)"}</h3></MathJax>
                            </MathJaxContext>
                            <p>re-write</p>
                            <dl>
                                <dt><li>{feedBackStep4.replace('**','^').replace('exp(x^2)','e^(x^2)')}</li></dt>
                            </dl>
                        </div>
                    )}
                    {feedBackStep5 && (
                        <div>
                            <MathJaxContext>
                                <MathJax><h3>Answer: {"\\(e^{x^2} \\)  + C"}</h3></MathJax>
                            </MathJaxContext>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}