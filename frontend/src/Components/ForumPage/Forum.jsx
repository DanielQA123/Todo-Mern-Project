import {useState} from 'react';
import CreateForum from '../ForumSideBar/CreateForum';
import ReadForum from '../ForumTabs/ReadForum';

const Forum = () => {

    const [view, setView] = useState('');

    const trigger = (data) =>{
        setView(data);
    }

    return(
        <div className="row">
            <div className="col-md-2">
                <CreateForum trigger={trigger}/>
            </div>
            <div className="container">
                <div className="col-md-10">
                    <div className="alert alert-success">{view}</div>
                    <ReadForum view={view} trigger={trigger}/>
                </div>
            </div>
        </div>
    )

}

export default Forum; 