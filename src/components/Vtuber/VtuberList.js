import React, { useMemo } from 'react'
import { getVtuberByPublisher } from '../../helpers/getVtuberByPublisher'
import { VtuberCard } from './VtuberCard';

export const VtuberList = ({ publisher }) => {
    const vtubers = useMemo(() => getVtuberByPublisher(publisher), [publisher]);

  return (
    <div className="row animate__animated animate__fadeIn">
        
            {
                vtubers.map( vtuber => (
                    <VtuberCard
                        key={vtuber.id}
                        {...vtuber}
                    />
                ))
            }

    </div>
  )
}
