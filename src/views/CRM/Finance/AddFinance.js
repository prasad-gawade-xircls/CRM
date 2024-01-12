import React, { useState, useEffect } from 'react'
import { Card, CardBody } from "reactstrap"
import ApplicantForm from './Components/ApplicantForm'
import AddFinanceNav from './Components/AddFinanceNav'
import CoApplicantForm from './Components/CoApplicantForm'
import EMIForm from './Components/EMIForm'
import ReferralForm from './Components/ReferralForm'
import { baseURL } from '@src/assets/auth/jwtService.js'
import toast from "react-hot-toast"
// import financeData from './financeData'
import { useParams, useNavigate } from 'react-router-dom'

const AddFinance = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [addWithCustId, setAddWithCustId] = useState(false)

  // console.log(formData, 'formData')

  const navigate = useNavigate()
  const { id } = useParams()

  let PageTitle = 'Add Finance'
  
  const formatDate = (inputDate) => {
    const parts = inputDate.split('-')
    if (parts.length === 3 && parts[0].length === 2 && parts[1].length === 2 && parts[2].length === 4) {
      const parsedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
      const formattedDate = parsedDate.toISOString().split('T')[0]
      return formattedDate
    }
    return inputDate
  }

  const handleInputChange = (e, type) => {
    if (type === undefined) {
      const { name, value } = e.target
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }))
    } else if (type === "tel") {
      let { value } = e.target
      const { name } = e.target
      value = value.replace(/[^0-9]/g, "")
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }))
    } else if (type) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [type]: e.value
      }))
    }
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
        if (!addWithCustId) {
          const newObject = {}
          for (const key in resp.success[0]) {
            if (resp.success[0].hasOwnProperty(key) && resp.success[0][key] !== null) {
              newObject[key] = resp.success[0][key]
            }
          }
          setFormData(newObject)
          setFormData(prefData => ({
            ...prefData,
            Loan_Disbursement_Date: prefData?.Loan_Disbursement_Date ? formatDate(prefData?.Loan_Disbursement_Date.substring(0, 10)) : '',
            policy_expiry_date: prefData?.policy_expiry_date ? formatDate(prefData?.policy_expiry_date.substring(0, 10)) : ''
          }))
        }
      })
      .catch((error) => {
        console.error("Error:", error)
        toast.error('Failed to fetch Servicing Detail')
      })
  }

  const postData = (btn) => {
    console.log(formData)
    const url = new URL(`${baseURL}/customers/merchant/jmd-finance-customers/`)
    const form_data = new FormData()
    Object.entries(formData).map(([key, value]) => {
      // console.log(key, ": ", value)
      form_data.append(key, value)
    })
    form_data.append("press_btn", btn)
    if (id) {
      form_data.append("finance_id", id)
    }
    fetch(url, {
      method: "POST",
      body: form_data
    })
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        console.log("Response:", resp)
        toast.success('Finance saved successfully')
        resp.is_edit_url ? navigate(`/merchant/customers/edit_finance/${resp.finance_code}`) : navigate(`/merchant/customer/all_cust_dashboard/add_finance/`)
        fetchFinanceData(resp.finance_code)
      })
      .catch((error) => {
        console.error("Error:", error)
        if (error.message === 'Customer already exists') {
          toast.error('Customer already exists')
        } else {
          toast.error('Failed to save customer')
        }
      })
  }

  useEffect(() => {
    if (location.pathname.startsWith('/merchant/customers/add-vehicle/')) {
      console.log('This is the add vehicle page')
      fetchFinanceData(id)
      setAddWithCustId(true)
    } else if (id) {
      PageTitle = 'Edit Page'
      fetchFinanceData(id)
    }
  }, [])

  const handleNext = () => {
    setCurrentStep(prevStep => prevStep + 1)
    console.log('handleNext', currentStep)
  }

  const handleBack = () => {
    setCurrentStep(prevStep => prevStep - 1)
  }

  const NavCurrentStep = (step) => {
    setCurrentStep(step)
  }

  const handleSubmitSection = (event, btn) => {
    event.preventDefault()
    postData(btn)
    // setErrors(previousErrors => {
    //   const newErrors = validateValues(formData)
    //   if (Object.keys(newErrors).length === 0) {
    //     postData()
    //   }
    //   return newErrors
    // })
  }

  const formHandler = {
    currentStep,
    formData,
    id,
    handleInputChange,
    handleNext,
    handleBack
  }

  return (
    <>
      <div className="customer-profile">
        <Card>
          <CardBody>
            <h3 className="mb-0">{PageTitle}</h3>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <AddFinanceNav currentStep={currentStep} NavCurrentStep={NavCurrentStep} />
            <form >
              {currentStep === 1 && (
                <ApplicantForm formHandler={formHandler} />
              )}
              {currentStep === 2 && (
                <CoApplicantForm formHandler={formHandler} />
              )}
              {currentStep === 3 && (
                <EMIForm formHandler={formHandler} />
              )}
              {currentStep === 4 && (
                <ReferralForm formHandler={formHandler} />
              )}
              <div className='w-100 d-flex justify-content-end mt-2'>
                {/* <button className="btn btn-primary" type="submit" >Save</button> */}
                <button className="btn btn-primary" type="button" onClick={e => handleSubmitSection(e, 'SAVE & CLOSE')} >Save & Close</button>
                <button className="btn btn-primary ms-2" type="button" onClick={e => handleSubmitSection(e, 'SAVE')} >Save</button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default AddFinance