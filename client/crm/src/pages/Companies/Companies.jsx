import React,{ useEffect, useState} from 'react'
import {CompaniesList} from "../../components/GridList/GridList"

function Companies() {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        fetch("/api/companies")
        .then(res => res.json())
        .then(data => setCompanies(...data))
    }, [])

    return (
        <CompaniesList list={companies.company} />
    );
}

export default Companies;