import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { baseURL } from '@src/assets/auth/jwtService.js'
import Select from "react-select"
import toast from "react-hot-toast"

const ViewFinance = () => {
  const [formData, setFormData] = useState({})

  const { id } = useParams()

  console.log(formData)

  const formatDate = (inputDate) => {
    const parts = inputDate.split('-')
    if (parts.length === 3 && parts[0].length === 2 && parts[1].length === 2 && parts[2].length === 4) {
      const parsedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
      const formattedDate = parsedDate.toISOString().split('T')[0]
      return formattedDate
    }
    return inputDate
  }

  const fetchFinanceData = (id) => {
    const url = new URL(`${baseURL}/customers/merchant/get_view_customer/`)
    const form_data = new FormData()
    form_data.append("id", id)
    form_data.append('edit_type', 'is_finance')
    fetch(url, {
      method: "POST",
      body: form_data
    })
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        // console.log("ResponseId:", resp.success[0])
        const newObject = {}
        for (const key in resp.success[0]) {
          if (resp.success[0].hasOwnProperty(key) && resp.success[0][key] !== null) {
            newObject[key] = resp.success[0][key]
          }
        }
        // console.log('AfterRemovingNullId', newObject)
        setFormData(newObject)
        setFormData(prefData => ({
          ...prefData,
          policy_expiry_date: prefData?.policy_expiry_date ? formatDate(prefData?.policy_expiry_date.substring(0, 10)) : '',
          Loan_Disbursement_Date: prefData?.Loan_Disbursement_Date ? formatDate(prefData?.Loan_Disbursement_Date.substring(0, 10)) : '',
          Emi_Start_Date: prefData?.Emi_Start_Date ? formatDate(prefData?.Emi_Start_Date.substring(0, 10)) : '',
          Emi_End_Date: prefData?.Emi_End_Date ? formatDate(prefData?.Emi_End_Date.substring(0, 10)) : ''
        }))
      })
      .catch((error) => {
        console.error("Error:", error)
        toast.error('Failed to fetch Servicing Detail')
      })
  }

  useEffect(() => {
    fetchFinanceData(id)
  }, [])

  return (
    <>
      <Card>
        <CardBody>
          <Container fluid className="px-0 py-1">
            <Row>
              <Col md={6} className="mt-2">
                <label htmlFor="basicDetails-client-type" className="form-label" style={{ margin: '0px' }}>
                  Client
                </label>
                <Select
                  placeholder='Client Type'
                  id="basicDetails-client-type"
                  value={{ value: formData?.customer_name, label: formData?.customer_name }}
                  isDisabled={true}
                  closeMenuOnSelect={true}
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="basicDetails-Bank-name">
                  Bank Name
                </label>
                <input placeholder="Bank Name" type='text' id='basicDetails-Bank-name' name='Bank_Name' className="form-control"
                  value={formData?.Bank_Name}
                  disabled
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="basicDetails-loan-type" className="form-label" style={{ margin: '0px' }}>
                  Loan Type
                </label>
                <Select
                  placeholder='Loan Type'
                  id="basicDetails-loan-type"
                  value={{ value: formData?.Loan_Type, label: formData?.Loan_Type }}
                  closeMenuOnSelect={true}
                  isDisabled={true}
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="basicDetails-rot">
                  Rate of Interest - %
                </label>
                <input placeholder="Rate of Interest" type='tel' id='basicDetails-rot' name='Rate_of_Interest' className="form-control"
                  value={formData?.Rate_of_Interest}
                  disabled
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="basicDetails-loan-acc-number">
                  Loan Account Number
                </label>
                <input placeholder="Loan Account Number" type='tel' id='basicDetails-loan-acc-number' name='Loan_Number' className="form-control"
                  value={formData?.Loan_Number}
                  disabled
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="basicDetails-financeproduct-ame">
                  Finance Product Name
                </label>
                <input placeholder="Finance Product Name" type='tel' id='basicDetails-financeproduct-ame' name='Loan_Number' className="form-control"
                  value={formData?.Loan_Number}
                  disabled
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="basicDetails-bank-acc-number">
                  Bank Account Number
                </label>
                <input placeholder="Bank Account Number" type='tel' id='basicDetails-bank-acc-number' name='Bank_Number' className="form-control"
                  value={formData?.Bank_Number}
                  disabled
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="basicDetails-loan-amount">
                  Loan Amount - ₹
                </label>
                <input placeholder="Loan Amount" type='tel' id='basicDetails-loan-amount' name='Loan_amount' className="form-control"
                  value={formData?.Loan_amount}
                  disabled
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="loan-disbursement">Loan Disbursement Date</label>
                <input
                  placeholder="Loan Disbursement Date"
                  type="date"
                  id="personalDetails-dob"
                  name="Loan_Disbursement_Date"
                  className="form-control"
                  value={formData?.Loan_Disbursement_Date}
                  disabled
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="tenure-label" className="form-label" style={{ margin: '0px' }}>
                  Tenure
                </label>
                <Select
                  placeholder='Tenure'
                  id="tenure-label"
                  value={{ value: formData?.Tenor, label: formData?.Tenor }}
                  closeMenuOnSelect={true}
                  isDisabled={true}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mt-2">
                <h4 className="mb-0">EMI Details</h4>
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="basicDetails-emi">
                  EMI Amount - ₹
                </label>
                <input required placeholder="EMI Amount" type='tel' id='basicDetails-emi' name='Emi_Amount' className="form-control"
                  value={formData?.Emi_Amount}
                  disabled
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="bank-hypothecation">
                  Bank Hypothecation
                </label>
                <input required placeholder="Bank Hypothecation" type='text' id='bank-hypothecation' name='Bank_Hypothecation' className="form-control"
                  value={formData?.Bank_Hypothecation}
                  disabled
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="basicDetails-tenure">
                  Number of Tenure
                </label>
                <input required placeholder="Number of Tenure" id='basicDetails-tenure' name='no_of_tenure' className="form-control"
                  value={formData?.no_of_tenure}
                  disabled
                />
              </Col>
              <Col md={6} className="mt-2">
                <label htmlFor="frequency-label">
                  Frequency
                </label>
                <input required placeholder="Frequency" id='frequency-label' name='no_of_tenure' className="form-control"
                  value={formData?.frequency}
                  disabled
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
                  disabled
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
                  disabled
                />
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </>
  )
}

export default ViewFinance