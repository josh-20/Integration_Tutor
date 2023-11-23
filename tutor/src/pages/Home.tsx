import Header from "../components/header"
export default function Home(){
    return(
        <div>
            <Header/>
            <h1 className="question_font">Welcome to The Integration Tutor</h1>
            <p> To start solving Integrals select a question in the navigation bar above. </p>
        </div>
    )
}