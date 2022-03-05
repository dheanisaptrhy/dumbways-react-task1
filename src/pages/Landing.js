import landingModule from '../styles/Landing.module.css'
import logo from '../mockup/Icon.png'
import { useNavigate } from 'react-router-dom'
import { Container, Button } from "react-bootstrap";

function Landing(){
    const navigate = useNavigate();
    const handleNavigateToSignIn = () => {
        navigate("/signin");
      };
    const handleNavigateToSignUp = () => {
        navigate("/signup");
      };

    return(
        <div className={landingModule.main}>
            <div>
                <div className={landingModule.content}>
                    <div>
                        <img src={logo}/>
                    </div>

                    <div className={landingModule.greetingContent}>
                        <p className={landingModule.contentP}>Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
                    </div>

                    <Container className={landingModule.btn}>
                        <Button className={`${landingModule.button} ${landingModule.signup}`}
                                onClick={handleNavigateToSignIn}>
                                    Sign Up</Button>
                        <Button className={`${landingModule.button} ${landingModule.signin}`}
                                onClick={handleNavigateToSignUp}>
                                    Sign In</Button>
                    </Container>
                </div>
            </div>
        </div>    
    );
}
export default Landing;