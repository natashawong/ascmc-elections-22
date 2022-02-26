import React from 'react';
import Candidate from './Candidate';
import {president_candidate_data, evp_candidate_data, vpsa_candidate_data, dac_candidate_data, senior_candidate_data, junior_candidate_data, sophomore_candidate_data} from './candidate_info/candidate_data';
// import from "./candidate_info/candidate-pics/ascmclogo";
import ascmcLogo from './candidate_info/candidate-pics/ascmclogo.png';

function App() {
  return (
    <div>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "15%", marginRight: "15%", textAlign: "left", alignItems: "center"}}>
          <h1>ASCMC General Election 2022</h1>
          <img src={ascmcLogo} className="logo" alt="ascmc logo"/>
          <p>The following lists all currently declared candidates in running for elected positions in ASCMC's Executive Board. All the candidates listed below will be on the ballot. Some candidates have submitted candidate statemnts and photos. Speeches will be Monday at snack.</p>
          <h4>This website will be updated regularly with all candidates that will appear on the ballot as more join the race</h4>
          <h1>President</h1>
          <Candidate candidateInfo={president_candidate_data}/>
          <h1>Executive Vice President</h1>
          <Candidate candidateInfo={evp_candidate_data}/>
          <h1>Vice President of Student Activities</h1>
          <Candidate candidateInfo={vpsa_candidate_data}/>
          <h1>Dormitory Affairs Chair</h1>
          <Candidate candidateInfo={dac_candidate_data}/>
          <h1>Senior Class President (2023)</h1>
          <Candidate candidateInfo={senior_candidate_data}/>
          <h1>Junior Class President (2023)</h1>
          <Candidate candidateInfo={junior_candidate_data}/>
          <h1>Sophomore Class President (2023)</h1>
          <Candidate candidateInfo={sophomore_candidate_data}/>
        </div>
    </div>
  );
}

export default App;
