import {Card, CardBody,CardSubtitle, CardTitle} from 'reactstrap';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const PrimaryTask = ({item, trigger}) =>{
    return(
        <Card>
            <CardBody>
                <CardTitle>{item.title}</CardTitle>
                    <CardSubtitle>{item.notes}</CardSubtitle>
                    <div className="float-right">
                   <DeleteTask del={item._id} trigger={trigger}/>
                   <EditTask item={item} trigger={trigger}/>
                    </div>
            </CardBody>
        </Card>
    )

}
export default PrimaryTask;