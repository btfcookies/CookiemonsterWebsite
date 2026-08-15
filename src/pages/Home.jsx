import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <div className="header">
      <div className="hero">
        <img
          src="/doge.jpg"
          alt="Profile"
          className='picture'
          style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Lawrence Tong').start()
          }}
          options={{
            delay: 100
          }}
        />
        <h2 className='subtitle'>Student + Fullstack Dev</h2>
      </div>
      <h2 className='bio'><span className='bloom-text'>hello there! </span>
      I'm Lawrence, a student developer trying to make an impact in the world of technology. I have been programming for 4 years, and I have spent 3 of those years as head developer at Eightbit Labs. My main interests related to programming are physics, neural systems, and machine learning. 
      
      <p>When I'm not programming, I enjoy building hardware projects, playing chess, and playing quiz bowl. You can see some of the code for my hardware projects on <a href="https://github.com/btfcookies" className='bio-link'>my Github</a>.</p>

      <h1 className='section-header'><span className='hash'># </span>Programming</h1>

      <p>I used to mainly work on game development using engines such as Unity and Roblox Studio. You can still see these projects <a href="/work" className='bio-link'>here</a>. Recently, I have shifted my focus to web development and machine learning. My current projects include Reamus, an API that converts HTML to PDFs, and Titanitron, a supervised learning model made to predict survivors of the Titanic's sinking which you can view <a href="https://github.com/btfcookies/titanic-prediction" className='bio-link'>here</a>.</p> 

      <p> Earlier this year, I merged my interests in quiz bowl in coding by making Protoreader, a packet based quiz bowl practice website. I stopped working on this in March 2026, but I am now an active contributor to <a href="https://github.com/qbreader" className='bio-link'>QBReader</a>, the most widely used quiz bowl practice website. My work on QBReader mainly involves its singleplayer functionality and its packet parser, both of which you can view on Github.</p>
      
       <h1 className='section-header'><span className='hash'># </span>Hardware</h1>

      <p>I started exploring hardware in a Computer Science class where I built a fully functional slot machine using wood, cardboard, an Arduino, and some LCD screens.</p>
      
      <p>My current hardware projects include a garden box for brocolli microgreens that knows when the plants need to be watered, and a set of walkie talkies that use LoRa modules to transmit text up to 2 miles.</p>
      </h2>

      <footer>© 2026 Lawrence Tong</footer>
    </div>
  )
}

export default Home
