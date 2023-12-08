import Header from "../components/header"
import '../styles/Question2.css';
export default function Question2(){
    async function handleEquation() {
        const formData = new FormData();
        // setStep3("step3")
        // formData.append('step', "step3");
        // formData.append('Answer1', integratedEquation);
        try {
            const response = await fetch('http://localhost:5000/Question2', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            // setFeedBackStep3(data.feedback)
        }catch (error) {
            console.error('Fetch error:', error);
        }        
        
    }
    return(
        <div className="Question2">
            <Header/>
            <h1> Solve the Integral by using Integration By Parts</h1>
            <dl>
                <dt><li><strong>Select u and dv:</strong></li></dt>
                    <dd>- Choose u as a function that you can easily differentiate. Choose dv as a function that you can easily integrate. </dd>
                <dt><li><strong>Differentiate u and Integrate dv:</strong></li></dt>
                    <dd>- Compute du=u′ dx (the derivative of u with respect to x). Integrate dv to get v. </dd>
                <dt><li><strong>Apply the Integration by Parts Formula:</strong></li></dt>
                    <dd>- Use the formula ∫u dv = uv - ∫v du</dd>
                <dt><li><strong>Evaluate the Resulting Integral:</strong> </li></dt>
                    <dd>- Evaluate the remaining integral on the right side. </dd>
                <dt><li><strong>Repeat if Necessary:</strong></li></dt>
                    <dd>- If the new integral on the right side is still difficult, you may need to apply integration by parts again.</dd>
            </dl>
            <div className="Question_Feedback">
                <div className="Questions">
                    <h2>Questions</h2>
                </div>

                <div className="Feedback">
                    <h2>FeedBack</h2>

                </div>
            </div>
        </div>
    )
}