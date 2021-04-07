import axios from "axios"
import { CardLink } from "reactstrap";
import {FORUM_URL} from '../CONST.json';


const DeleteForum = ({del, trigger}) =>{

    //? Method or Function for deleting:
    const remove =()=>{
        axios.delete(`${FORUM_URL}/delete/${del}`)
        .then((res) =>{
            trigger("Successfully Deleted !");
        })
        .catch((err) =>{
            trigger("Error Removing Object");
        });
    }

    return(
        <CardLink className="btn btn-outline-danger" onClick={remove}> X </CardLink>
    )
}

export default DeleteForum;