import axios from 'axios';
import { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import { FORUM_URL } from '../CONST.json';
import PrimaryForum from '../ForumPage/PrimaryForum';

const ReadForum = ({ view, trigger }) => {

    //?States to View the Posts: 
    const [forumList, setForumList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    //! Need Hooks = USE EFFECT => Triggers a side effect: 

    useEffect(() => {
        axios.get(`${FORUM_URL}/getAll`)
            .then((res) => {
                setIsLoaded(true);
                setForumList(res.data);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err.message);
            })

    }, [view]);

    if (error) {
        return <p>{error}</p>
    } else if (!isLoaded) {
        return <Spinner animation="border" role="status" />
    } else {
        return (
            <div className="row">
                {forumList.map((item) => (
                    <div className="col-md-12">
                        <PrimaryForum key={item._id} item={item} trigger={trigger} />
                    </div>
                ))}

            </div>
        )
    }

}

export default ReadForum;