import { Outlet } from "react-router";
import styles from "./Login.module.css";

export function Login() {
    return (
        <main>
            <div className={styles.loginContainer}>
                <Outlet/>
            </div>
            <div className={styles.image}>
            
            </div>
        </main>
    )
}