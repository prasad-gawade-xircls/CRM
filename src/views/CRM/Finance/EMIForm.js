import React from 'react'
import { Container, Row, Col } from "reactstrap"
import Select from "react-select"

const EMIForm = ({ formHandler }) => {

    const { handleBack, handleNext, formData, handleInputChange } = formHandler

    const accountType = [
        { value: 'Saving', label: 'Saving' },
        { value: 'Current', label: 'Current' }
    ]

    const frequencyOptions = [
        { value: 'yearly', label: 'Yearly' },
        { value: 'monthly', label: 'Monthly' },
        { value: 'weekly', label: 'Weekly' }
    ]

    return (
        <>
            <Container fluid className="px-0 py-1">
                <Row>
                    <Col md={12} className="mt-2">
                        <h4 className="mb-0">Co-Applicant Details</h4>
                    </Col>
                    <Col md={6} className="mt-2">
                        <label htmlFor="basicDetails-emi">
                            EMI Amount - ₹
                        </label>
                        <input required placeholder="EMI Amount" type='tel' pattern="[0-9]" maxLength={10} id='basicDetails-emi' name='Emi_Amount' className="form-control"
                            value={formData?.Emi_Amount}
                        onChange={ e => (handleInputChange(e))} 
                        />
                    </Col>
                    <Col md={6} className="mt-2">
                        <label htmlFor="basicDetails-tenure">
                            Number of Tenure
                        </label>
                        <input required placeholder="Number of Tenure" type='tel' pattern="[0-9]" maxLength={10} id='basicDetails-tenure' name='no_of_tenure' className="form-control"
                            value={formData?.no_of_tenure}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col md={6} className="mt-2">
                        <label htmlFor="basicDetails-frequency" className="form-label" style={{ margin: '0px' }}>
                            Frequency
                        </label>
                        <Select
                            placeholder='Frequency'
                            id="basicDetails-frequency"
                            options={frequencyOptions}
                            value={frequencyOptions?.find(option => option.value === formData?.frequency)}
                            onChange={e => (handleInputChange(e, 'frequency'))}
                            closeMenuOnSelect={true}
                        />
                    </Col>
                    <Col md={6} className="mt-2">
                        <label htmlFor="basicDetails-installment">
                            Number of Installment
                        </label>
                        <input required placeholder="Number of Installment" type='tel' pattern="[0-9]" maxLength={10} id='basicDetails-installment' name='no_of_installment' className="form-control"
                            value={formData?.no_of_installment}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col md={6} className="mt-2">
                        <label htmlFor="basicDetails-showroom-amount">
                            Ex-Showroom Amount
                        </label>
                        <input required placeholder="Ex-Showroom Amount" type='tel' pattern="[0-9]" maxLength={10} id='basicDetails-showroom-amount' name='Ex_Showroom_Amount' className="form-control"
                            value={formData?.Ex_Showroom_Amount}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col md={6} className="mt-2">
                        <label htmlFor="basicDetails-emi-number">
                            Advance EMI Number
                        </label>
                        <input required placeholder="Advance EMI Number" type='tel' pattern="[0-9]" maxLength={10} id='basicDetails-emi-number' name='No_Advance_EMI' className="form-control"
                            value={formData?.No_Advance_EMI}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col md={6} className="mt-2">
                        <label htmlFor="basicDetails-dealer-name">
                            Dealer Name
                        </label>
                        <input placeholder="Dealer Name" type='text' id='basicDetails-dealer-name' name='Dealer_Name' className="form-control"
                            value={formData?.Dealer_Name}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col md={6} className="mt-2">
                        <label htmlFor="basicDetails-acc-type" className="form-label" style={{ margin: '0px' }}>
                            Account Type
                        </label>
                        <Select
                            placeholder='Account Type'
                            id="basicDetails-acc-type"
                            value={accountType?.find(option => option.value === formData?.Account_Type)}
                            onChange={e => (handleInputChange(e, 'Account_Type'))}
                            options={accountType}
                            closeMenuOnSelect={true}
                        />
                    </Col>
                    <Col md={6} className="mt-2">
                        <label htmlFor="personalDetails-emi-start-date">EMI Start Date</label>
                        <input

                            placeholder="EMI Start Date"
                            type="date"
                            id="personalDetails-emi-start-date"
                            name="Emi_Start_Date"
                            className="form-control"
                            value={formData?.Emi_Start_Date}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col md={6} className="mt-2">
                        <label htmlFor="personalDetails-emi-end-date">EMI End Date</label>
                        <input

                            placeholder="EMI End Date"
                            type="date"
                            id="personalDetails-emi-end-date"
                            name="Emi_End_Date"
                            className="form-control"
                            value={formData?.Emi_End_Date}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col xs='12' className='mt-2'>
                        <div className='d-flex justify-content-between mt-2'>
                            <div>
                                <button className="btn btn-primary" type="button" onClick={handleBack}>Back</button>
                                <button className="btn btn-primary ms-2" type="button">Cancel</button>
                            </div>
                            <div>
                                <button className="btn btn-primary ms-2" type="button" onClick={handleNext}>Next</button>
                                {/* <button className="btn btn-primary" type="submit" >Save</button> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EMIForm