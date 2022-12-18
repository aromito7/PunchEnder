import React, { useEffect, useState } from 'react';
import { useParams, NavLink, useHistory } from "react-router-dom";


const InfoBar = () => {
    const [projects, setProjects] = useState([]);
    const [projectsFunded, setProjectsFunded] = useState(0);
    const [total, setTotal] = useState(0);
    const [totalBackings, setTotalBackings] = useState(0)
    const [totalPledges, setTotalPledges] = useState(0);

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/projects');
            const data = await res.json();
            //console.log("THE PROJECT DATA --> ", data)
            setProjects(data.projects);

            let total1 = 0;
            let totalPledges = 0;
            for (let project of data.projects) {
                total1 += project.current_amount;
                for(let reward of project.rewards){
                    totalPledges += reward.users
                }
            }
            setTotal(total1);
            setTotalPledges(totalPledges)

        })();
    }, []);

    function numberWithCommas(x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className='info-bar-wrapper'>
           <div className='info-bar-box'>
                <div className='green-giant'>
                    {projects.length.toLocaleString()}
                </div>
                <div>
                    projects funded
                </div>
           </div>

           <div className='info-bar-box'>
                <div className='green-giant'>
                    ${numberWithCommas(total)}
                </div>
                <div>
                    towards creative work
                </div>
           </div>
           <div className='info-bar-box'>
                <div className='green-giant'>
                    {numberWithCommas(totalPledges)}
                </div>
                <div>
                pledges
                </div>
           </div>
        </div>
    );
}

export default InfoBar;
