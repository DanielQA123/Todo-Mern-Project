import { Card, CardBody, CardTitle } from "reactstrap";
import { useState } from "react";
import axios from "axios";
import {TASK_URL} from '../CONST.json';

const CreateTask = ({trigger}) => {

    //States for the form to work
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [priority, setPriority] = useState('');
    const [startDate, setStartDate] = useState('');
    const [dueDate, setDueDate] = useState('');

    //Submit form/Submission: 
    const create = (e) => {
        e.preventDefault();
        axios.post(`${TASK_URL}/create`, {title,notes,priority,startDate,dueDate})
        .then((res)=>{
            // console.log(res.data);
            clearValues();
            trigger(res.data);
        }).catch((err) =>{
            trigger.error(err);
        })
    }

    //Clearing Values: 
    const clearValues = () => {
        setTitle('');
        setNotes('');
        setPriority('');
        setStartDate('');
        setDueDate('');
    }




    return (
        <>
            <section>
                <div className="bg-light border-right" id="SideBar">
                    <Card>
                        <CardBody>
                            <CardTitle>Create New Reminder</CardTitle>
                            <form onSubmit={create}>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Title"
                                    value={title}
                                    onChange={({ target }) => setTitle(target.value)}
                                />

                                <input type="text"
                                    className="form-control"
                                    placeholder="Notes"
                                    value={notes}
                                    onChange={({ target }) => setNotes(target.value)}
                                />

                                <input type="text"
                                    className="form-control"
                                    placeholder="Priority"
                                    value={priority}
                                    onChange={({ target }) => setPriority(target.value)}
                                />

                                <input type="date"
                                    className="form-control"
                                    placeholder="Start Date"
                                    value={startDate}
                                    onChange={({ target }) => setStartDate(target.value)}
                                />

                                <input type="date"
                                    className="form-control"
                                    placeholder="Due Date"
                                    value={dueDate}
                                    onChange={({ target }) => setDueDate(target.value)}
                                />

                                <button type="submit" className="btn btn-outline-info">Add Reminder</button>


                            </form>
                        </CardBody>
                    </Card>
                </div>

            </section>
        </>
    )
}
export default CreateTask;