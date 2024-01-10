import React from 'react'
import Today from './today_service'
import Overall from './Overall_service'
import { Card, CardHeader, Button } from "reactstrap"
// import "./Leads.css"
import { Link } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5"
export default function Finance() {

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between w-100">
            <h4 className="">Servicing Dashboard</h4>
            <div className="pe-2 d-flex">
              <Link to="/merchant/customers/add-servicing/">
                <Button className="btn btn-outline-primary btn-block">Add Servicing</Button>
              </Link>
              <div
                className="ps-2 justify-content-center align-items-center d-flex"
              // style={{ width: "50px", height: "50px" }}
              >
                <IoSettingsOutline color="black" size={20} />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Today />
      <Overall />
    </div>)
}
