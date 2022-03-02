import '../styles/Landing.css'
import logo from '../mockup/Icon.png'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from "react-bootstrap";

function Landing(){
    const navigate = useNavigate();

    return(
        <div className="main">
            <Container className="main-main">
                <div className="content">
                    <div className="logo-content">
                        <img src={logo}/>
                    </div>

                    <div className="greeting-content">
                        <p className="">Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
                    </div>

                    <div className="btn">
                        <Button className="button signup">Sign Up</Button>
                        <Button className="button signin">Sign In</Button>
                    </div>
                </div>
                
            </Container>
        </div>    
    );
}
export default Landing;