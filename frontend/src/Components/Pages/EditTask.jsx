import { CardLink, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { TASK_URL } from '../CONST.json';

const EditTask = ({ item, trigger }) => {

    //Data From Database: 
    const { title, notes, priority, startDate, dueDate } = item;

    //States => States Regrading Updating a Query
    const [updateTitle, setUpTitle] = useState(title);
    const [updateNotes, setUpNotes] = useState(notes);
    const [updatePriority, setUpPriority] = useState(priority);
    const [updateStartDate, setUpStartDate] = useState(startDate);
    const [updateDueDate, setUpDueDate] = useState(dueDate);



    //Modal Information:
    const [showMyModal, setShowMyModal] = useState(false);
    const toggle = () => setShowMyModal(!showMyModal);

    //Function for Updating Todos: 
    const updateDB = (e) => {
        e.preventDefault();
        axios.patch(`${TASK_URL}/update/${item._id}`, 
        {titte:updateTitle, notes:updateNotes, priority:updatePriority, startDate:updateStartDate, dueDate:updateDueDate})
        .then((res) =>{
            trigger(res.data);
        })
        .catch((err) =>{
          trigger(err.data); 
        })
    }

    return (
        <>
            <CardLink className="btn btn-outline-warning" onClick={toggle}> EDIT </CardLink>
            <Modal isOpen={showMyModal}>
                <ModalHeader>{item.title}</ModalHeader>
                <form onSubmit={updateDB}>
                    <ModalBody>
                        <input type="text"
                            className="form-control"
                            placeholder="Title"
                            value={updateTitle}
                            onChange={({ target }) => setUpTitle(target.value)}
                        />

                        <input type="text"
                            className="form-control"
                            placeholder="Notes"
                            value={updateNotes}
                            onChange={({ target }) => setUpNotes(target.value)}
                        />

                        <input type="text"
                            className="form-control"
                            placeholder="Priority"
                            value={updatePriority}
                            onChange={({ target }) => setUpPriority(target.value)}
                        />

                        <input type="date"
                            className="form-control"
                            placeholder="Start Date"
                            value={updateStartDate}
                            onChange={({ target }) => setUpStartDate(target.value)}
                        />

                        <input type="date"
                            className="form-control"
                            placeholder="Due Date"
                            value={updateDueDate}
                            onChange={({ target }) => setUpDueDate(target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={toggle} className="btn btn-outline-danger">Cancel</button>
                        <button onClick={toggle} className="btn btn-outline-danger">Update Reminder</button>
                    </ModalFooter>
                </form>
            </Modal>
        </>
    );

}
export default EditTask;