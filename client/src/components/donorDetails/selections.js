import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl, Card } from 'react-bootstrap';


class Selections extends Component {
    render() {


        return (
            <div >
                <Card>

                    <Card.Body>
                        <Card.Title>Donatable Organs </Card.Title>
                        <Card.Text>
                            A total of eight organs can be donated by a deceased donor. <br />
                            These can save up to 8 lives. Select from the list below to choose
                            <br /> those you prefer to be donated, when the time is right.                         </Card.Text>

                        <Form>
                            {['Heart', 'Instines', '2 Kidneys', '2 Lungs', 'Pancreas', 'Liver'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        type='checkbox'
                                        id='checkbox'
                                        label={`${type}`}
                                    />

                                    {/* <Form.Check
                                         disabled
                                         type={type}
                                         label={`disabled ${type}`}
                                         id={`disabled-default-${type}`}
                                     /> */}
                                </div>
                            ))}
                        </Form>

                        <Card.Text>By clicking on the button below,you fully have made up your
                        mind to become a donor and save lives.
                         </Card.Text>
                        <Button variant="primary">I choose to save a life</Button>
                    </Card.Body>


                </Card>

            </div>
        );
    }
}

export default Selections;
