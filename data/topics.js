const topics = [
    {
    id: "welcome",
    subyear: 1,
    title: "Welcome to Coulomb Canvas!",
    image: "images/Avatar/Topics 1/welcome.png",
    subtopics: [
      {
        subid: "welcome-intro",
        title: "Maths! The best thing ever!",
        text: "I mean, c'mon, did you REALLY think you could get away with studying physics without knowing some maths?",
      },
      {
        subid: "features1",
        title: "Features of the website",
        text: "Get ready for the rush",
      },
            {
        subid: "features2",
        title: "More features of the website",
        text: "Get ready for the rush",
      },
      {
        subid: "dimension",
        title: "Dimensional Analysis",
        text: "Z-Arc! What?!"
      },
      {
        subid: "welcome-summary",
        title: "Dimensional Analysis",
        text: "Z-Arc! What?!"
      }
    ]
  },
     {
    id: "maths",
    subyear: 1,
    title: "Mathematics for Physics",
    image: "images/Avatar/Topics 1/maths.png",
    subtopics: [
      {
        subid: "maths-intro",
        title: "Maths! The best thing ever!",
        text: "Universe Duolingo",
        image: "images/time-dilation.png"
      },
      {
        subid: "vectors",
        title: "Vectors",
        text: "Yuuuuuuumaaaaaa!!!!!",
        image: "images/time-dilation.png"
      },
      {
        subid: "complex-numbers",
        title: "Complex Numbers",
        text: "My friend and i couldn't imagine a world without complex numbers.",
        image: "images/time-dilation.png"
      },
      {
        subid: "odes",
        title: "Differential Equations",
        text: "ODE to joy",
        image: "images/time-dilation.png"
      },
      {
        subid: "series",
        title: "Series",
        text: "Current is the same across all... oh wait, my bad, wrong topic.",
        image: "images/time-dilation.png"
      },
      {
        subid: "multivariable",
        title: "Multivariable Calculus",
        text: "Horse",
        image: "images/time-dilation.png"
      },
      {
        subid: "multiple-integrals",
        title: "Multiple Integrals",
        text: "Inter-GREAT!",
        image: "images/time-dilation.png"
      },
      {
        subid: "line-integrals",
        title: "Line, surface and volume integrals",
        text: "Ooh, big rock, must climb, but very steep",
        image: "images/time-dilation.png"
      },
      {
        subid: "fourier",
        title: "Fourier Series",
        text: "I need to go dentist, I've got a saw tooth.",
        image: "images/time-dilation.png"
      },
      {
        subid: "matrices",
        title: "Matrices",
        text: "Ave, Christus Rex!",
        image: "images/time-dilation.png"
      },
    ]
  },
  {
    id: "mechanics",
    subyear: 1,
    title: "Classical Mechanics",
    image: "images/Avatar/Topics 1/mechanics.png",
    subtopics: [
      {
        subid: "mechanics-intro",
        title: "You can become a prophet!!!",
        text: "**Terms and conditions apply...**",
        image: "images/kinematics.png"
      },
      {
        subid: "newton-laws",
        title: "Forces and Newton's Laws",
        text: "The three laws describing the relationship between a body and the forces acting on it.",
        image: "images/newton-laws.png"
      },
      {
        subid: "energy",
        title: "Work & Energy",
        text: "Get a j*b bro",
        image: "images/newton-laws.png"
      },
      {
        subid: "shm",
        title: "Simple Harmonic Motion",
        text: "I use scale 1 Stargazer Magician and scale 8 Timegazer Magician to set the Pendulum Scale.",
        image: "images/newton-laws.png"
      },
      {
        subid: "circular-motion",
        title: "Circular Motion",
        text: "Ring-a-round-the-rosie",
        image: "images/newton-laws.png"
      },
      {
        subid: "collisions",
        title: "Collisions",
        text: "Crash!!",
        image: "images/newton-laws.png"
      },
      {
        subid: "mechanics-summary",
        title: "None greater than John the Baptist",
        text: "...yet the least in the kingdom of heaven is greater than he. John 11:11.",
        image: "images/newton-laws.png"
      },
    ]
  },
  {
    id: "relativity",
    subyear: 1,
    title: "Special Relativity",
    image: "images/Avatar/Topics 1/relativity.png",
    subtopics: [
      {
        subid: "relativity-intro",
        title: '"c" what the Lord has done!',
        text: "Do-re-mi-fa, c what the Lord has done!",
        image: "images/time-dilation.png"
      },
      {
        subid: "lorentz",
        title: "Lorentz Transformations",
        text: "IDK what to put here",
        image: "images/time-dilation.png"
      },
      {
        subid: "relative-energy",
        title: "Relativistic Mass, Energy and Momentum",
        text: "Wait... no way... is that the formula I think it is?",
        image: "images/time-dilation.png"
      },
      {
        subid: "relativity-summary",
        title: "Poor Bob...",
        text: "...and poor Alice too, now that I think about it.",
        image: "images/time-dilation.png"
      },
    ]
  },
  {
    id: "thermal",
    subyear: 1,
    title: "Thermal Physics",
    image: "images/Avatar/Topics 1/thermal.png",
    subtopics: [
      {
        subid: "thermal-intro",
        title: "Introduction",
        text: "Turn up the heat, Soulburner!",
        image: "images/time-dilation.png"
      },
      {
        subid: "heat",
        title: "Heat & Temperature",
        text: "Heresy detected...",
        image: "images/time-dilation.png"
      },
      {
        subid: "properties",
        title: "Thermal Properties of Matter",
        text: "That's not ideal",
        image: "images/time-dilation.png"
      },
      {
        subid: "thermodynamics1",
        title: "The First Law of Thermodynamics",
        text: "Turn up the heat, Soulburner!.",
        image: "images/time-dilation.png"
      },
      {
        subid: "thermodynamics2",
        title: "The Second Law of Thermodynamics",
        text: "Fridge",
        image: "images/time-dilation.png"
      },
      {
        subid: "entropy",
        title: "Entropy",
        text: "The universe won't clean it's room",
        image: "images/time-dilation.png"
      },
      {
        subid: "thermal-summary",
        title: "Summary",
        text: "Turn up the heat, Odd Eyes Pendulum Dragon.",
        image: "images/time-dilation.png"
      },
    ]
  },
   {

    id: "waves",
    subyear: 1,
    title: "Waves",
    image: "images/Avatar/Topics 1/waves.png",
    subtopics: [
      {
        subid: "waves-intro",
        title: "Wub Wub Wub",
        text: "The science of dubstep (and classical music, and all music tbf)",
        image: "images/time-dilation.png"
      },
      {
        subid: "wave-phenomena",
        title: "Wave Phenomena",
        text: "Hi, how are U(x, t)?",
        image: "images/time-dilation.png"
      },
      {
        subid: "mechanical-waves",
        title: "Mechanical Waves",
        text: "Earthquake is cool",
        image: "images/time-dilation.png"
      },
      {
        subid: "standing-waves",
        title: "Standing Waves",
        text: "Levez-vous",
        image: "images/time-dilation.png"
      },
      {
        subid: "polarisation",
        title: "Polarisation",
        text: "SUNGLASS",
        image: "images/time-dilation.png"
      },
      {
        subid: "refraction",
        title: "Refraction",
        text: "Sticky mud!",
        image: "images/time-dilation.png"
      },
      {
        subid: "waves-summary",
        title: "When you see me wave, I wave like a winnerman.",
        text: "Wave goodbye!",
        image: "images/time-dilation.png"
      }
    ]
  },
   {
    id: "e-m",
    subyear: 1,
    title: "Electricity & Magnetism",
    image: "images/Avatar/Topics 1/e&m.png",
    subtopics: [
      {
        subid: "e-m-intro",
        title: "Introduction to E&M",
        text: "Magic floaty metal",
        image: "images/time-dilation.png"
      },
      {
        subid: "dc-circuits",
        title: "DC Circuits",
        text: "The easy stuff",
        image: "images/time-dilation.png"
      },
      {
        subid: "charge",
        title: "Electric Charge and Fields",
        text: "Chavalry, charge!",
        image: "images/time-dilation.png"
      },
      {
        subid: "gauss-law",
        title: "Gauss's Law",
        text: "Integration is so easy",
        image: "images/time-dilation.png"
      },
      {
        subid: "potential",
        title: "Electric Potential and Potential Energy",
        text: "SMH, it's not a 'potential energy', it's an 'energy with potential'!",
        image: "images/time-dilation.png"
      },
      {
        subid: "capacitance",
        title: "Capacitance",
        text: "Magic floaty metal",
        image: "images/time-dilation.png"
      },
      {
        subid: "magnetic-fields",
        title: "Magnetic Forces and Fields",
        text: "Magic floaty metal",
        image: "images/time-dilation.png"
      },
      {
        subid: "magnetic-sources",
        title: "Sources of Magnetic Field",
        text: "Magic floaty metal",
        image: "images/time-dilation.png"
      },
      {
        subid: "induction",
        title: "Electromagnetic Induction",
        text: "Magic floaty metal",
        image: "images/time-dilation.png"
      },
      {
        subid: "inductance",
        title: "Inductance",
        text: "Magic floaty metal",
        image: "images/time-dilation.png"
      },
      {
        subid: "ac-circuits",
        title: "AC Circuits",
        text: "Magic floaty metal",
        image: "images/time-dilation.png"
      },
      {
        subid: "e&m-summary",
        title: "Summary to E&M",
        text: "Magic floaty metal",
        image: "images/time-dilation.png"
      },
    ]
  },
   {
    id: "quantum1",
    subyear: 1,
    title: "Quantum Phenomena I",
    image: "images/Avatar/Topics 1/quantum1.png",
    subtopics: [
      {
        subid: "quantumI-intro",
        title: "Physics is bare weird y'know...",
        text: "Turns out, everything we thought we knew was a lie?!",
        image: "images/time-dilation.png"
      },
      {
        subid: "photons",
        title: "Photons",
        text: "Galaxy Eyes Photon Dragon, attack wih Photon Stream of Destruction!",
        image: "images/time-dilation.png"
      },
      {
        subid: "mass-spectra",
        title: "Mass and Spectra",
        text: "This is so Bohr-ing! (Get it? Bohr? Like, y'know, oh nvm...)",
        image: "images/time-dilation.png"
      },
      {
        subid: "quantum-mechanics",
        title: "Quantum Mechanics",
        text: "Turns out, everything we thought we knew was a lie?!",
        image: "images/time-dilation.png"
      },
      {
        subid: "use-equation",
        title: "How to solve the Schrödinger equation",
        text: "Wait... we actually have to USE differentiation?",
        image: "images/time-dilation.png"
      },
      {
        subid: "quantumI-summary",
        title: "The numbers don't lie...",
        text: "Nous avons fini!",
        image: "images/time-dilation.png"
      },
    ]
  },
   {
    id: "quantum2",
    subyear: 1,
    title: "Quantum Phenomena II",
    image: "images/Avatar/Topics 1/quantum2.png",
    subtopics: [
      {
        subid: "quantumII-intro",
        title: "Physics is still bare weird y'know...",
        text: "This stuff is still weird, but at least we can kinda visualise it now.",
        image: "images/time-dilation.png"
      },
      {
        subid: "fundamental",
        title: "Fundamental Particles and Forces",
        text: "Universe LEGO",
        image: "images/time-dilation.png"
      },
      {
        subid: "feynman-diagrams",
        title: "Feynman Diagrams",
        text: "The finest of men",
        image: "images/time-dilation.png"
      },
      {
        subid: "symmetries",
        title: "Symmetries",
        text: "Rotating a square 90 degrees has never been so interesting.",
        image: "images/time-dilation.png"
      },
      {
        subid: "probing",
        title: "Physics Probing",
        text: "Now to make some physics",
        image: "images/time-dilation.png"
      },
      {
        subid: "sources",
        title: "Sources of Particles",
        text: "Red Sauce, Brown Sauce, all kinds of sauce!",
        image: "images/time-dilation.png"
      },
      {
        subid: "sources2",
        title: "Artificial Particle Sources",
        text: "There's a card in rush duels... which looks exactly like me!",
        image: "images/time-dilation.png"
      },
      {
        subid: "detection",
        title: "Particle detection",
        text: "Peekaboo!",
        image: "images/time-dilation.png"
      },
      {
        subid: "quantumII-summary",
        title: "Pancakes are tasty",
        text: "They are quite nice",
        image: "images/time-dilation.png"
      },
    ]
  },
  {
    id: "astro",
    subyear: 1,
    title: "Astrophysics",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "astro-intro",
        title: "Aren't planets and stars cool?",
      },
      {
        subid: "celestial-sphere",
        title: "The celestial sphere",
      },
      {
        subid: "parallax",
        title: "Angles & Parallax",
      },
      {
        subid: "fluxes",
        title: "Fluxes and magnitude",
      },
      {
        subid: "telescopes",
        title: "Telescopes",
      },
      {
        subid: "colours",
        title: "Black-Bodies and Colours",
      },
      {
        subid: "masses",
        title: "Astronomical Masses",
      },
      {
        subid: "solar-system",
        title: "The solar system",
        text: "",
        image: "images/time-dilation.png"
      },
      {
        subid: "exoplanets",
        title: "Exoplanets",
      },
      {
        subid: "stars",
        title: "Stars",
      },
      {
        subid: "star-physics",
        title: "Stellar Astrophysics",
      },
      {
        subid: "galaxies",
        title: "Galaxies",
      },
      {
        subid: "universe",
        title: "The Universe",
      },
      {
        subid: "astro-summary",
        title: "THE... EARTH!!!!",
        text: "Xavier! We have to save this... for father!",
        image: "images/time-dilation.png"
      },
    ]
  },
  {
    id: "solar",
    subyear: 2,
    title: "The solar system",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "solar-intro",
        title: "Aren't planets and stars cool?",
      },
      {
        subid: "planet-motion",
      },
      {
        subid: "the-sun",
      },
      {
        subid: "terrestrial",
      },
      {
        subid: "terrestrial2",
      },
      {
        subid: "giant",
      },
      {
        subid: "other",
      },
      {
        subid: "solar-formation",
      },
      {
        subid: "ex-life",
      },
    ]
  },
  {
    id: "welback",
    subyear: 2,
    title: "Welcome Back",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "astro-intro",
        title: "Aren't planets and stars cool?",
      },
    ]
  },
  {
    id: "maths2",
    subyear: 2,
    title: "Mathematical Methods",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "maths2-intro",
        title: "Ugh, again?",
      },
      {
        subid: "diff-rev",
        title: "Differential Equations (Revisited)",
      },
      {
        subid: "pde-app",
        title: "Applications of PDEs",
      },
      {
        subid: "separation",
        title: "Separation of Variables",
      },
      {
        subid: "volumes",
        title: "Surfaces and Volumes of Revolution",
      },
      {
        subid: "vec-calculus",
        title: "Vector calculus",
      },
      {
        subid: "green",
        title: "Green's Theorem",
      },
      {
        subid: "stoke",
        title: "Stoke's Theorem",
      },
      {
        subid: "ft",
        title: "The Fourier Transform",
      },
      {
        subid: "optics",
        title: "Optics",
      },
    ]
  },
  {
    id: "computation",
    subyear: 2,
    title: "Computational Physics",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "astro-intro",
        title: "Aren't planets and stars cool?",
      },
    ]
  },
  {
    id: "stat",
    subyear: 2,
    title: "Statistical Mechanics",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "astro-intro",
        title: "Aren't planets and stars cool?",
      },
    ]
  },
  {
    id: "eto",
    subyear: 2,
    title: "Electromagnetic Theory",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "eto-intro",
        title: "Intro",
      },
      {
        subid: "maxwell-eq",
        title: "Maxwell Equations",
      },
      {
        subid: "maxwell-em",
        title: "Maxwell Equations",
      },
    ]
  },
  {
    id: "hamiltonian",
    subyear: 2,
    title: "Hamiltonian Mechanics",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "astro-intro",
        title: "Aren't planets and stars cool?",
      },
    ]
  },
  {
    id: "fluid",
    subyear: 2,
    title: "Fluid Mechanics",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "astro-intro",
        title: "Aren't planets and stars cool?",
      },
    ]
  },
  {
    id: "qaia1",
    subyear: 2,
    title: "Quantum and its Applications I",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "astro-intro",
        title: "Aren't planets and stars cool?",
      },
    ]
  },
  {
    id: "qaia2",
    subyear: 2,
    title: "Quantum and its Applications II",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "qaia2-intro",
        title: "Introduction",
      },
      {
        subid: "free-electron",
        title: "The Free Electron Model",
      },
      {
        subid: "liquid-drop",
        title: "The Liquid Drop Model",
      },
      {
        subid: "atoms-mol",
        title: "Atoms & Molecules",
      },
      {
        subid: "crystal",
        title: "Crystalline Solids",
      },
      {
        subid: "semiconductors",
        title: "Semiconductors",
      },
      {
        subid: "dirac",
        title: "Dirac Notation",
      },
    ]
  },
  {
    id: "stars",
    subyear: 2,
    title: "Stars",
    image: "images/Avatar/Topics 1/astro.png",
    subtopics: [
      {
        subid: "stars-intro",
        title: "Introduction",
      },
      {
        subid: "star-classify",
      },
      {
        subid: "star-atmosphere",
      },
      {
        subid: "radiate",
      },
      {
        subid: "star-structure",
      },
      {
        subid: "star-energy",
      },
      {
        subid: "star-formation",
      },
      {
        subid: "binary-stars",
      },
    ]
  },
  
  
  
  // Add the rest of your topics here...
];
