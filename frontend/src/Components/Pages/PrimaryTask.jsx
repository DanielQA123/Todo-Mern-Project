import {Card, CardBody, CardSubtitle, CardTitle} from 'reactstrap';

const PrimaryTask = ({item}) =>{
    return(
        <Card>
            <CardBody>
                <CardTitle>{item.title}</CardTitle>
                    <CardSubtitle>{item.notes}</CardSubtitle>
            </CardBody>
        </Card>
    )

}
export default PrimaryTask;