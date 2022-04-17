//import './App.css';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddBudgetModal from './components/AddBudgetModal';
import AddExpenseModal from './components/AddExpenseModal';
import BudgetCard from './components/BudgetCard';
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard';
import TotalBudgetCard from './components/TotalBudgetCard';
import { useState } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './contexts/BudgetsContext';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);

  }
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
          {/* <BudgetCard name="entretenimiento" gray amount={700} max={1000}></BudgetCard>
          <BudgetCard name="ahorro" gray amount={100} max={1000}></BudgetCard>
          <BudgetCard name="Comida" gray amount={1100} max={1000}></BudgetCard> */}

        {budgets.map(budget => {
          const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total+expense.amount , 0)
          return (
          <BudgetCard
            key = {budget.id}
            gray
            name = {budget.name}
            amount = {amount}
            max = {budget.max}
            onAddExpenseClick={() => openAddExpenseModal(budget.id)}
            />
          )
        })}
        <UncategorizedBudgetCard 
          onAddExpenseClick={() => openAddExpenseModal(UNCATEGORIZED_BUDGET_ID)}
            />
        <TotalBudgetCard />  
      </div>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <Button variant="primary" className="ms-auto"
          onClick={()=> setShowAddBudgetModal(true)}>Agregar Presupuesto</Button>
        <Button
          variant="outline-primary"
          onClick={openAddExpenseModal}>Nueva</Button>
      </Stack>
    </Container>
    <AddBudgetModal
      show={showAddBudgetModal}
      handleClose={() => setShowAddBudgetModal(false)}
      />
    <AddExpenseModal
      show={showAddExpenseModal}
      defaultBudgetId = {addExpenseModalBudgetId}
      handleClose={() => setShowAddExpenseModal(false)}/>

  </>
  );
}

export default App;
