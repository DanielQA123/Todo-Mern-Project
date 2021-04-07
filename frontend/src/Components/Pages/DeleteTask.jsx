import {CardLink} from 'reactstrap';
import axios from 'axios';
import {TASK_URL} from '../CONST.json';

const DeleteTask = ({del,trigger}) =>{

    //Method or Function for deleting: 
    const remove = () =>{
        axios.delete(`${TASK_URL}/delete/${del}`)
        .then ((res) =>{
            trigger("Successfully Deleted !");
        })
        .catch((err) =>{
            trigger("Error Removing Object");
        })
    }


    return(
        <CardLink className="btn btn-outline-danger" onClick={remove}> X </CardLink>
    )

}
export default DeleteTask;