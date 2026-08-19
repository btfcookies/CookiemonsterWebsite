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
      <p>Read more about my work <a href="/research" className='bio-link'>here</a></p>

      </h2>
      

      <footer>© 2026 Lawrence Tong</footer>
    </div>
  )
}

export default Home
