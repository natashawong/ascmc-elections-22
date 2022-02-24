import React from 'react';
import Candidate from './Candidate';
import {president_candidate_data, evp_candidate_data} from './candidate_info/candidate_data';

function App() {
  return (
    <div>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "25%", marginRight: "25%", textAlign: "center", alignItems: "center"}}>
          <h1>ASCMC Election Statements</h1>
          <h2>President</h2>
          <Candidate candidateInfo={president_candidate_data}/>
          <h2>EVPresident</h2>
          <Candidate candidateInfo={evp_candidate_data}/>
        </div>
    </div>
  );
}

export default App;
