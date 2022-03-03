import {Container, Form, Button} from 'react-bootstrap'
import signInModule from './CardSignIn.module.css'
import {Link} from 'react-router-dom'

function CardSignIn(){
    const {main, 
           miniContainer, 
           signinH1,
           input,
           button,
           klikHere, 
           textKlik, 
            } = signInModule
    return(
        <div className={main}>
            <div className={miniContainer}>
                <div>
                    <h2 className={signinH1}>Sign In</h2>
                </div>
                <Form>
                    <Form.Control className={input} type="email" placeholder="Email" />
                    <Form.Control className={input}  type="password" placeholder="Password" />
                    <Button className={button} type="submit">
                    Sign In
                    </Button>
                </Form>
                <div className={textKlik}>
                    <p>Don't have account ? Klik <Link to='/signup' className={klikHere}>Here</Link></p>
                </div>
            </div>
        </div>
    );
}
export default CardSignIn;