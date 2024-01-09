import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import AdvanceServerSide from "@src/views/Components/DataTable/AdvanceServerSide.js"
// import axios from 'axios'
import { baseURL } from '../../../../assets/auth/jwtService'
import { useParams } from 'react-router-dom'
import { Edit, Eye } from 'react-feather'

const VehicleDetails = () => {

    const { id } = useParams()
    const [tableData, setTableData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selected, setSelected] = useState([])


    const getData = ({ advanceSearchValue, currentPage, currentEntry }) => {
        setIsLoading(true)
        const form_data = new FormData()
        const url = new URL(`${baseURL}/customers/merchant/get_view_customer/`)
        Object.entries(advanceSearchValue).map(([key, value]) => value && form_data.append(key, value))
        form_data.append("id", id)
        form_data.append("edit_type", "is_vehicle")
        form_data.append("page", (currentPage * currentEntry))
        form_data.append("size", currentEntry)
        form_data.append("start", (currentPage * currentEntry))
        fetch(url, {
            method: "POST",
            body: form_data
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.success.vehicle_obj, "kk")
                setTableData(res.success.vehicle_obj)

                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoading(false)
            })
    }


    const columns = [
        {
            name: "REGISTRATION NUMBER",
            minWidth: "250px",
            selector: (row) => (
                row?.vehicle_registration_number ? row.vehicle_registration_number : 'None'
            ),
            type: 'text'
        },
        {
            name: "BRAND",
            minWidth: "250px",
            selector: (row) => (
                row?.vehicle_vehicle_brand ? row.vehicle_vehicle_brand : 'None'
            ),
            type: 'text'
        },
        {
            name: "ENGINE NO",
            minWidth: "250px",
            selector: (row) => (
                row?.vehicle_engine_no ? row.vehicle_engine_no : 'None'
            ),
            type: 'text'
        },
        {
            name: "VARIANT",
            minWidth: "250px",
            selector: (row) => (
                row?.vehicle_vehicle_variant ? row.vehicle_vehicle_variant : 'None'
            ),
            type: 'text'
        },
       
        {
            name: "ACTION",
            minWidth: "80px",
            selector: () => (
                <>
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <Eye size='17px' />
                        <Edit size='17px' />
                    </div>
                </>
            ),
            type: 'date'
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
                                tableName="Vehicle Details"
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
                                createText={"Add Vehicle"}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default VehicleDetails