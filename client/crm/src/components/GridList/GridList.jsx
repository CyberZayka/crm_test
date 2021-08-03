import React from 'react'
import { CardCompany, CardEmployee } from '../Card/Card';
import useHttp from '../../hooks/http.hook';

import { GridList } from '@material-ui/core';

const RemoveCard = (card, pathCard) => {

    fetch(`/api/${pathCard}`, {
        method: "DELETE",
        body: JSON.stringify(card),
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("userToken"))
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))

}

export function CompaniesList({list}) {
    const pathCard = "companies"
    return (
        <GridList cols={1} padding={5} cellHeight="auto">
            {
                list && 
                list.map((object, index) => {
                    return <CardCompany
                        key={index}
                        company={object.companyName}
                        mail={object.mail}
                        website={object.website}
                        removeCard={() => RemoveCard(object, pathCard)}
                    />
                })
            }
       </GridList>
      );
}

export function EmployeesList({list}) {
    return (
        <GridList cols={1} padding={5} cellHeight="auto">
            {
                list && 
                list.map((object, index) => {
                    return <CardEmployee
                        key={index}
                        index={index}
                        firstName={object.firstName}
                        lastName={object.lastName}
                        mail={object.mail}
                        company={object.company}
                        phone={object.phone}
                        logo={object.logo}
                    />
                })
            }
       </GridList>
      );
}