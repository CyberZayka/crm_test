import React,{ useEffect, useState} from 'react'
import {EmployeesList} from "../../components/GridList/GridList"


function Employees() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch("/api/employees")
        .then(res => res.json())
        .then(data => setEmployees(...data))
    }, [])

    return (
        <>
            <EmployeesList list={employees.employee} />
        </>
    );
}

export default Employees;