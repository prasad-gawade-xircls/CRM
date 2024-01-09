import React from 'react'
import { Info, Share2, User } from "react-feather"
import { Row, Col } from "reactstrap"

const AddBusinessNav = ({ currentStep, NavCurrentStep }) => {
  return (
    <>
      {/* <div className="customer-basic-details d-flex gap-2 justify-content-evenly ">
        <div className={` border-0 rounded btn d-flex align-items-center text-start ${currentStep === 1 ? 'active btn-primary' : ''}`} onClick={() => NavCurrentStep(1)}><User size={20} /></div>
        <div className={` border-0 rounded btn d-flex align-items-center text-start ${currentStep === 2 ? 'active btn-primary' : ''}`} onClick={() => NavCurrentStep(2)}><User size={20} /></div>
        <div className={` border-0 rounded btn d-flex align-items-center text-start ${currentStep === 3 ? 'active btn-primary' : ''}`} onClick={() => NavCurrentStep(3)}><User size={20} /></div>
        <div className={` border-0 rounded btn d-flex align-items-center text-start ${currentStep === 4 ? 'active btn-primary' : ''}`} onClick={() => NavCurrentStep(4)}><Share2 size={20} /></div>
      </div> */}
      <Row className="customer-basic-details  ">
        <Col xs={6} md={3} lg={3} className={`border-0 rounded btn ${currentStep === 1 ? 'active btn-primary' : ''}`} onClick={() => NavCurrentStep(1)}><User size={18} style={{ paddingRight: '5px' }} />Company's Basic Information</Col>
        <Col xs={6} md={3} lg={3} className={`border-0 rounded btn ${currentStep === 2 ? 'active btn-primary' : ''}`} onClick={() => NavCurrentStep(2)}><User size={18} style={{ paddingRight: '5px' }} />Company's Address Information</Col>
        <Col xs={6} md={3} lg={3} className={`border-0 rounded btn ${currentStep === 3 ? 'active btn-primary' : ''}`} onClick={() => NavCurrentStep(3)}><User size={18} style={{ paddingRight: '5px' }} />Contact Person's Basic Information</Col>
        <Col xs={6} md={3} lg={3} className={`border-0 rounded btn ${currentStep === 4 ? 'active btn-primary' : ''}`} onClick={() => NavCurrentStep(4)}><Share2 size={18} style={{ paddingRight: '5px' }} />Contact Person Address Information</Col>
      </Row>
    </>
  )
}

export default AddBusinessNav