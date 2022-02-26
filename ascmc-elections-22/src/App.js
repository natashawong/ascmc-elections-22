import React from 'react';
import Candidate from './Candidate';
import {president_candidate_data, evp_candidate_data, vpsa_candidate_data, dac_candidate_data, senior_candidate_data, junior_candidate_data, sophomore_candidate_data} from './candidate_info/candidate_data';
// import from "./candidate_info/candidate-pics/ascmclogo";
import ascmcLogo from './candidate_info/candidate-pics/ascmclogo.png';

function App() {
  return (
    <div>
        <div style={{display: "flex", flexDirection: "column", marginLeft: "18%", marginRight: "18%", textAlign: "left", alignItems: "center"}}>
          <h1>ASCMC General Election 2022</h1>
          <img src={ascmcLogo} className="logo" alt="ascmc logo"/>
          <h40>photo creds Caroline Bullock CMC'24</h40>
          <p> </p>
          <p>The following lists all currently declared candidates in running for elected positions for ASCMC Executive Board. All candidates below have successfully collected 200 school-wide signatures OR 50 class-wide signatures to declare their candidancy.</p>
            
          <p>The deadline to turn in signatures and become a declared candidate is Sunday 2/27 at 11:59pm. Speeches will be Monday 3/1 at snack. Contact clay22@cmc.edu with any questions</p>
          <h4 style={{color: 'red'}}><b>This website will be updated regularly with all candidates that will appear on the ballot as more join the race</b></h4>

          <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>

            <div style={{display: 'flex', flexDirection: 'column'}}>
              <h3>President</h3>
              <ul>
                <li>Josh Nagra</li>
                <li>Jon Joey Telebrico</li>
                <li>Colin Sam</li>
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

          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '10px'}}>
            <h3>Dormitory Affairs Chair</h3>
            <ul>
              <li>Kirby Kimball</li>
            </ul>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '10px'}}>
            <h3>Class President '23</h3>
            <ul>
              <li>Sam Bogen</li>
              <li>Sophie Dvorkin</li>
              <li>Amari Huang</li>
            </ul>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '10px'}}>
            <h3>Class President '24</h3>
            <ul>
              <li>Cristian Pang</li>
              <li>Ian Blaime</li>
            </ul>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10px', marginRight: '10px'}}>
            <h3>Class President '25</h3>
            <ul>
              <li>Giovanni Pierre</li>
              <li>Bryan Soh</li>
            </ul>
            </div>

          </div>

          </div>

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
          <h1>Junior Class President (2024)</h1>
          <Candidate candidateInfo={junior_candidate_data}/>
          <h1>Sophomore Class President (2025)</h1>
          <Candidate candidateInfo={sophomore_candidate_data}/>
        </div>
    </div>
  );
}

export default App;
