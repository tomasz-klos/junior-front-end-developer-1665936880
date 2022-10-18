import styles from './App.module.css';
import Tasks from './components/Tasks/Tasks';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <Tasks />
    </main>
    </div>
  );
}

export default App;
