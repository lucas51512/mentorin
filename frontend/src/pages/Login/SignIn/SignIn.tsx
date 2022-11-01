import { useContext } from "react";
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { Google, LockOutlined, MailOutline } from "@mui/icons-material";
import styles from "./SignIn.module.css";
import imgLogo from "../../../assets/imgLogo2.svg"
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../../services/firebase'
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string
        }
    }
}

const schema = zod.object({
    email: zod.string().email('Digite um email válido').nonempty('Digite seu email'),
    password: zod.string().min(8, 'A senha deve conter pelo menos 8 carácteres').nonempty('Digite sua senha'),
})

type NewFormData = zod.infer<typeof schema>

export function SignIn() {

    const { signIn, createNewUser } = useContext(UserContext)

    const { register, handleSubmit, reset, formState } = useForm<NewFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                createNewUser(result.user)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    async function handleNewSignIn(data: NewFormData){
       await signIn(data)
    }

    const { errors } = formState as unknown as ErrorsType

    return (
        <div className={styles.loginBody}>
            <div className={styles.formHeader}>
                <img src={imgLogo} />
            </div>
            <div className={styles.formBody}>
                <h1>Fazer Login</h1>
                <form onSubmit={handleSubmit(handleNewSignIn)}>
                    <div className={styles.iconInput}>
                        <div>
                            <MailOutline fontSize="small" />
                            <input placeholder="Email" id="email" {...register('email')} />
                        </div>
                        <span>{errors.email?.message}</span>
                    </div>
                    <div className={styles.iconInput}>
                        <div>
                            <LockOutlined fontSize="small" />
                            <input type="password" id="password" placeholder="Senha"  {...register('password')} />
                        </div>
                        <span>{errors.password?.message}</span>
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
                    <button className={styles.login} type="submit">
                        <a>Login</a>
                    </button>
                    <div className={styles.options}>
                        <button className={styles.google} type="button" onClick={handleGoogleSignIn}>
                            <Google /> Entre com o Google
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