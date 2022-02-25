import React from 'react';
import Candidate from './Candidate';
import {president_candidate_data, evp_candidate_data, vpsa_candidate_data, dac_candidate_data, senior_candidate_data, junior_candidate_data, sophomore_candidate_data} from './candidate_info/candidate_data';
// import from "./candidate_info/candidate-pics/ascmclogo";
import ascmcLogo from './candidate_info/candidate-pics/ascmclogo.jpg';

function App() {
  return (
    <div>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "25%", marginRight: "25%", textAlign: "center", alignItems: "center"}}>
          <h1>ASCMC Election Statements</h1>
          <img src={ascmcLogo} className="logo" alt="ascmc logo"/>
          <h2>President</h2>
          <Candidate candidateInfo={president_candidate_data}/>
          <h2>Executive Vice President</h2>
          <Candidate candidateInfo={evp_candidate_data}/>
          <h2>Vice President of Student Activities</h2>
          <Candidate candidateInfo={vpsa_candidate_data}/>
          <h2>Dormitory Affairs Chair</h2>
          <Candidate candidateInfo={dac_candidate_data}/>
          <h2>Senior Class President (2023)</h2>
          <Candidate candidateInfo={senior_candidate_data}/>
          <h2>Junior Class President (2023)</h2>
          <Candidate candidateInfo={junior_candidate_data}/>
          <h2>Sophomore Class President (2023)</h2>
          <Candidate candidateInfo={sophomore_candidate_data}/>
        </div>
    </div>
  );
}

export default App;
