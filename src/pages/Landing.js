import landingModule from '../styles/Landing.module.css'
import logo from '../mockup/Icon.png'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Modal } from "react-bootstrap";
import CardSignIn from '../components/CardSignIn'
import { useState } from 'react';

function Landing() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={landingModule.main}>
            <div>
                <div className={landingModule.content}>
                    <div>
                        <img src={logo} />
                    </div>

                    <div className={landingModule.greetingContent}>
                        <p className={landingModule.contentP}>Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental service provider in Indonesia</p>
                    </div>

                    <Container className={landingModule.btn}>
                        <Button className={`${landingModule.button} ${landingModule.signup}`}>Sign Up</Button>
                        <Button className={`${landingModule.button} ${landingModule.signin}`}
                            onClick={handleShow}>
                            Sign In
                        </Button>
                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Body>
                                <CardSignIn/>
                            </Modal.Body>
                        </Modal>
                    </Container>
                </div>

            </div>
        </div>
    );
}
export default Landing;