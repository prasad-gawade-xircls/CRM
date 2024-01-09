import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import AdvanceServerSide from "@src/views/Components/DataTable/AdvanceServerSide.js"
// import axios from 'axios'
import { baseURL } from '../../../../assets/auth/jwtService'
import { useParams } from 'react-router-dom'
import { Edit, Eye } from 'react-feather'

const FinanceDetails = () => {

    const { id } = useParams()
    const [tableData, setTableData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selected, setSelected] = useState([])
    let serialNumber = 1


    const getData = ({ advanceSearchValue, currentPage, currentEntry }) => {
        setIsLoading(true)
        const form_data = new FormData()
        const url = new URL(`${baseURL}/customers/merchant/get_view_customer/`)
        Object.entries(advanceSearchValue).map(([key, value]) => value && form_data.append(key, value))
        form_data.append("id", id)
        form_data.append("edit_type", "is_finance")
        form_data.append("page", (currentPage * currentEntry))
        form_data.append("size", currentEntry)
        form_data.append("start", (currentPage * currentEntry))
        fetch(url, {
            method: "POST",
            body: form_data
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.success[0])
                setTableData(res.success.finance_obj)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }


    const columns = [
        {
            name: "SR NO.",
            minWidth: "70px",
            selector: () => serialNumber++, 
            type: 'text'
        },
        {
            name: <>VEHICLE <br/> NUMBER</>,
            minWidth: "110px",
            selector: (row) => (
                row?.finance_vehicle_details ? row.finance_vehicle_details : 'None'
            ),
            type: 'text'
        },
        {
            name: <>BANK <br/> NAME</>,
            minWidth: "100px",
            selector: (row) => (
                row?.finance_Bank_Name ? row.finance_Bank_Name : 'None'
            ),
            type: 'text'
        },
        {
            name: <>LOAN <br/> NUMBER</>,
            minWidth: "110px",
            selector: (row) => (
                row?.finance_Loan_Number ? row.finance_Loan_Number : 'None'
            ),
            type: 'text'
        },
        {
            name: <>LOAN <br/> TYPE</>,
            minWidth: "100px",
            selector: (row) => (
                row?.finance_Loan_Type ? row.finance_Loan_Type : 'None'
            ),
            type: 'text'
        },
        {
            name: <>DISBURSE <br/> DATE</>,
            minWidth: "150px",
            selector: (row) => (
                row?.finance_Loan_Disbursement_Date ? row.finance_Loan_Disbursement_Date : 'None'
            ),
            type: 'date'
        },
        {
            name: <>RATE OF <br/> INTEREST</>,
            minWidth: "110px",
            selector: (row) => (
                row?.finance_Rate_of_Interest ? row.finance_Rate_of_Interest : 'None'
            ),
            type: 'text'
        },
        {
            name: <>LOAN <br/> AMOUNT</>,
            minWidth: "100px",
            selector: (row) => (
                row?.finance_Loan_amount ? row.finance_Loan_amount : 'None'
            ),
            type: 'text'
        },
        {
            name: <>EMI <br/> AMOUNT</>,
            minWidth: "100px",
            selector: (row) => (
                row?.finance_Emi_Amount ? row.finance_Emi_Amount : 'None'
            ),
            type: 'text'
        },
        {
            name: <>EMI START<br/>DATE</>,
            minWidth: "150px",
            selector: (row) => (
                row?.finance_Emi_Start_Date ? row.finance_Emi_Start_Date : 'None'
            ),
            type: 'date'
        },
        {
            name: <>EMI END <br/> DATE</>,
            minWidth: "150px",
            selector: (row) => (
                row?.finance_Emi_End_Date ? row.finance_Emi_End_Date : 'None'
            ),
            type: 'date'
        },
        {
            name: "ACTION",
            minWidth: "80px",
            selector: () => (
                <>
                <div className='d-flex justify-content-center align-items-center gap-1'>
                    <Eye size='15px'/>
                    <Edit size='15px'/>
                </div>
                </>
            ),
            type: 'date'
        }
    ]

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <AdvanceServerSide
                                tableName="Finance Details"
                                tableCol={columns}
                                data={tableData}
                                isLoading={isLoading}
                                getData={getData}
                                count={tableData?.recordsTotal}
                                selectableRows={true}
                                setSelectedRows={setSelected}
                                selectedRows={selected}
                                advanceFilter={true}
                                create={true}
                                createLink={"/"}
                                createText={"Add Finance"}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default FinanceDetails