const profile = {
  name: 'Krittika Agrawal',
  shortName: 'KaraxKriti',
  age: 16,
  tagline: 'Fast / Friendly / Creative / Cinematic',
  subtitle: 'Welcome To My World.',
  navItems: [
    { label: 'Start Grid', section: 'hero' },
    { label: 'Who I Am', section: 'about' },
    { label: 'Things I Love', section: 'skills' },
    { label: 'Telemetry', section: 'achievements' },
    { label: 'Race Weekend', section: 'formula' },
    { label: 'Match Day', section: 'cricket' },
    { label: 'Beyond Track', section: 'hobbies' },
    { label: 'Moments', section: 'gallery' },
    { label: 'Final Lap', section: 'contact' }
  ],
  hero: {
    eyebrow: 'Start Grid',
    titleLines: ["Hey, I'm Krittika 👋", 'Welcome To My World.'],
    typingPhrases: [
      'Formula One Fan',
      'Photography Lover',
      'Series Enthusiast',
      'Sports Lover',
      'Creative Artist',
      'Music Listener',
      'Parkour Enthusiast'
    ],
    subtitle: "I'm Krittika, 16, and this is my world in motion: race weekends, cricket energy, photographs, sketches, stories, music, shopping plans, sports days, and little adventures that make everything feel more alive.",
    cta: 'Explore My World',
    secondaryCta: 'Take A Lap',
    kicker: 'Apple polish / Porsche pace / Red Bull energy',
    stats: [
      { label: 'Age', value: '16' },
      { label: 'Favorite Team', value: 'Red Bull' },
      { label: 'Mood', value: 'Lights Out' }
    ],
    image: 'assets/images/1.jpg'
  },
  about: {
    eyebrow: 'Who Am I?',
    title: 'Who Am I?',
    description: "I'm friendly, energetic, and always pulled toward things with a story: a dramatic race, a close match, a photo that catches the right second, a drawing that starts from nowhere, or a song that suddenly fits the whole day. I like helping people, trying things that feel adventurous, and turning ordinary moments into something worth remembering.",
    timeline: [
      { year: 'F1', event: 'Race weekends are my favorite kind of suspense: strategy, speed, pressure, and lights-out drama.' },
      { year: 'CAM', event: 'Photography helps me keep the tiny moments that would otherwise rush past.' },
      { year: 'PLAY', event: 'Cricket, badminton, volleyball, and parkour keep my energy switched on.' },
      { year: 'ART', event: 'Drawing and storytelling give my imagination somewhere stylish to land.' }
    ],
    highlights: [
      { label: 'Energy', value: 'Sporty' },
      { label: 'Vibe', value: 'Friendly' },
      { label: 'Creative Side', value: 'Always On' }
    ],
    image: 'assets/images/2.jpg'
  },
  interests: [
    { title: 'Formula One', description: 'Lights out, strategy calls, blue HUD energy, and every overtake that changes the mood.', level: 100, icon: 'F1' },
    { title: 'Photography', description: 'Catching real memories with a cinematic eye for light, motion, and tiny details.', level: 94, icon: 'CAM' },
    { title: 'Films & Series', description: 'Stories, twists, comfort episodes, and scenes that stay in your head later.', level: 96, icon: 'TV' },
    { title: 'Cricket', description: 'Big-match pressure, comeback energy, favorite players, and scoreboard drama.', level: 98, icon: 'BAT' },
    { title: 'Music', description: 'The soundtrack for every mood, plan, walk, and late-night thought.', level: 95, icon: 'MUS' },
    { title: 'Shopping', description: 'A tiny adventure in finding something cool, personal, and perfectly timed.', level: 92, icon: 'BAG' },
    { title: 'Badminton', description: 'Quick rallies, sharp reactions, and the fun of friendly competition.', level: 96, icon: 'BMT' },
    { title: 'Volleyball', description: 'Team spirit, movement, timing, and the feeling of winning a point together.', level: 96, icon: 'VLY' },
    { title: 'Drawing', description: 'Blank pages becoming characters, colors, shapes, and small pieces of imagination.', level: 95, icon: 'ART' },
    { title: 'Parkour', description: 'Balance, movement, confidence, and that clean rush of adventure.', level: 99, icon: 'PKR' }
  ],
  dashboard: {
    title: 'Telemetry Panel',
    subtitle: 'Personality stats tuned like a race dashboard: bright, fast, and very Krittika.',
    items: [
      { label: 'PASSION', value: 100 },
      { label: 'FRIENDLY', value: 100 },
      { label: 'HELPFUL', value: 100 },
      { label: 'CREATIVE', value: 96 },
      { label: 'DRAWING', value: 95 },
      { label: 'STORY TELLING', value: 96 },
      { label: 'PHOTOGRAPHY', value: 94 },
      { label: 'SPORTS', value: 98 },
      { label: 'PARKOUR', value: 99 },
      { label: 'MUSIC', value: 95 },
      { label: 'TEAM SPIRIT', value: 97 },
      { label: 'ADVENTURE', value: 96 },
      { label: 'F1 PASSION', value: 100 }
    ]
  },
  formulaOne: {
    hero: {
      title: 'Race Weekend',
      subtitle: 'Oracle Red Bull energy, carbon fiber texture, blue lighting, animated HUD layers, speedometer motion, and the feeling that anything can happen before turn one.',
      stats: [
        { label: 'Favorite Team', value: 'Oracle Red Bull Racing' },
        { label: 'Favorite Drivers', value: 'Max Verstappen / Oscar Piastri' },
        { label: 'Favorite Grand Prix', value: 'British Grand Prix' }
      ]
    },
    cards: [
      { title: 'Favorite Team', value: 'Oracle Red Bull Racing', description: 'Sharp race-day identity, fearless energy, and strategy that makes every lap interesting.' },
      { title: 'Favorite Drivers', value: 'Max Verstappen', description: 'Controlled, confident, and built for pressure.' },
      { title: 'Favorite Drivers', value: 'Oscar Piastri', description: 'Calm focus, clean pace, and exciting promise.' },
      { title: 'Favorite Circuits', value: 'Monaco', description: 'Cinematic, narrow, glamorous, and impossible to ignore.' },
      { title: 'Favorite Circuits', value: 'Suzuka', description: 'Fast, technical, iconic, and made for brave driving.' },
      { title: 'Favorite Grand Prix', value: 'British Grand Prix', description: 'History, atmosphere, drama, and a proper race-weekend roar.' }
    ],
    telemetry: [
      { label: 'DRS ENERGY', value: 100 },
      { label: 'RACE FOCUS', value: 97 },
      { label: 'BLUE LIGHTING', value: 96 },
      { label: 'CARBON MODE', value: 94 }
    ],
    image: 'assets/images/3.jpg'
  },
  cricket: {
    hero: {
      title: 'Match Day',
      subtitle: "Cricket has its own theatre: crowd noise, pressure overs, favorite players, and the way one moment can flip the whole scoreboard.",
      stats: [
        { label: 'Favorite IPL Team', value: 'Royal Challengers Bengaluru' },
        { label: 'Favorite Stadium', value: "Lord's" },
        { label: 'Match Energy', value: 'All In' }
      ]
    },
    cards: [
      { title: 'Favorite IPL Team', value: 'Royal Challengers Bengaluru', description: 'The colors, the passion, and the loyal match-day energy make every game louder.' },
      { title: 'Favorite Players', value: 'Virat Kohli', description: 'Intensity, confidence, and the feeling that a chase is never fully over.' },
      { title: 'Favorite Players', value: 'KL Rahul', description: 'Clean timing, calm batting, and effortless presence.' },
      { title: 'Favorite Players', value: 'Abhishek Sharma', description: 'Fresh energy, fearless shots, and a fun rhythm to watch.' },
      { title: 'Favorite Stadium', value: "Lord's", description: 'Elegant, classic, and full of cricket history.' },
      { title: 'Scoreboard Mood', value: 'Premium Pressure', description: 'Runs, wickets, overs, and tiny shifts that make match day cinematic.' }
    ]
  },
  hobbies: [
    { title: 'Photography', description: 'Cinematic frames, small details, and memories that deserve a spotlight.', tag: 'CAM', motion: 'shutter' },
    { title: 'Drawing', description: 'Ideas becoming lines, colors, characters, and calm creative focus.', tag: 'ART', motion: 'sketch' },
    { title: 'Storytelling', description: 'A simple thought turning into scenes, moods, and whole little worlds.', tag: 'INK', motion: 'reel' },
    { title: 'Music', description: 'The right song making a normal moment feel perfectly edited.', tag: 'MUS', motion: 'equalizer' },
    { title: 'Movies & Series', description: 'Comfort, suspense, drama, and the joy of getting lost in a story.', tag: 'TV', motion: 'film' },
    { title: 'Shopping', description: 'Finding something unique, stylish, and exactly right for the mood.', tag: 'BAG', motion: 'float' },
    { title: 'Parkour', description: 'Movement, balance, courage, and a clean rush of adventure.', tag: 'PKR', motion: 'trail' },
    { title: 'Badminton', description: 'Fast rallies, quick reactions, and friendly competitive fire.', tag: 'BMT', motion: 'speed' },
    { title: 'Volleyball', description: 'Teamwork, timing, and the shared joy of a perfect point.', tag: 'VLY', motion: 'bounce' }
  ],
  gallery: [
    { label: 'Start Grid Glow', image: 'assets/images/1.jpg', description: 'A premium first impression with soft blue rim light.' },
    { label: 'Who I Am', image: 'assets/images/2.jpg', description: 'A natural portrait moment for the about section.' },
    { label: 'Race Weekend', image: 'assets/images/3.jpg', description: 'Blended into the Formula One world with HUD energy.' },
    { label: 'Final Lap', image: 'assets/images/4.jpg', description: 'An elegant closing portrait with glow and softness.' }
  ],
  ending: {
    title: 'Final Lap',
    subtitle: 'Every race has a finish line.\nEvery photograph keeps a story.\nEvery memory deserves its own light.\nThanks for exploring my world.',
    image: 'assets/images/4.jpg',
    icons: [
      { label: 'Back To Top', value: 'TOP', action: 'top' },
      { label: 'Explore Again', value: 'LAP', action: 'hero' }
    ]
  },
  birthday: {
    month: 7,
    day: 10,
    timezone: 'Asia/Kolkata',
    eyebrow: 'A Special Note',
    title: 'Happy Birthday, Krittika',
    message: 'Wishing you a day filled with warmth, confidence, laughter, and all the little moments that make life feel bright. May this year bring you new adventures, beautiful memories, and every reason to keep shining in your own style.',
    signature: 'With love, KaraxKriti'
  },
  footer: {
    eyebrow: 'Final Lap',
    name: 'KaraxKriti',
    brand: 'Made with care. Inspired by speed. Driven by creativity. Built for Krittika Agrawal.',
    note: 'Made with care. Inspired by speed. Driven by creativity. Built for Krittika Agrawal.',
    image: 'assets/images/4.jpg',
    links: []
  },
  themes: [
    {
      id: 'oracleredbull',
      label: 'Oracle Red Bull',
      vars: {
        '--accent': '#1E5EFF',
        '--accent-2': '#00B7FF',
        '--highlight': '#E10600',
        '--bg-primary': '#04060F',
        '--bg-secondary': '#0A1020'
      }
    },
    {
      id: 'midnightblue',
      label: 'Midnight Blue',
      vars: {
        '--accent': '#5D7CFF',
        '--accent-2': '#63E3FF',
        '--highlight': '#FF4A74',
        '--bg-primary': '#031023',
        '--bg-secondary': '#06112A'
      }
    },
    {
      id: 'carbonblack',
      label: 'Carbon Black',
      vars: {
        '--accent': '#A3A3A3',
        '--accent-2': '#FFFFFF',
        '--highlight': '#FF2E57',
        '--bg-primary': '#020305',
        '--bg-secondary': '#090B12'
      }
    }
  ]
};

