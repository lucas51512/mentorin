import { Outlet } from "react-router";
import { Sidebar } from "../../components/sidebar/Sidebar";
import styles from "./Home.module.css";

export function Home() {
    return (
        <div className={styles.body}>
            <Sidebar />
            
            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
    )
}