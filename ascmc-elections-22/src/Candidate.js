import React from 'react';
import "./index.css"

export default function Candidate(props) {
  return (
    <div className="candidate">
        {props.candidateInfo.map((candidate) =>
            <div style={{display: 'flex', flexDirection: "column", placeContent: 'center', alignItems: 'center'}}>
                <img src={candidate.imageSource} className="canphoto" alt="Headshot of candidate"/>
                <h3>{candidate.name}</h3>
                {candidate.candidateDescription.map((p) => <p style={{display: 'flex', flexDirection: "column"}}>{p}</p>)
}              
            </div>
        )}
    </div>
  );
}

// style="display: flex;flex-direction: column;place-content: center;align-items: center;"
// , justifyContent: 'center', alignContent: 'center'