const siteData = {
  brand: {
    name: profile.shortName,
    tagline: profile.tagline,
    role: profile.subtitle,
    navItems: profile.navItems
  },
  sectionIntros: {
    about: {
      title: 'Who Am I?',
      subtitle: 'A natural introduction to the things I enjoy, the energy I carry, and the little details that feel like me.'
    },
    skills: {
      title: 'Things I Love',
      subtitle: 'The passions, sports, stories, sounds, and creative sparks that make my world feel alive.'
    },
    achievements: {
      title: profile.dashboard.title,
      subtitle: profile.dashboard.subtitle
    },
    formula: {
      title: 'Race Weekend',
      subtitle: 'Favorite team, favorite drivers, favorite circuits, and a racing world wrapped in HUD motion.'
    },
    cricket: {
      title: 'Match Day',
      subtitle: 'RCB energy, favorite players, Lord\'s elegance, and a premium scoreboard mood.'
    },
    hobbies: {
      title: 'Beyond The Track',
      subtitle: 'Photography, drawing, storytelling, music, movies, shopping, parkour, badminton, and volleyball.'
    },
    gallery: {
      title: 'Captured Moments',
      subtitle: 'A cinematic gallery using four personal images as premium visual moments.'
    },
    contact: {
      title: 'Final Lap',
      subtitle: 'A soft finish line before the next lap begins.'
    }
  },
  hero: profile.hero,
  about: profile.about,
  skills: profile.interests,
  achievements: profile.dashboard,
  formula: profile.formulaOne,
  cricket: profile.cricket,
  hobbies: profile.hobbies,
  gallery: profile.gallery,
  contact: profile.ending,
  birthday: profile.birthday,
  footer: profile.footer,
  socials: [],
  themes: profile.themes
};
