import React, {useState} from 'react'
import validation from './validation'
import styles from './Form.module.css'

export default function Form(props){
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })

    const [errors , setErrors ] = useState({
        username: '',
        password: '',
    })

    function handleInputChange(e){
        setUserData({...userData, [e.target.name]: e.target.value,})
        setErrors(validation({...userData, [e.target.name]: e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.login(userData)
    }
  return (
    <div className={styles.form}>
        <form onSubmit={handleSubmit}>
            <div className={styles.form2}>
                <label htmlFor="username">Username: </label>
                <input name='username' type="text" value={userData.username} onChange={handleInputChange} />
                {!errors.username ? null : <p className={styles.danger}>{errors.username}</p>}
            </div>
            <div className={styles.form2}>
                <label htmlFor="password">Password: </label>
                <input name='password' type="password" value={userData.password} onChange={handleInputChange} />
                {!errors.password ? null : <p className={styles.danger}>{errors.password}</p>}
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
