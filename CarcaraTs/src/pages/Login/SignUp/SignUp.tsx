import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styles from "./SignUp.module.css"
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
    firstName: zod.string().nonempty('Digite seu nome completo'),
    lastName: zod.string().nonempty('Digite seu nome completo'),
    email: zod.string().email('Digite um email válido').nonempty('Digite seu email'),
    password: zod.string().min(8, 'A senha deve conter pelo menos 8 carácteres').nonempty('Digite sua senha'),
    confirmPassword: zod.string().nonempty('Confirme sua senha'),
    phone: zod.string().nonempty('Digite seu celular')
})

type NewFormData = zod.infer<typeof schema>

export function SignUp() {

    const {register, handleSubmit, reset, formState} = useForm<NewFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: ''
        }
    })

    const { errors } = formState as unknown as ErrorsType

    function handelCreateNewForm(data: NewFormData){
        console.log(data)
        reset()
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.formHeader}>
                <h1>Cadastre-se</h1>
            </div>
            <div className={styles.formBody}>
                <h1>Dados Pessoais</h1>
                <form onSubmit={handleSubmit(handelCreateNewForm)}>
                    <div className={styles.input}>
                        <div className={styles.first}>
                            <input placeholder="Nome" id="firstName" {...register('firstName')} />
                            <span>{errors.firstName?.message}</span>
                        </div>
                        <div className={styles.last}>
                            <input placeholder="Sobrenome" id="lastName" {...register('lastName')} />
                            <span>{errors.lastName?.message}</span>
                        </div>
                        <div className={styles.email}>
                            <input placeholder="Email" id="email" {...register('email')} />
                            <span>{errors.email?.message}</span>
                        </div>
                        <div className={styles.password}>
                            <input type="password" id="password" placeholder="Senha"  {...register('password')}/>
                            <span>{errors.password?.message}</span>
                        </div>
                        <div className={styles.confirmPassword}>
                            <input type="password" id="confirmPassword" placeholder="Confirme sua senha" {...register('confirmPassword')} />
                            <span>{errors.confirmPassword?.message}</span>
                        </div>
                        <div className={styles.phone} >
                            <input placeholder="Celular" id="phone" {...register('phone')} />
                            <span>{errors.phone?.message}</span>
                        </div>
                        <div className={styles.date}>
                            <input type="date" placeholder="Data de Nascimento" />
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.confirm} type="submit">Cadastrar</button>
                        <NavLink to={"/"}>
                            <button className={styles.cancel}>Cancel</button>
                        </NavLink>
                    </div>
                </form>

            </div>
        </div>
    )
}