//import './App.css';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BudgetCard from './components/BudgetCard';

function App() {
  return (
    <Container className="my-4 p-3 bg-dark" >
        <h1 className="me-auto text-white"> 🐖 PresuPuerco</h1>
      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "1rem", 
          alignItems: "flex-start",
        }}>

        <BudgetCard name="entretenimiento" gray amount={700} max={1000}></BudgetCard>
        <BudgetCard name="ahorro" gray amount={100} max={1000}></BudgetCard>
        <BudgetCard name="Comida" gray amount={1100} max={1000}></BudgetCard>
        </div>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <Button variant="primary" className="ms-auto">Agregar</Button>
        {/* <Button variant="outline-primary">Nueva</Button> */}
      </Stack>
    </Container>
    
  );
}

export default App;
