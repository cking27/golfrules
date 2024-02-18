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

const alignAndMarginLeft = {
  textAlign: 'left',
  marginLeft: '20px'
};


const leftBorder = {
  borderLeft: '3px solid black', // Adjust border properties as needed
};

const contentMargin = {
  marginLeft: '20px', // Adjust margin as needed
};


function App() {
  return (
    <div className="App" >

      <header className="App-header2">
      <img src="./charlie.jpg" className="App-logo2" alt="logo" style={{ maxWidth: '100%', height: 'auto' }} />

        <h1>4th Annual Charlie Tuna Open</h1>
        <h2>Monday - February 19th, 2024</h2>
      </header>
      <body>

        <p><span>Welcome Players to the 2024&nbsp;</span><strong>Charlie 'Tuna' Open!</strong><span>&nbsp; This format is a little different than our normal Loopers so you should be aware of that. I hope to make things a little&nbsp;interesting.</span></p>
        <div>&nbsp;</div>
        <div><strong style={{ fontSize:'140%',color: 'red' }} >NEW in 2024 - Charity Donation:&nbsp;</strong>This year we plan on donating food to the Hill Country Community Ministires (HCCM).  KK has been in touch. <strong style={{ textDecoration: 'underline' , color: 'red' }} >Please bring 5 Cans of Tuna for your donation. </strong>  </div>
        <div>&nbsp;</div>
        <div><strong>Note:&nbsp;</strong>We have 4 teams of 5 this year.  It's important we have the teams full so if you can't make it please let Chuck know early so we can get someone to fill in.&nbsp; The Tuna Open fee is $25!</div>
        <div>&nbsp;</div>

      
        <div style={alignAndMarginLeft} >
          <h2>The Rules</h2>
          <div style={alignLeft}>
            <ul>
              <li>Like our usual LOOPERS game, each TEAM scores based on 1 Low NET and 1 Low GROSS from their group.&nbsp; Except now we have the&nbsp;<strong>'PINK BALL'</strong>&nbsp;rule.</li>
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

            <h2><strong style={{ color: 'red' }} >NEW in 2024 - Pink Ball SKINS:&nbsp;</strong></h2>
            <div style={alignLeft}>
              <ul>
              <li>In addition to the normal pool for skins there is a seperate pot of 100$ eligible ONLY to skins won by pink ballers.</li>
              <li>Example:  You get a skin (normal looper rules) on hole #2 AND you are playing the pink ball on that hole. You split skin $$ per your shore from regular pot of skin $ + pink ball skin $.</li>

              </ul>
            </div>
            <div>&nbsp;</div>

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
              <li><i>SKin Scenario</i>  - <strong>Pink Ball Skins</strong></li>
              <ul>
                <li>Player A (playing pink ball) - gets a skin on hole #3</li>
                <li>Player B (playing pink ball) - gets a skin on hole #4</li>
                <li>Player C (NOT playing pink ball) - gets a skin on hole #14</li>
                <li>Players A, B, C split skins in normal pot. </li>
                <li>ONLY Players A & B  split skins in pink ball pot (50$ each). </li>
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
