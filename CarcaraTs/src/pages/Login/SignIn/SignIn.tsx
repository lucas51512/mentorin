import { useContext, useState } from "react";
import { Google, LockOutlined, MailOutline } from "@mui/icons-material";
import styles from "./SignIn.module.css";
import imgLogo from "../../../assets/imgLogo2.svg"
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../../../services/firebase'

export function SignIn() {

    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            createNewUser(result.user)
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const { createNewUser } = useContext(UserContext)

    return (
        <div className={styles.loginBody}>
            <div className={styles.formHeader}>
                <img src={imgLogo} />
            </div>
            <div className={styles.formBody}>
                <h1>Fazer Login</h1>
                <form>
                    <div className={styles.iconInput}>
                        <MailOutline fontSize="small" />
                        <input placeholder="Email" />
                    </div>
                    <div className={styles.iconInput}>
                        <LockOutlined fontSize="small" />
                        <input type="password" placeholder="Senha" />
                    </div>
                    <div className={styles.formOptions}>
                        <div className={styles.checkbox}>
                            <input className={styles.inputCheckbox} type="checkbox" />
                            <p>Lembrar-me</p>
                        </div>
                        <NavLink to={"/forgetPassword"}>
                            <a>Esqueceu sua senha?</a>
                        </NavLink>
                    </div>
                    <NavLink className={styles.login} to={"/home"}>
                        <a>Login</a>
                    </NavLink>
                    <div className={styles.options}>
                        <button className={styles.google} type="button" onClick={handleGoogleSignIn}>
                             <Google/> Entre com o Google
                        </button>
                    </div>
                    <div className={styles.signUp}>
                        <p>ou</p>
                        <NavLink to={"/signUp"}>
                            <a>Cadastre-se!</a>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}