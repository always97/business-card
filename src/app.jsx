
import styles from './app.module.css';
import Login from './components/login/login';

function App(props) {
  const {authService} = props;
  return (
    <div className={styles.app}>
      <Login authService={authService}/>
    </div>
    );
}

export default App;
