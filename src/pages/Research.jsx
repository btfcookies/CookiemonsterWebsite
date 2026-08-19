export default function Research() {
    return(

      <div className="work">
        <h1 className="section-header-work"><span className="hash"># </span>My Work</h1>

        <div className="work-body">
          <div className="sidebar">
            <ul>
              <li><a href="#programming">Programming</a></li>
              <li><a href="#hardware">Hardware</a></li>
              <li><a href="#research">Research</a></li>
            </ul>
          </div>

          <div className="text">
            <div id="programming">
              <h1 className="section-header"><span className="hash"># </span>Programming</h1>
              <p>I used to mainly work on game development using engines such as Unity and Roblox Studio. You can still see these projects <a href="/work" className='bio-link'>here</a>. Recently, I have shifted my focus to web development and machine learning. My current projects include Reamus, an API that converts HTML to PDFs, and Titanitron, a supervised learning model made to predict survivors of the Titanic's sinking which you can view <a href="https://github.com/btfcookies/titanic-prediction" className='bio-link'>here</a>.</p> 

              <p> Earlier this year, I merged my interests in quiz bowl in coding by making Protoreader, a packet based quiz bowl practice website. I stopped working on this in March 2026, but I am now an active contributor to <a href="https://github.com/qbreader" className='bio-link'>QBReader</a>, the most widely used quiz bowl practice website. My work on QBReader mainly involves its singleplayer functionality and its packet parser, both of which you can view on Github.</p>
            </div>
            <div id="hardware">
              <h1 className='section-header'><span className='hash'># </span>Hardware</h1>

                <p>I started exploring hardware in a computer science class where I built a fully functional slot machine using wood, cardboard, an Arduino, and some LCD screens.</p>
      
                <p>My current hardware projects include a garden box for brocolli microgreens that knows when the plants need to be watered, and a set of walkie talkies that use LoRa modules to transmit text up to 2 miles.</p>
      
            </div>
            <div id="research">
              <h1 className="section-header"><span className="hash"># </span>Research</h1>

              <p>My research journey started in August 2026, when I found out about a Python library called lightkurve. The library allows for access to NASA's MAST archive. I have used this library to study data from the Kepler and TESS telescopes, specifically data related to the flux of stars. </p>

              <p>I am currently searching for exoplanets using a search algorithm that I wrote in Python. I have also used my own parser for MAST's data, but recently I realized that there was an Astropy subpackage that could do this better. You can read more about my research in my <a href="/blog" className="bio-link">blog</a></p>
            </div>
            
          </div>
        </div>
      </div>

    )
}
