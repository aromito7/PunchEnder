import React, { useEffect, useState } from 'react';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import './DiscoverProjects.css'

const Discover = () => {
  const [project, setProject ] = useState ({});

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/projects`);
      const data = await res.json();
      console.log('THE PROJECT DATA -----------> ', data)
      const arr = Object.entries(data)
      setProject(arr[0][1]);
    })();
  }, [])

  if(Object.keys(project).length < 1) return null;

  return (
    <div className='discWrapper'>
      <div className='discCards'>
        {console.log('THIS IS THE project ', typeof project === 'object', project)}
        {project.map(card =>
          <div className='projCard'>
            <NavLink className='cardLink' to={`/api/projects/${card.id}`}>
              <div id='cardImgWrap'>
                <img id='cardImg' src={card.preview_image ? card.preview_image : 'https://i.pinimg.com/originals/a5/90/8c/a5908c706c030ef3f94c2ad98e23b286.jpg'} />
              </div>

              <div className='cardDescWrapper'>
                <div id='cardTitle'>
                    {card.name ? card.name : 'Placeholder Title'}
                </div>

                <div id='cardShoDesc'>
                    {card.short_description ? card.short_description : "This is great"}
                </div>

                <div id='cardAuthor'>
                    by {card.owner_name ? card.owner_name : "Bob"}
                </div>

                <div id='cardCurrAmount'>
                    ${card.current_amount ? card.current_amount : '10000'} pleged
                </div>

                <div id='cardEndDate'>
                    {card.end_date ? card.end_date : '12/03/22'}
                </div>

                <div className='cardBotInfo'>
                  <div>
                      {card.category ? card.category : 'Comic Books'}
                  </div>
                  <div>
                      {card.city ? card.city : 'LA'}, {card.state ? card.state : "CA"}
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Discover;
