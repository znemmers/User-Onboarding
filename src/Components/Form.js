import React from 'react'

const Form = (props) => {
    const {change, submit} = props;
    const {username, email, password, tos} = props.values;
    
    const onChange = (e) => {
        const {name, value, checked, type} = e.target
        const newValue = type === 'checkbox' ? checked : value
        change(name, newValue)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        submit();
    }
    return (
        <div>
         <h1>My Onboarding Form</h1>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        name='username'
                        type='text'
                        value={username}
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input
                        name='email'
                        type='email'
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input
                        name='password'
                        type='password'
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service:
                    <input
                        name='tos'
                        type='checkbox'
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <input type='submit' value='Join the club!'/>
            </form>
        </div>
    )
}

export default Form;