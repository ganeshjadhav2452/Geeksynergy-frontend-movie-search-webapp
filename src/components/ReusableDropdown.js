import React from 'react'

const ReusableDropdown = ({ list, title }) => {
    return (
        <>

            <option value="none">Select a {title}</option>
            {
                list.map((element) => {
                    return <option value={element}>{element}</option>
                })
            }


        </>
    )
}

export default ReusableDropdown