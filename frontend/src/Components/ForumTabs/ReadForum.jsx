import axios from 'axios';
import {useState, useEffect} from 'react';
import {FORUM_URL} from '../CONST.json';

const ReadForum = () => {

    //?States to View the Posts: 
    const [forumList, setForumList] = useState([]);
    const [isLoaded, setLoaded] = useStatte(false);
    const [error, setError] = useState('');

    //! Need Hooks = USE EFFECT => Triggers a side effect: 

    useEffect(()=>{
        axios.get(`${FORUM_URL}/getAll`)

    })

}

export default ReadForum;