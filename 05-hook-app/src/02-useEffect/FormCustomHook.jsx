import React, { useEffect } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    })

    useEffect(() => {
    }, [email])

    return (
        <>
            <h1>Form Custom Hook</h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username} 
                onChange={ onInputChange } />

            <input
                type="email"
                className='form-control mt-2'
                placeholder='user@gmail.com'
                name='email'
                value={email} 
                onChange={ onInputChange } />

            <input
                type="password"
                className='form-control mt-2'
                placeholder='Password'
                name='password'
                value={password} 
                onChange={ onInputChange } />

                <button onClick={ onResetForm } className='btn btn-danger mt-3'>Delete</button>
        </>
    )
}
