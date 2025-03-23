import Display from './Components/Display.jsx';
import ButtonsContainer from './Components/ButtonsContainer.jsx';
import styles from './App.module.css'


function App() {
  return (
    <>
    <div className={styles.calculator}>
       <Display/>
       <ButtonsContainer/>
       </div>
    </>
  )
}
export default App;
