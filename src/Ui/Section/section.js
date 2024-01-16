import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import './section.css'

const Section = (props) => {


    const{color,color2,content1,content2}=props


    return (

        <div className="section" style={{backgroundColor:color}}>


            <div className="box1">
                <h1>{content1}</h1>
            </div>
            <div className="box1">{content2}</div>
            <div style={{backgroundColor:color2}}>More Info</div>

        </div>

    )
}
export default React.memo(Section);