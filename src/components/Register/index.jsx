import styles from './Register.module.css'
import { Button, Divider, Heading } from '@chakra-ui/react'
import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import Loading from '../Loading';

const Register = () => {

    const navigate = useNavigate();
    const { signup } = useAuthContext();

    const [fullname, setFullname] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user } = await signup(email, password);
            await updateProfile(user, { displayName: fullname });
            setSuccessMsg('Sign Up Successfull');
            setLoading('false');
            setSuccessMsg('');
            navigate('/home');
        } catch (err) {
            setErrorMsg(err.message);
        }
    }

    return (
        <div className={styles.container}>
            <Heading color='secondary' size='lg' textAlign='end'>Register</Heading>
            <Divider my='.5em' />
            <form onSubmit={handleSubmit} className={styles.form_container}>
                <input type='text' name='fullname' placeholder='Fullname' required onChange={(e) => setFullname(e.target.value)} value={fullname} />
                <input type='text' name='address' placeholder='Address' required onChange={(e) => setAddress(e.target.value)} value={address} />
                <input type='email' name='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type='password' name='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} value={password} />
                <Button type='submit' variant="koffie-solid" my='.7em' onClick={() => setLoading(true)} >SUBMIT</Button>
            </form>
            {loading && <Loading />}
            {successMsg && <div className={styles.successMsg}>{successMsg}</div>}
            {errorMsg && <div className={styles.errorMsg}>{errorMsg}</div>}
            <Heading variant='title' fontWeight='light' textAlign='center'>Already have an account? <NavLink to="/login">LogIn</NavLink></Heading>
        </div>
    )
}

export default Register