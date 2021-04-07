import axios from 'axios';
import { useState } from 'react';
import { CardLink, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FORUM_URL } from '../CONST.json';

const EditForum = ({ item, trigger }) => {

    //!Data From Database:
    const { username, TodoReviewTitle, comment, postDate } = item;

    //*States => States regrading Updating a Query:

    const [updateUsername, setUpUsername] = useState(username);
    const [updateTodoReviewTitle, setUpTodoReviewTitle] = useState(TodoReviewTitle);
    const [updateComment, setUpComment] = useState(comment);
    const [UpdatePostDate, setUpPostDate] = useState(postDate);

    //! Modal Information: 
    const [showMyModal, setShowMyModal] = useState(false);
    const toggle = () => setShowMyModal(!showMyModal);

    //? Function for Updating:
    const updateDB = (e) => {
        e.preventDefault();
        axios.patch(`${FORUM_URL}/update/${item._id}`,
            { username: updateUsername, TodoReviewTitle: updateTodoReviewTitle, comment: updateComment, postDate: UpdatePostDate })
            .then((res) => {
                trigger(res.data);
            })
            .catch((err) => {
                trigger(err.data);
            })
    }

    return (
        <>
            <CardLink className="btn btn-outline-warning" onClick={toggle}>EDIT</CardLink>
            <Modal isOpen={showMyModal}>
                <ModalHeader>{item.title}</ModalHeader>
                <form onSubmit={updateDB}>
                    <ModalBody>
                        <input type="text"
                            className="form-control"
                            placeholder="username"
                            value={updateUsername}
                            onChange={({ target }) => setUpUsername(target.value)}
                        />

                        <input type="text"
                            className="form-control"
                            placeholder="Review Title"
                            value={updateTodoReviewTitle}
                            onChange={({ target }) => setUpTodoReviewTitle(target.value)}
                        />

                        <input type="text"
                            className="form-control"
                            placeholder="Comment"
                            value={updateComment}
                            onChange={({ target }) => setUpComment(target.value)}
                        />

                        <input type="date"
                            className="form-control"
                            placeholder="Post Date"
                            value={UpdatePostDate}
                            onChange={({ target }) => setUpPostDate(target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={toggle} className="btn btn-outline-danger">Cancel</button>
                        <button onClick={toggle} className="btn btn-outline-danger">Update Post</button>
                    </ModalFooter>
                </form>
            </Modal>


        </>
    )


}

export default EditForum;