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
    const [answer, setAnswer] = useState("");
    const [step, setStep] = useState("step1")
    const [step1, setStep1] = useState("");
    const [step2, setStep2] = useState("");
    const [step3, setStep3] = useState("");
    const [step4, setStep4] = useState("");


    async function handleStep1(){
        const formData = new FormData();
        setStep1("step1")
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
        }catch (error) {
            console.error('Fetch error:', error);
        }
    }
    async function handleStep2(){
        const formData = new FormData();
        setStep2("step2")
        formData.append('step', "step2");
        formData.append('Answer1', equation);
        try {
            const response = await fetch('http://localhost:5000/Question1', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setFeedBackStep2(data.feedback)
        }catch (error) {
            console.error('Fetch error:', error);
        }
    }
    async function handleStep3(){
        const formData = new FormData();
        setStep3("step3")
        formData.append('step', "step3");
        formData.append('Answer1', integratedEquation);
        try {
            const response = await fetch('http://localhost:5000/Question1', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setFeedBackStep3(data.feedback)
        }catch (error) {
            console.error('Fetch error:', error);
        }        
    }
    async function handleStep4(){
        const formData = new FormData();
        setStep4("step4")
        formData.append('step', "step4");
        formData.append('Answer1', answer);
        try {
            const response = await fetch('http://localhost:5000/Question1', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setFeedBackStep4(data.feedback)
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
                    {step.includes('step2') && feedBackStep1 && feedBackStep1.includes("correct") && (
                            <div>
                                <MathJaxContext>
                                    <h2 className="question_fron">
                                        <MathJax>Substitue u/du: {"\\(\\int 2xe^{x^2} \\, dx\\)"}</MathJax>
                                        <hr className="underline"/>
                                    </h2>
                                </MathJaxContext>
                                <p>Step 2: Now that we have selected the correct values to substitue for u/du. Write the equation in terms of u/du. </p>
                                <input className="inputFix" onChange={e => setEquation(e.target.value)} placeholder="equation"/>
                                <button className="buttonFix" type="submit" onClick={handleStep2}>submit</button>
                            </div>
                        )}
                </div>

                <div className="Feedback">
                    <h2>FeedBack</h2>
                    {feedBackStep1 && (
                        <div>
                            <MathJaxContext>
                                <h2>
                                <MathJax>Step 1: {"\\(\\int 2xe^{x^2} \\, dx\\)"}</MathJax>
                                </h2>
                            </MathJaxContext>
                            <p>Feedback: {feedBackStep1}</p>
                        </div>
                    )}
                </div>
            </div>
            <br/>
            <br/>
    
           {feedBackStep2 && (
                <p>Feedback: {feedBackStep2}</p>
            )}
            {feedBackStep2 && feedBackStep2.includes("correct") && step2.includes('step2') && (
                <div>
                     <MathJaxContext>
                        <h2 className="question_fron">
                            <MathJax>Integrate: {"\\(\\int e^u \\, du\\)"}</MathJax>
                            <hr className="underline"/>
                        </h2>
                    </MathJaxContext>
                    <p>Step 3: We have the equation in terms of u/du now integrate with respect to u</p>
                    <input className="inputFix" onChange={e => setIntegratedEquation(e.target.value)} placeholder="equation"/>
                    <button className="buttonFix" type="submit" onClick={handleStep3}>submit</button>
                </div>
            )}
            {feedBackStep3 && (
                <p>Feedback: {feedBackStep3}</p>
            )}
            {feedBackStep3 && feedBackStep3.includes("correct") && step3.includes('step3') && (
                <div>
                    <MathJaxContext>
                        <h2 className="question_fron">
                            <MathJax>Convert: {"\\(e^u \\)"}</MathJax>
                            <hr className="underline"/>
                        </h2>
                    </MathJaxContext>
                    <p>Step 4: All that is left is to convert u to terms of x. write the final answer in terms of x.</p>
                    <input className="inputFix" onChange={e => setAnswer(e.target.value)} placeholder="answer"/>
                    <button className="buttonFix" type="submit" onClick={handleStep4}>submit</button>
                </div>
                               
            )}
            {feedBackStep4 && (
                <p>Feedback: {feedBackStep4}</p>
            )}
        </div>
    );
}