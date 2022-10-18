import styles from './App.module.css';
import Tasks from './components/Tasks/Tasks';
import Header from './components/Header/Header';
import BusinessContexts from './components/BusinessContexts/BusinessContexts';

function App() {
  return (
    <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <Tasks />
      <BusinessContexts />
    </main>
    </div>
  );
}

export default App;
