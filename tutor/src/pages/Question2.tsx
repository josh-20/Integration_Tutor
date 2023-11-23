import Header from "../components/header"
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
        <div>
            <Header/>
            <button onClick={handleEquation}>testbackend</button>
            <p>hello from page 2</p>
        </div>
    )
}