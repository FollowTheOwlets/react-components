import './App.css';
import { Calendar } from './components/Calendar';

function App() {
  const now = new Date(2023, 5, 25);

  return (
    <Calendar date ={now} />
  );
}

export default App;
