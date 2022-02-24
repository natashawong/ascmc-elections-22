import React from 'react';
import Candidate from './Candidate';
import {candidate_data} from './candidate_info/candidate_data';

function App() {
  return (
    <div>
        <div>
          <h1>ASCMC Election Statements</h1>
          <Candidate candidateInfo={candidate_data}/>
        </div>
    </div>
  );
}

export default App;
