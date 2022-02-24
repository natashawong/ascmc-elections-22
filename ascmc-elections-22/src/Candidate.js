import React from 'react';

export default function Candidate(props) {
  return (
    <div className="candidate">
        {props.candidateInfo.map((candidate) =>
            <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignContent: 'center'}}>
                <img src={candidate.imageSource} alt="Headshot of candidate"/>
                <p>{candidate.candidateDescription}</p>
            </div>
        )}
    </div>
  );
}
