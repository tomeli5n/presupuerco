import { Form, Modal, Button } from "react-bootstrap"

export default function addBudgetModal(show, handleClose) {

    function handleSubmit(e) {
    }

    return (
    <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Add Budget</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="max">
                    <Form.Label>Maximo</Form.Label>
                    <Form.Control type="number" required min={0} step={0.01}/>
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">ADD</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
    )
}
