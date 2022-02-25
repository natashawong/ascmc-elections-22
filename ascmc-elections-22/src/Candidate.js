import React from 'react';
import "./index.css"

export default function Candidate(props) {
  return (
    <div className="candidate">
        {props.candidateInfo.map((candidate) =>
            <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignContent: 'center'}}>
                <img src={candidate.imageSource} className="canphoto" alt="Headshot of candidate"/>
                <h3>{candidate.name}</h3>
                <p style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignContent: 'center'}}>{candidate.candidateDescription}</p>
            </div>
        )}
    </div>
  );
}

