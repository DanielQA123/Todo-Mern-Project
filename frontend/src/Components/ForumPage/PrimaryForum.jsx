import { Card, CardBody, CardTitle } from "reactstrap"
import EditForum from "../ForumTabs/EditForum";
import DeleteForum from "../ForumTabs/DeleteForum";

const PrimaryForum = ({ item, trigger }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{item.username}</CardTitle>
                <div className="float-right">
                    <DeleteForum del={item._id} trigger={trigger} />
                    <EditForum item={item} trigger={trigger}/>
                </div>
            </CardBody>
        </Card>
    )

}

export default PrimaryForum;