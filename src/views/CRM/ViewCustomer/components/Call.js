import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const Call = () => {
    return (
        <>
            <Row>
                <Col md='12'>
                    <Card>
                        <CardBody>
                            <div className='text-center py-1'>
                                <div>
                                    <h4>No Calls to display</h4>
                                </div>
                                <div>
                                    <button type="button" className='btn btn-primary-main' style={{ width: "fit-content" }}>Add Call</button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Call