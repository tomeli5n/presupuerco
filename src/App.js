//import './App.css';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
import BudgetCard from './components/BudgetCard';
import { useState } from "react"
import { useBudgets } from './contexts/BudgetsContext';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const { budgets, getBudgetExpenses } = useBudgets();
  return (
    <>
    <Container className="my-4 p-3 bg-dark" >
        <h1 className="me-auto text-white"> 🐖 PresuPuerco</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start",
          margin: "1rem",
        }}>
          <BudgetCard name="entretenimiento" gray amount={700} max={1000}></BudgetCard>
          <BudgetCard name="ahorro" gray amount={100} max={1000}></BudgetCard>
          <BudgetCard name="Comida" gray amount={1100} max={1000}></BudgetCard>

        {budgets.map(budget => {
          const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total+expense.amount , 0)
          return (
          <BudgetCard
            key = {budget.id}
            gray
            name = {budget.name}
            amount = {amount}
            max = {budget.max}
            />
          )
        })}
      </div>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <Button variant="primary" className="ms-auto" 
          onClick={()=> setShowAddBudgetModal(true)}>Agregar Presupuesto</Button>
        <Button variant="outline-primary">Nueva</Button>
      </Stack>
    </Container>
    <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
    <AddExpenseModal show/>
  </>
  );
}

export default App;
