import React from 'react';
import Candidate from './Candidate';
import {candidate_data} from './candidate_info/candidate_data';

function App() {
  return (
    <div>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "25%", marginRight: "25%", textAlign: "center", alignItems: "center"}}>
          <h1>ASCMC Election Statements</h1>
          <Candidate candidateInfo={candidate_data}/>
        </div>
    </div>
  );
}

export default App;
