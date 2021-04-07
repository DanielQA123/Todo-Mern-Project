import axios from "axios";
import { Card, CardBody, CardTitle } from "reactstrap";
import { FORUM_URL } from '../CONST.json';
import { useState } from "react";


const CreateForum = ({ trigger }) => {

    //The states needed to create forum/post
    const [username, setUsername] = useState('');
    const [TodoReviewTitle, setTodoReviewTitle] = useState('');
    const [comment, setComment] = useState('');
    const [postDate, setPostDate] = useState('');

    //Submit form: 
    const create = (e) => {
        e.preventDefault();
        axios.post(`${FORUM_URL}/create`, { username, TodoReviewTitle, comment, postDate })
            .then((res) => {
                clearValues();
                trigger(res.data);
            }).catch((err) => {
                trigger.error(err);
            })
    }

    //Clearing Values:
    const clearValues = () => {
        setUsername('');
        setTodoReviewTitle('');
        setComment('');
        setPostDate('');
    }

    return (
        <>
            <section>
                <div className="bg-light border-right" id="ForumSideBar">
                    <Card>
                        <CardBody>
                            <CardTitle>Write A Review</CardTitle>
                            <form onSubmit={create}>
                                <input type="text"
                                    className="form-control"
                                    placeholder="username"
                                    value={username}
                                    onChange={({ target }) => setUsername(target.value)}
                                />

                                <input type="text"
                                    className="form-control"
                                    placeholder="TodoReviewTitle"
                                    value={TodoReviewTitle}
                                    onChange={({ target }) => setTodoReviewTitle(target.value)}
                                />

                                <input type="text"
                                    className="form-control"
                                    placeholder="comment"
                                    value={comment}
                                    onChange={({ target }) => setComment(target.value)}
                                />

                                <input type="date"
                                    className="form-control"
                                    placeholder="Post Date"
                                    value={postDate}
                                    onChange={({ target }) => setPostDate(target.value)}
                                />

                                <button type="submit" className="btn btn-outline-info">Post</button>

                            </form>
                        </CardBody>
                    </Card>
                </div>
            </section>
        </>
    )

}

export default CreateForum;