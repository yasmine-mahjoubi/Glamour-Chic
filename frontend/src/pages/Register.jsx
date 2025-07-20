import React,{useState} from 'react'
import {Container,Row,Col,Form,FormGroup,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/login.css'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

const Register = () => {

    const [credentials, setCredentials] = useState({
        username:undefined,
        email:undefined,
        password:undefined,
    })

    const handleChange = e =>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleClick = e=>{
        e.preventDefault()
    }

    return(
        <section>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="" />
                            </div>

                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>  
                                <h2>S'inscire</h2>

                                <Form onSubmit={handleClick}>
                                <FormGroup>
                                    <input type="text" placeholder='Nom et prénom'
                                    required id="username" onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="email" placeholder='E-mail'
                                    required id="email" onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <input type="password" placeholder='Mot de passe'
                                    required id="password" onChange={handleChange} />
                                </FormGroup>

                                <Button className='btn secondary__btn auth__btn' type='submit'>
                                    Créer un compte
                                </Button>
                                </Form>
                                <p>
                                    Avez-vous un compte ?
                                    <Link to='/login'>Connecter</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Register;
