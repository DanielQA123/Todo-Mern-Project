import {Card, CardBody, CardTitle} from "reactstrap";

const CreateTask = () => {
    return(
        <>
        <section>
            <div className="bg-light border-right" id="SideBar">
                <Card>
                    <CardBody>
                        <CardTitle>Create Task</CardTitle>
                    </CardBody>

                </Card>
            </div>

            <h1>Create New Task</h1>
        </section>
        </>
    )
}
export default CreateTask;