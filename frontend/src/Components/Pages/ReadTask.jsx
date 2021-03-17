import axios from 'axios';
import {useState, useEffect} from 'react';
import {Spinner} from 'reactstrap';
import {TASK_URL} from '../CONST.json';
import PrimaryTask from './PrimaryTask';

const ReadTask = ({view}) => {
   
   //States To view Reminders: 
   const [taskList, setTaskList] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);
   const [error, setError] = useState('');

   //Hook = Use Effect => triggers a side effect: 

   useEffect( ()=>{
       axios.get(`${TASK_URL}/getAll`)
       .then((res) =>{
           setIsLoaded(true);
           setTaskList(res.data);
       })
       .catch((err) =>{
           setIsLoaded(true);
           setError(err.message);

       })
   },[view]);


   if(error){
       return<p>{error}</p>
   }else if (!isLoaded){
       return<Spinner animation="border" role="status"/>
   }else{
       return(
           <div className="row">
               {taskList.map((item) =>(
                   <div className="col-md-12">
                   <PrimaryTask key={item._id} item={item}/> 
                   </div>
               ))}

           </div>
       )
   }

}

export default ReadTask;