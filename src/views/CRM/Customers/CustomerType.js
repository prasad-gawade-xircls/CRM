import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap"

const CustomerType = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <h5>Customer Type</h5>
                </CardHeader>
            </Card>
            <Card>
                <CardBody>
                    <div className=''>
                        <Row>
                            <Col md='6' className='rounded shadow'>
                                <Link to={'/merchant/customers/add_customer'}>
                                    Add an Individual
                                </Link>
                            </Col>
                            <Col md='6' className='rounded shadow'>
                                <Link to={'/merchant/customers/add_business'}>
                                    Add a Business
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default CustomerType