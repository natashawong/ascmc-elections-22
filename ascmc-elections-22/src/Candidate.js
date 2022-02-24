import React from 'react';

export default function Candidate(props) {
  return (
    <div className="candidate">
        {props.candidateInfo.map((candidate) =>
            <div>
                <img src={candidate.imageSource} alt="Headshot of candidate"/>
                <p>{candidate.candidateDescription}</p>
            </div>
        )}
    </div>
  );
}
