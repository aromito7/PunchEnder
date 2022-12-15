import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from "react-router-dom";


const InfoBar = () => {
    const [projects, setProjects] = useState([]);
    const [projectsFunded, setProjectsFunded] = useState(0);
    const [total, setTotal] = useState(0);
    const [totalPledges, setTotalPledges] = useState(0);

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/projects');
            const data = await res.json();
            console.log("THE PROJECT DATA ----------> ", data)
            setProjects(data.projects);
            let total1 = 0;
            for (let project of projects) {
                total1 += project.current_amount;
            }
            setTotal(total1);
        })();
    }, []);

    function numberWithCommas(x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (projects.length < 1) return null;

    return (
        <div className='info-bar-wrapper'>
           <div className='info-bar-box'>
                <div className='green-giant'>
                    {/* {projects.length.toLocaleString()} */}
                </div>
                <div>
                    projects funded
                </div>
           </div>

           <div className='info-bar-box'>
                <div className='green-giant'>
                    {/* ${numberWithCommas(total)} */}
                </div>
                <div>
                    towards creative work
                </div>
           </div>
           <div className='info-bar-box'>
                <div className='green-giant'>
                    {numberWithCommas(99999999999999)}
                </div>
                <div>
                pledges
                </div>
           </div>
        </div>
    );
}

export default InfoBar;
