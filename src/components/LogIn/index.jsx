import styles from './LogIn.module.css'
import { Button, Divider, Heading, Input } from '@chakra-ui/react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import Loading from '../Loading';

const LogIn = () => {

    const navigate = useNavigate();
    const { signin } = useAuthContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signin(email, password);
            setSuccessMsg('Log In Successfull');
            setLoading('false');
            setSuccessMsg('');
            navigate('/home');
        } catch (err) {
            setErrorMsg(err.message);
        }
    }

    return (
        <div className={styles.container}>
            <Heading color='secondary' size='lg' textAlign='end'>Log In</Heading>
            <Divider my='.5em' />
            <form onSubmit={handleSubmit} className={styles.form_container}>
                <Input size='md' type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} value={email} />
                <Input size='md' type='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} value={password} />
                <Button type='submit' variant="koffie-solid" my='.7em' onClick={() => setLoading(true)}>SUBMIT</Button>
            </form>
            {loading && <Loading />}
            {successMsg && <div className={styles.successMsg}>{successMsg}</div>}
            {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
            <Heading variant='title' fontWeight='light' textAlign='center'>Don't have an account? <NavLink to="/register">Register</NavLink></Heading>
        </div>
    )
}

export default LogIn