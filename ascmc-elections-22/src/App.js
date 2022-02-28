import React from 'react';
import Candidate from './Candidate';
import {president_candidate_data, evp_candidate_data, vpsa_candidate_data, dac_candidate_data, senior_candidate_data, junior_candidate_data, sophomore_candidate_data} from './candidate_info/candidate_data';
// import from "./candidate_info/candidate-pics/ascmclogo";
import ascmcLogo from './candidate_info/candidate-pics/ascmclogo.png';
import "./App.css";

function App() {
  return (
    <div>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "18%", marginRight: "18%", textAlign: "left", alignItems: "center"}}>
          <h1>ASCMC General Election 2022</h1>
          <img src={ascmcLogo} className="logo" alt="ascmc logo"/>
          <h40>photo creds Caroline Bullock CMC'24</h40>
          <p> </p>
          <p>The following lists all currently declared candidates in running for elected positions for ASCMC Executive Board. All candidates below have successfully collected 200 school-wide signatures OR 50 class-wide signatures to declare their candidancy.</p>
            
          <p>The deadline to turn in signatures and become a declared candidate is Sunday 2/27 at 11:59pm. Speeches will be Monday 2/28 at snack. Contact clay22@cmc.edu with any questions</p>
          <h4 style={{color: 'red'}}><b>This website will be updated regularly with all candidates that will appear on the ballot as more join the race</b></h4>

          <div style={{display: 'flex', flexDirection: 'column'}}>
          <div className="positionsLargeContainer">

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <h3>President</h3>
              <ul>
                <li>Josh Nagra</li>
                <li>Jon Joey Telebrico</li>
                <li>Colin Sam</li>
                <li>Maya Kurkhill</li>
              </ul>
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <h3>Executive Vice President</h3>
              <ul>
                <li>Zane Yamamoto</li>
              </ul>
            </div>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <h3>Vice President of Student Activities</h3>
              <ul>
                <li>Christopher LaRovere</li>
              </ul>
            </div>
          </div>

          <div className="positionsLargeContainer">
            <div className="positionContainer" style={{display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '10px'}}>
            <h3>Dormitory Affairs Chair</h3>
            <ul>
              <li>Kirby Kimball</li>
            </ul>
            </div>

            <div className="positionContainer" style={{display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '10px'}}>
            <h3>Class President '23</h3>
            <ul>
              <li>Sam Bogen</li>
              <li>Sophie Dvorkin</li>
              <li>Amari Huang</li>
            </ul>
            </div>

            <div className="positionContainer" style={{display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '10px'}}>
            <h3>Class President '24</h3>
            <ul>
              <li>Cristian Pang</li>
              <li>Ian Baime</li>
              <li>Wolfy Hutton</li>
            </ul>
            </div>

            <div className="positionContainer" style={{display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '10px'}}>
            <h3>Class President '25</h3>
            <ul>
              <li>Giovanni Pierre</li>
              <li>Bryan Soh</li>
              <li>Addison Reddinger</li>
            </ul>
            </div>

          </div>

          </div>

          <h1><u>Candidates for President</u></h1>
          <Candidate candidateInfo={president_candidate_data}/>
          <h1><u>Candidate(s) for Executive Vice President</u></h1>
          <Candidate candidateInfo={evp_candidate_data}/>
          <h1><u>Candidates for Vice President of Student Activities</u></h1>
          <Candidate candidateInfo={vpsa_candidate_data}/>
          <h1><u>Candidate(s) for Dormitory Affairs Chair</u></h1>
          <Candidate candidateInfo={dac_candidate_data}/>
          <h1><u>Candidates for Senior Class President (2023)</u></h1>
          <Candidate candidateInfo={senior_candidate_data}/>
          <h1><u>Candidates for Junior Class President (2024)</u></h1>
          <Candidate candidateInfo={junior_candidate_data}/>
          <h1><u>Candidates for Sophomore Class President (2025)</u></h1>
          <Candidate candidateInfo={sophomore_candidate_data}/>
        </div>
    </div>
  );
}

export default App;
