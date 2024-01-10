import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import BasicinfoNav from '../../BasicinfoNav'
import BasicInfo from './BasicInfo'
import PersonalInfo from './PersonalInfo'
import IdentityProof from './IdentityProof'
import Address from './Address'
import CompanyInfo from './CompanyInfo'
import Account from './Account'
import { baseURL } from '../../../../assets/auth/jwtService'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const BasicsDetails = () => {
    const [userData, setUserData] = useState({})
    const [currentStep, setCurrentStep] = useState(1)
    const { id } = useParams()

    const NavCurrentStep = (step) => {
        setCurrentStep(step)
    }

    const handleInputChange = (e, AddressType) => {
        if (AddressType === undefined) {
            const { name, value } = e.target
            setUserData(prev => ({ ...prev, [name]: value }))
        } else if (AddressType === 'file') {
            setUserData(prevFormData => ({
                ...prevFormData,
                [e.target.name]: (e.target.files[0])
            }))
        } else {
            setUserData(prev => ({ ...prev, [AddressType]: e.value }))
        }
    }

    const getUser = () => {
        const form_data = new FormData()
        form_data.append("id", id)
        form_data.append("edit_type", "is_customer_detail")
        axios.post(`${baseURL}/customers/merchant/get_view_customer/`, form_data)
            .then((res) => {
                console.log("resp here", res.data.success[0])
                const newObject = {}
                for (const key in res.data.success[0]) {
                    if (res.data.success[0].hasOwnProperty(key) && res.data.success[0][key] !== null) {
                        newObject[key] = res.data.success[0][key]
                    }
                }
                console.log(newObject, "nw  ")
                setUserData(newObject)
                const name = newObject.customer_name.split(' ')
                const datePart = newObject?.cust_dob ? newObject?.cust_dob.substring(0, 10) : ''
                setUserData(prefData => ({
                    ...prefData,
                    cust_first_name: name[0],
                    cust_last_name: name[1],
                    cust_dob: datePart
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const postData = () => {
        // console.log(userData)
        const url = new URL(`${baseURL}/customers/merchant/add_customer/`)
        const form_data = new FormData()
        Object.entries(userData).map(([key, value]) => {
            form_data.append(key, value)
        })
        if (userData?.aadhar_pdf_file instanceof Object) {
            form_data.append("is_aadhar_file", '1')
        }
        if (userData?.pan_pdf_file instanceof Object) {
            form_data.append("is_pan_file", '1')
        }
        if (userData?.user_profile_img instanceof Object) {
            form_data.append("is_user_profile", '1')
        }
        form_data.append("customer_id", id)
        form_data.append("press_btn", 'SAVE & CLOSE')

        fetch(url, {
            method: "POST",
            body: form_data
        })
            .then((resp) => {
                if (!resp.ok) {
                    if (resp.status === 409) {
                        throw new Error('Customer already exists')
                    } else {
                        toast.error(`HTTP error! Status: ${resp.status}`)
                        throw new Error(`HTTP error! Status: ${resp.status}`)
                    }
                }
                return resp.json()
            })
            .then((resp) => {
                console.log("Response:", resp)
                toast.success('Customer saved successfully')
                getUser()
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

    console.log(userData, "pp")

    useEffect(() => {
        getUser()
    }, [])

    const AllFormData = {
        handleInputChange,
        postData,
        userData
    }

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <BasicinfoNav currentStep={currentStep} NavCurrentStep={NavCurrentStep} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <div>
                {currentStep === 1 && <BasicInfo AllFormData={AllFormData} />}
                {currentStep === 2 && <PersonalInfo AllFormData={AllFormData} />}
                {currentStep === 3 && <IdentityProof AllFormData={AllFormData} />}
                {currentStep === 4 && <Address AllFormData={AllFormData} />}
                {currentStep === 5 && <CompanyInfo AllFormData={AllFormData} />}
                {/* <button className='btn btn-primary mx-1' type='button' onClick={postData}>Save</button> */}
            </div>
        </>
    )
}

export default BasicsDetails