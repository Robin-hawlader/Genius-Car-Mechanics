import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';

const Login = () => {
    const { signInUsingGooggle } = useAuth();
    return (
        <div>
            <h2>Please Log In</h2>
            <Button onClick={signInUsingGooggle} variant='warning'>Google Sign In</Button>
        </div>
    );
};

export default Login;