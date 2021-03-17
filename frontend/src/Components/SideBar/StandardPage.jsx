import CreateTask from "./CreateTask"
import { useState } from 'react';
import ReadTask from "../Pages/ReadTask";

const Standard = () => {

    const [view, setView] = useState('');

    const trigger = (data) => {
        setView(data);
    }



    return (

        <div className="row">
            <div className="col-md-2">
                <CreateTask trigger={trigger} />
            </div>
            <div className="container">
                <div className="col-md-10">
                    <div className="alert alert-success">{view}</div>
                    <ReadTask view={view} trigger={trigger} />
                </div>
            </div>
        </div>

    )

}
export default Standard;