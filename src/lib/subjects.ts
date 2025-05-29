// Define subject types
export interface Subject {
  id: number;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  image: string;
  learningPoints: PointAndApproach[];
  tutorApproach: PointAndApproach[];
  // Add other fields as needed
}

export interface PointAndApproach {
  title: string;
  description: string;
}

// Export the subjects data
export const subjects: Subject[] = [
  {
    id: 1,
    title: "Mathematics",
    slug: "mathematics",
    description: "Master key mathematical concepts with personalized AI tutoring.",
    fullDescription: "Our Mathematics program covers everything from basic arithmetic to advanced calculus. With our personalized AI tutoring, students will master key mathematical concepts, build problem-solving skills, and develop confidence in tackling complex mathematical problems.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Algebra & Functions",
        description: "Learn to solve equations, work with functions, and understand algebraic concepts through interactive exercises and real-world applications."
      },
      {
        title: "Geometry & Trigonometry",
        description: "Explore shapes, angles, and spatial relationships with visual aids and step-by-step problem solving guidance."
      },
      {
        title: "Calculus",
        description: "Master differentiation, integration, and their applications with clear explanations and practice problems."
      },
      {
        title: "Statistics & Probability",
        description: "Develop data analysis skills, understand probability concepts, and learn how to interpret statistical information."
      }
    ],
    tutorApproach: [
      {
        title: "Personalized Assessment",
        description: "We begin by assessing your current knowledge and understanding to identify strengths and areas for improvement."
      },
      {
        title: "Customized Learning Path",
        description: "Our AI creates a tailored curriculum that adapts to your learning style and pace."
      },
      {
        title: "Interactive Problem Solving",
        description: "Work through problems with step-by-step guidance, receiving immediate feedback and alternative explanations when needed."
      },
      {
        title: "Regular Progress Tracking",
        description: "Monitor your improvement with detailed analytics and adjustments to your learning path as you advance."
      }
    ]
  },
  {
    id: 2,
    title: "Physics",
    slug: "physics",
    description: "Understand complex physics principles through interactive lessons.",
    fullDescription: "Our Physics program makes complex concepts accessible through interactive simulations, real-world examples, and personalized problem-solving guidance. From mechanics to quantum physics, we help students build a solid understanding of how the physical world works.",
    image: "https://images.unsplash.com/photo-1636466497217-06fe5ce66d5b?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Mechanics",
        description: "Understand forces, motion, energy, and momentum through interactive simulations and real-world applications."
      },
      {
        title: "Electricity & Magnetism",
        description: "Explore electric fields, circuits, and magnetic phenomena with visual demonstrations and problem-solving exercises."
      },
      {
        title: "Waves & Optics",
        description: "Learn about wave behavior, sound, light, and optical instruments through engaging visual content."
      },
      {
        title: "Modern Physics",
        description: "Discover relativity, quantum mechanics, and nuclear physics with simplified explanations and conceptual models."
      }
    ],
    tutorApproach: [
      {
        title: "Concept Visualization",
        description: "We use advanced simulations and visualizations to make abstract physical concepts concrete and intuitive."
      },
      {
        title: "Problem-Solving Strategies",
        description: "Learn systematic approaches to physics problems that build analytical skills and conceptual understanding."
      },
      {
        title: "Real-World Applications",
        description: "Connect theoretical physics to everyday phenomena and cutting-edge technologies to enhance relevance and engagement."
      },
      {
        title: "Adaptive Practice",
        description: "Receive customized practice problems that target your specific learning needs and gradually increase in difficulty."
      }
    ]
  },
  {
    id: 3,
    title: "Chemistry",
    slug: "chemistry",
    description: "Explore the molecular world with engaging chemistry tutorials.",
    fullDescription: "Our Chemistry program helps students understand the composition, properties, and transformations of matter through engaging visualization tools, interactive experiments, and step-by-step problem solving. From atomic structure to organic chemistry, we make complex concepts clear and accessible.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Atomic Structure & Periodicity",
        description: "Understand atomic models, electron configurations, and periodic trends through interactive visualizations."
      },
      {
        title: "Chemical Bonding & Reactions",
        description: "Learn about different types of bonds, reaction mechanisms, and stoichiometry with molecular models and simulations."
      },
      {
        title: "Thermodynamics & Kinetics",
        description: "Explore energy changes, reaction rates, and equilibrium through graphical representations and problem-solving."
      },
      {
        title: "Organic Chemistry",
        description: "Master carbon compounds, functional groups, and reaction pathways with 3D molecular visualizations."
      }
    ],
    tutorApproach: [
      {
        title: "Molecular Visualization",
        description: "We use advanced 3D models to help you visualize chemical structures and understand molecular interactions."
      },
      {
        title: "Virtual Experiments",
        description: "Experience chemical reactions and lab procedures through safe, interactive virtual simulations."
      },
      {
        title: "Conceptual Connections",
        description: "Build deep understanding by connecting new concepts to previously learned material and real-world chemistry applications."
      },
      {
        title: "Targeted Practice",
        description: "Strengthen your skills with practice problems specifically designed to address your individual learning needs."
      }
    ]
  },
  {
    id: 4,
    title: "Biology",
    slug: "biology",
    description: "Dive into the science of life with comprehensive biology lessons.",
    fullDescription: "Our Biology program explores the fascinating world of living organisms from cellular processes to ecosystem dynamics. Through detailed visualizations, interactive models, and engaging content, students develop a deep understanding of biological concepts and their applications in medicine, environmental science, and biotechnology.",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Cell Biology & Genetics",
        description: "Explore cellular structures, DNA, inheritance patterns, and gene expression through dynamic visualizations."
      },
      {
        title: "Human Anatomy & Physiology",
        description: "Learn about body systems, their functions, and interactions with detailed anatomical models and explanations."
      },
      {
        title: "Ecology & Evolution",
        description: "Understand biodiversity, population dynamics, natural selection, and evolutionary processes through case studies."
      },
      {
        title: "Molecular Biology & Biotechnology",
        description: "Discover protein synthesis, genetic engineering, and biotechnology applications with molecular-level animations."
      }
    ],
    tutorApproach: [
      {
        title: "Visual Learning",
        description: "We use detailed illustrations, animations, and models to help you visualize complex biological structures and processes."
      },
      {
        title: "Conceptual Integration",
        description: "Connect different levels of biological organization from molecules to ecosystems to build a comprehensive understanding."
      },
      {
        title: "Application Focus",
        description: "Learn how biological concepts apply to medicine, health, environmental issues, and cutting-edge research."
      },
      {
        title: "Guided Investigation",
        description: "Develop scientific thinking skills through virtual experiments, case studies, and data analysis exercises."
      }
    ]
  },
  {
    id: 5,
    title: "English",
    slug: "english",
    description: "Enhance your language skills with expert English tutoring.",
    fullDescription: "Our English program helps students master reading comprehension, writing, grammar, and literary analysis. Through personalized feedback, interactive exercises, and exposure to diverse texts, students develop strong communication skills and a deep appreciation for literature.",
    image: "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Reading Comprehension",
        description: "Develop critical reading skills, analyze different text types, and extract key information efficiently."
      },
      {
        title: "Writing & Composition",
        description: "Master essay writing, creative composition, and effective communication for different purposes and audiences."
      },
      {
        title: "Grammar & Usage",
        description: "Build a strong foundation in English grammar, syntax, and proper usage through targeted practice."
      },
      {
        title: "Literature Analysis",
        description: "Learn to interpret themes, character development, literary devices, and historical contexts in diverse texts."
      }
    ],
    tutorApproach: [
      {
        title: "Personalized Feedback",
        description: "Receive detailed, constructive feedback on your writing and analysis to target specific areas for improvement."
      },
      {
        title: "Text Engagement",
        description: "Interact with diverse texts from classic literature to contemporary writings that match your interests and learning level."
      },
      {
        title: "Skill Integration",
        description: "Develop reading, writing, speaking, and listening skills in an integrated approach that mirrors real-world communication."
      },
      {
        title: "Adaptive Learning",
        description: "Progress through customized lessons that adapt to your specific language learning needs and interests."
      }
    ]
  },
  {
    id: 6,
    title: "Computer Science",
    slug: "computer-science",
    description: "Learn programming and computing concepts with hands-on guidance.",
    fullDescription: "Our Computer Science program covers programming fundamentals, algorithms, data structures, and software development principles. Through interactive coding exercises, project-based learning, and personalized feedback, students build practical skills and computational thinking abilities essential for the digital world.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Programming Fundamentals",
        description: "Learn core programming concepts, syntax, and problem-solving approaches in languages like Python, Java, or JavaScript."
      },
      {
        title: "Data Structures & Algorithms",
        description: "Master essential data organizations and algorithmic techniques for efficient problem solving."
      },
      {
        title: "Web Development",
        description: "Build responsive websites and web applications using HTML, CSS, JavaScript, and modern frameworks."
      },
      {
        title: "Computer Science Theory",
        description: "Understand computing principles, computational thinking, and the theoretical foundations of computer science."
      }
    ],
    tutorApproach: [
      {
        title: "Interactive Coding",
        description: "Practice programming in real-time with immediate feedback and guidance through our interactive coding environment."
      },
      {
        title: "Project-Based Learning",
        description: "Apply your skills to meaningful projects that reinforce concepts and build your portfolio of work."
      },
      {
        title: "Visual Explanations",
        description: "Understand complex algorithms and data structures through animations and visual representations."
      },
      {
        title: "Debugging Support",
        description: "Learn effective troubleshooting techniques with AI-powered assistance to identify and fix code issues."
      }
    ]
  },
  {
    id: 7,
    title: "History",
    slug: "history",
    description: "Explore the past with engaging and informative history lessons.",
    fullDescription: "Our History program takes students on a journey through time, exploring key events, movements, cultures, and individuals that have shaped our world. Through primary sources, interactive timelines, and engaging narratives, students develop historical thinking skills and a deeper understanding of human experience across different eras and civilizations.",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "World History",
        description: "Explore major civilizations, global interactions, and transformative events across different time periods and regions."
      },
      {
        title: "Historical Analysis",
        description: "Develop skills in evaluating primary sources, understanding historical perspectives, and recognizing cause and effect."
      },
      {
        title: "Cultural & Social History",
        description: "Examine how societies have evolved, including social structures, belief systems, art, and everyday life."
      },
      {
        title: "Modern History & Current Events",
        description: "Connect historical developments to contemporary issues and understand the origins of today's global challenges."
      }
    ],
    tutorApproach: [
      {
        title: "Narrative Engagement",
        description: "Experience history through compelling stories and accounts that bring the past to life."
      },
      {
        title: "Visual Timeline Learning",
        description: "Use interactive timelines and maps to visualize chronological relationships and geographical contexts."
      },
      {
        title: "Primary Source Analysis",
        description: "Examine historical documents, images, and artifacts with guided analysis to develop critical thinking skills."
      },
      {
        title: "Thematic Connections",
        description: "Identify patterns and themes across different time periods to develop a deeper understanding of historical processes."
      }
    ]
  },
  {
    id: 8,
    title: "Foreign Languages",
    slug: "foreign-languages",
    description: "Master new languages with interactive and immersive tutorials.",
    fullDescription: "Our Foreign Languages program offers comprehensive instruction in multiple languages through conversation practice, grammar exercises, cultural insights, and vocabulary building. With personalized feedback and adaptive learning paths, students develop practical communication skills and cultural understanding for real-world language use.",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Speaking & Pronunciation",
        description: "Develop conversational skills and authentic pronunciation through interactive speaking exercises with instant feedback."
      },
      {
        title: "Grammar & Syntax",
        description: "Master language structures and rules through contextual learning and progressive practice exercises."
      },
      {
        title: "Vocabulary Building",
        description: "Expand your word bank through themed lessons, spaced repetition, and real-world usage examples."
      },
      {
        title: "Cultural Understanding",
        description: "Gain insights into the cultures where your target language is spoken, enhancing comprehension and appropriate usage."
      }
    ],
    tutorApproach: [
      {
        title: "Immersive Learning",
        description: "Experience language in context through dialogues, stories, and simulated real-life situations."
      },
      {
        title: "Adaptive Practice",
        description: "Receive personalized exercises that focus on your specific needs and adapt as your proficiency grows."
      },
      {
        title: "Multi-Modal Engagement",
        description: "Develop all language skills—reading, writing, speaking, and listening—through varied interactive activities."
      },
      {
        title: "Progress Tracking",
        description: "Monitor your language growth with detailed insights into your strengths and areas for improvement."
      }
    ]
  }
];

// Helper function to get a subject by slug
export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find(subject => subject.slug === slug);
}

// Helper function to get all subject slugs (useful for static generation)
export function getAllSubjectSlugs(): string[] {
  return subjects.map(subject => subject.slug);
}
