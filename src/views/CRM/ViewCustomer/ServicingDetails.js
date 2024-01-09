import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import AdvanceServerSide from "@src/views/Components/DataTable/AdvanceServerSide.js"
// import axios from 'axios'
import { useParams } from 'react-router-dom'
import { baseURL } from '../../../assets/auth/jwtService'
import moment from 'moment'

const ServicingDetails = () => {

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
        form_data.append("edit_type", "is_servicing")
        form_data.append("page", (currentPage * currentEntry))
        form_data.append("size", currentEntry)
        form_data.append("start", (currentPage * currentEntry))
        fetch(url, {
            method: "POST",
            body: form_data
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.success.servicing_obj, "kk")
                setTableData(res.success.servicing_obj)

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
            name: <>CUSTOMER <br /> NAME</>,
            minWidth: "240px",
            selector: (row) => (
                row?.servicing_customer_name ? row.servicing_customer_name : 'None'
            ),
            type: 'text'
        },
        {
            name: <>BRAND</>,
            minWidth: "100px",
            selector: (row) => (
                row?.servicing_brand ? row.servicing_brand : 'None'
            ),
            type: 'text'
        },
        {
            name: "MODEL",
            minWidth: "100px",
            selector: (row) => (
                row?.servicing_car_model ? row.servicing_car_model : 'None'
            ),
            type: 'text'
        },
        {
            name: <>VARIANT</>,
            minWidth: "100px",
            selector: (row) => (
                row?.servicing_variant ? row.servicing_variant : 'None'
            ),
            type: 'text'
        },
        {
            name: <>SERVICE<br />LOCATION</>,
            minWidth: "100px",
            selector: (row) => (
                row?.servicing_service_location ? row.servicing_service_location : 'None'
            ),
            type: 'text'
        },
        {
            name: <>JOB CARD <br /> DATE</>,
            minWidth: "120px",
            selector: (row) => (
                row?.servicing_job_card_date ? moment(row.servicing_job_card_date).format("YYYY-MM-DD") : "None"
            ),
            type: 'text'
        },
        {
            name: <>SERVICE INVOICE<br /> DATE</>,
            minWidth: "150px",
            selector: (row) => (
                row?.servicing_service_expiry_date ? moment(row.servicing_service_expiry_date).format("YYYY-MM-DD") : "None"
            ),
            type: 'text'
        },
        {
            name: <>SERVICE EXPIRY<br />DATE </>,
            minWidth: "150px",
            selector: (row) => (
                row?.servicing_service_invoice_date ? moment(row.servicing_service_invoice_date).format("YYYY-MM-DD") : "None"
            ),
            type: 'text'
        },
        {
            name: <>SERVICE INVOICE <br /> AMOUNT</>,
            minWidth: "100px",
            selector: (row) => (
                row?.servicing_service_invoice_amount ? row.servicing_service_invoice_amount : "None"),
            type: 'text'
        }

    ]


    // console.log("vehicalData", vehicalData[0])
    // console.log(tableData, "pp")
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <AdvanceServerSide
                                tableName="Servicing Details"
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
                                createText={"Add Servicing"}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ServicingDetails