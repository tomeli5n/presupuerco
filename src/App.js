//import './App.css';
import { Button, Stack } from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';

function App() {
  return (
    <container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto"> 🐖 Presupuerco</h1>
        <Button variant="primary">Primary</Button>
        <Button variant="outline-primary">Nueva</Button>
      </Stack>
      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "1rem", 
          alignItems: "flex-start",
        }}>

        <BudgetCard name="entretenimiento" gray amount={700} max={1000}></BudgetCard>

        </div>
    </container>
    
  );
}

export default App;
