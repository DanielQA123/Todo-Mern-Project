import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainHome = () => {
    return (
        <>
        <section>
        <Jumbotron>
                <h1>Hello, welcome to our website!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Corporis laborum, dignissimos suscipit, 
                    voluptatem ducimus tempora ipsum vel nemo rem perferendis quas et illum commodi doloribus perspiciatis veniam adipisci, 
                    nobis temporibus?
                </p>
                <p>
                    <Button variant="info">Learn more</Button>
                </p>
            </Jumbotron>

        </section>
        </>
    )

}

export default MainHome;