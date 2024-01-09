import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import AdvanceServerSide from "@src/views/Components/DataTable/AdvanceServerSide.js"
// import axios from 'axios'
import { baseURL } from '../../../../assets/auth/jwtService'
import { useParams } from 'react-router-dom'
import moment from 'moment'

const InsuranceDetails = () => {

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
        form_data.append("edit_type", "is_insurance")
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
                setTableData(res.success.insurance_obj)
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
            minWidth: "100px",
            selector: () => serialNumber++,
            type: 'text'
        },
        {
            name: "CUSTOMER NAME",
            minWidth: "240px",
            selector: (row) => (
                row?.insurance_customer_name ? row.insurance_customer_name : 'None'
            ),
            type: 'text'
        },
        {
            name: <>BRAND</>,
            minWidth: "100px",
            selector: (row) => (
                row?.insurance_brand ? row.insurance_brand : 'None'
            ),
            type: 'text'
        },
        {
            name: "MODEL",
            minWidth: "100px",
            selector: (row) => (
                row?.insurance_car_model ? row.insurance_car_model : 'None'
            ),
            type: 'text'
        },
        {
            name: "VARIANT",
            minWidth: "100px",
            selector: (row) => (
                row?.insurance_variant ? row.insurance_variant : 'None'
            ),
            type: 'text'
        },
        {
            name: <>POLICY NUMBER</>,
            minWidth: "100px",
            selector: (row) => (
                row?.insurance_policy_number ? row.insurance_policy_number : "None"
            ),
            type: 'text'
        },
        {
            name: <>INSURANCE COMPANY</>,
            minWidth: "120px",
            selector: (row) => (
                row?.insurance_insurance_company ? row.insurance_insurance_company : 'None'
            ),
            type: 'text'
        },
        {
            name: <>POLICY PURCHASE DATE</>,
            minWidth: "150px",
            selector: (row) => (
                row?.insurance_policy_purchase_date ? moment(row.insurance_policy_purchase_date).format("YYYY-MM-DD") : 'None'
            ),
            type: 'text'
        },
        {
            name: <>POLICY EXPIRY DATE </>,
            minWidth: "150px",
            selector: (row) => (
                row?.insurance_policy_expiry_date ? moment(row.insurance_policy_expiry_date).format("YYYY-MM-DD") : 'None'
            ),
            type: 'text'
        },
        {
            name: "AMOUNT",
            minWidth: "100px",
            selector: (row) => (
                row?.finance_Emi_Start_Date ? row.finance_Emi_Start_Date : "None"),
            type: 'text'
        }

    ]

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <AdvanceServerSide
                                tableName="Insurance Details"
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
                                createText={"Add Insurance"}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default InsuranceDetails