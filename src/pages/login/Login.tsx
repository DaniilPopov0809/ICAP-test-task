import { LoginForm } from "../../components/UI/LoginForm/LoginForm.component";
import styles from './Login.module.scss';

const Login = () => {
    return <div className={styles.wrap}>
    <h1 className={styles.title}>Login</h1>
    <LoginForm />
    </div>
}

export default Login;