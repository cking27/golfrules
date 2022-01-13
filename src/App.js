import './App.css';


const largeStyle = {
  fontSize: 'large',
};

const underline = {
  textDecoration: 'underline',
};

const alignLeft = {
  textAlign: 'left',
};



function App() {
  return (
    <div className="App">
      <header className="App-header2">
        <img src="./tuna.gif" className="App-logo2" alt="logo" />

        <h1>2nd Annual Charlie Tuna Open</h1>
        <h2>Monday - January 17th, 2022</h2>
      </header>
      <body>

        <p><span>Welcome Players to the second annual&nbsp;</span><strong>Charlie 'Tuna' Open!</strong><span>&nbsp; We have a new format this year that you should be aware of that I hope will make things a little&nbsp;interesting.</span></p>
        <div>&nbsp;</div>
        <div><strong>Note:&nbsp;</strong>We really need all 12 to make this work. If you can't make it please let Chuck know early so we can get someone to fill in.&nbsp; The Tuna Open fee is $25!</div>
        <div>&nbsp;</div>

        <div style={alignLeft} >
          <h2>The Rules</h2>
          <div style={alignLeft}>
            <ul>
              <li>Like our usual Mullets game, each TEAM scores based on 1 Low NET and 1 Low GROSS from their group.&nbsp; Except now we have the&nbsp;<strong>'PINK BALL'</strong>&nbsp;rule.</li>
              <li><strong>The 'PINK BALL' Rule</strong></li>
              <ul>
                <li>Each team will be given&nbsp;<strong>ONE</strong>&nbsp;pink ball.&nbsp; &nbsp;</li>
                <li>Your team&nbsp;<strong>MUST</strong>&nbsp;present this PINK BALL at the end of play to be eligible to win the team game.&nbsp; You lose it, your team is&nbsp;<strong>OUT</strong>. No pressure ....</li>
                <li>For each hole, your scorecard will indicate which team member must play the hole with the PINK BALL. You cannot choose.</li>
                <li>The player playing the PINK BALL will be given an extra stroke taken from their score on that hole.&nbsp; That is a&nbsp;good&nbsp;thing and a reward for playing with the PINK BALL pressure.&nbsp; Think SKINS !</li>
                <li>If the PINK BALL is hit out of bounds (White Stake) - Every NON PINK BALL Player on that team on that hole adds 1 to their score for that hole.</li>
              </ul>
            </ul>

            <h2>Scoring</h2>
            <div style={alignLeft}>
              <ul>
                <li><strong>Paper Scorecard</strong>  - This is the NON PINK BALL scorecard. This is the straight up score how everyone played. Don't add/subtract or do anything regarding the PINK BALL.  Just like we always do...</li>
                <li><strong>Golf Genius </strong>  Enter scores using the PINK BALL rule.  Player playing the PINK BALL subtracts one.  Everyone gets one added if the pink ball goes out of bounds on that hole.  Other than that it's the real score. </li>
              </ul>
            </div>
            <div>&nbsp;</div>

            <h2>The Teams</h2>
            <div style={alignLeft}>
              <ul>
                <li><strong>Team A</strong>  Dan, Simmer, Mapes, Rob</li>
                <li><strong>Team A</strong>  Gastwirth, Donnie, Galbraith, Mike F</li> 
                <li><strong>Team A</strong>  Zeitz, Jamie,Tuna,CCC</li>
                 </ul>
            </div>

            <h2>FAQs/Examples</h2>
            <div style={alignLeft}>
            <ul>
              <li><strong>If we hit the pink ball out of bounds and we can't find it, what happens?</strong></li>
              <ul>
                <li>Keep playing and record like we usually do (in golf genius too).</li>
                <li>You'll be taken out of contention for the team competition, but you are still in for skins, etc...</li>
              </ul>
              <div>&nbsp;</div>
              <li><i>Score Scenario</i> - <strong>Pink Ball in play the entire hole.</strong></li>
              <div>&nbsp;</div>
              <ul>
                <li>Player A (playing pink ball) - Scores 5</li>
                <li>Player B  - Scores 5</li>  
                <li>Player C  - Scores 5</li>    
                <li>Player D  - Scores 5</li>          
                <li>Paper Scorecards - Record 5/5/5/5</li>          
                <li>Golf Genius- Record <strong>4 (Player A)</strong>/5/5/5 Why? Pink ball can subtract 1 on their score.</li>          
              </ul>

              <div>&nbsp;</div>
              <li><i>Score Scenario</i>  - <strong>Pink Ball is hit Out of Bounds (White stake ONLY)</strong></li>
              <ul>
                <li>Player A (playing pink ball) - Scores 7 hits OB</li>
                <li>Player B  - Scores 5</li>  
                <li>Player C  - Scores 5</li>    
                <li>Player D  - Scores 5</li>          
                <li>Paper Scorecards - Record 7/5/5/5</li>          
                <li>Golf Genius- Record <strong>6 (Player A)</strong>/6/6/6 Why? Pink ball can subtract 1 on their score. Non Pinks must add 1</li>          
              </ul>

              <div>&nbsp;</div>
              <li><i>Score Scenario</i>  - <strong>Pink Ball is LOST!</strong></li>
              <ul>
                <li>Player A (playing pink ball) - Scores 7 hits OB</li>
                <li>Player B  - Scores 5</li>  
                <li>Player C  - Scores 5</li>    
                <li>Player D  - Scores 5</li>          
                <li>Paper Scorecards - Record 7/5/5/5</li>          
                <li>Golf Genius- Record <strong>6 (Player A)</strong>/6/6/6 Pink ball can subtract 1 on their score. Non Pinks must add 1</li>  
                <li>Play the rest of the round straight up. Your paper scorecard and GolfGenius will be same</li>          
        
              </ul>

              <div>&nbsp;</div>
              <li><strong>What about our GHIN posting?</strong></li>
              <ul>
                <li>Chuck is going to not close out golf genius until later that day. He is going to put the REAL scores in and post those. </li>
             
              </ul>
            </ul>
            </div>
          </div>
        </div>


      </body>

    </div>
  );
}

export default App;
