import { Chrono } from 'react-chrono'

const items = [
  {
    title: '2023',
    cardTitle: 'Started Programming',
    cardDetailedText:
      'I learned Python in middle school computer science and built my first 2D game prototypes with Pygame.',
  },
  {
    title: '2024',
    cardTitle: 'Founded Eightbit Games',
    cardDetailedText:
      'Started my own development studio for building and shipping personal game ideas.',
  },
  {
    title: '2024',
    cardTitle: 'Started BTF OG Edition',
    cardDetailedText:
      'Began development on BTF OG Edition, a browser RNG game that ran through 2025.'
  },
  {
    title: '2025',
    cardTitle: 'Began BTF Vibe Edition',
    cardDetailedText:
      'After a short break, I rebuilt BTF with improved systems — my first major success.'
  },
  {
    title: '2025',
    cardTitle:'Shifted Focus to Unity',
    cardDetailedText:
      'Moved on to BTF 2, building with stronger game-focused tooling.'
  },
  {
    title: '2026',
    cardTitle: 'Transfer to web dev and ML',
    cardDetailedText: 
      'I started working on projects such as Reamus, QBReader, and Titanitron'
  }
]

const theme = {
  primary: '#3b82f6',
  secondary: '#A9A9B3',
  cardBgColor: '#2f2f33',
  cardDetailsBackGround: '#2f2f33',
  cardDetailsColor: '#dcdcdc',
  cardTitleColor: '#ffffff',
  cardSubtitleColor: '#A9A9B3',
  titleColor: '#ffffff',
  titleColorActive: '#ffffff',
  timelineBgColor: 'transparent',
  iconBackgroundColor: '#292A2D',
}

function Timeline() {
  return (
    <div className="page timeline-page">
      <h2 className='page-header'>My Timeline</h2>
      <div style={{ width: '100%' }}>
        <Chrono
          items={items}
          mode="VERTICAL"
          theme={theme}
          fontSizes={{ title: '1rem', cardTitle: '1.1rem', cardText: '0.95rem' }}
          cardHeight={120}
          borderLessCards
          disableToolbar
          disableAutoScrollOnClick
        />
      </div>
    </div>
  )
}

export default Timeline
