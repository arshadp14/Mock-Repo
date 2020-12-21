import React from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ReportNews = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"

                        required
                        autoFocus
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as="textarea" rows="3"
                        name="firstName"

                        required
                        autoFocus
                    />
                </Form.Group>
                <Button
                    as="input"
                    type="submit"
                    value="Report news"
                    variant="success"
                    block
                />
            </Form>
        </div>
    )
};

export default ReportNews;
