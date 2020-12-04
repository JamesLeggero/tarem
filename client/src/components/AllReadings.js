import React from 'react'

export default function AllReadings(props) {
    return (
        <>
            {
                props.allReadings.map(reading =>{
                    return (
                        <div key={reading._id}>
                        <h4>{reading.name}</h4>
                        </div>
                    )
                })
            }
        </>
    )
}
