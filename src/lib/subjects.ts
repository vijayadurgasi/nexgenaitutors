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
    description:
      "Master key mathematical concepts with personalized AI tutoring.",
    fullDescription:
      "Our Mathematics program covers everything from basic arithmetic to advanced calculus. With our personalized AI tutoring, students will master key mathematical concepts, build problem-solving skills, and develop confidence in tackling complex mathematical problems.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Algebra & Functions",
        description:
          "Learn to solve equations, work with functions, and understand algebraic concepts through interactive exercises and real-world applications.",
      },
      {
        title: "Geometry & Trigonometry",
        description:
          "Explore shapes, angles, and spatial relationships with visual aids and step-by-step problem solving guidance.",
      },
      {
        title: "Calculus",
        description:
          "Master differentiation, integration, and their applications with clear explanations and practice problems.",
      },
      {
        title: "Statistics & Probability",
        description:
          "Develop data analysis skills, understand probability concepts, and learn how to interpret statistical information.",
      },
    ],
    tutorApproach: [
      {
        title: "Personalized Assessment",
        description:
          "We begin by assessing your current knowledge and understanding to identify strengths and areas for improvement.",
      },
      {
        title: "Customized Learning Path",
        description:
          "Our AI creates a tailored curriculum that adapts to your learning style and pace.",
      },
      {
        title: "Interactive Problem Solving",
        description:
          "Work through problems with step-by-step guidance, receiving immediate feedback and alternative explanations when needed.",
      },
      {
        title: "Regular Progress Tracking",
        description:
          "Monitor your improvement with detailed analytics and adjustments to your learning path as you advance.",
      },
    ],
  },
  {
    id: 2,
    title: "Physics",
    slug: "physics",
    description:
      "Understand complex physics principles through interactive lessons.",
    fullDescription:
      "Our Physics program makes complex concepts accessible through interactive simulations, real-world examples, and personalized problem-solving guidance. From mechanics to quantum physics, we help students build a solid understanding of how the physical world works.",
    image:
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    learningPoints: [
      {
        title: "Mechanics",
        description:
          "Understand forces, motion, energy, and momentum through interactive simulations and real-world applications.",
      },
      {
        title: "Electricity & Magnetism",
        description:
          "Explore electric fields, circuits, and magnetic phenomena with visual demonstrations and problem-solving exercises.",
      },
      {
        title: "Waves & Optics",
        description:
          "Learn about wave behavior, sound, light, and optical instruments through engaging visual content.",
      },
      {
        title: "Modern Physics",
        description:
          "Discover relativity, quantum mechanics, and nuclear physics with simplified explanations and conceptual models.",
      },
    ],
    tutorApproach: [
      {
        title: "Concept Visualization",
        description:
          "We use advanced simulations and visualizations to make abstract physical concepts concrete and intuitive.",
      },
      {
        title: "Problem-Solving Strategies",
        description:
          "Learn systematic approaches to physics problems that build analytical skills and conceptual understanding.",
      },
      {
        title: "Real-World Applications",
        description:
          "Connect theoretical physics to everyday phenomena and cutting-edge technologies to enhance relevance and engagement.",
      },
      {
        title: "Adaptive Practice",
        description:
          "Receive customized practice problems that target your specific learning needs and gradually increase in difficulty.",
      },
    ],
  },
  {
    id: 3,
    title: "Chemistry",
    slug: "chemistry",
    description:
      "Explore the molecular world with engaging chemistry tutorials.",
    fullDescription:
      "Our Chemistry program helps students understand the composition, properties, and transformations of matter through engaging visualization tools, interactive experiments, and step-by-step problem solving. From atomic structure to organic chemistry, we make complex concepts clear and accessible.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Atomic Structure & Periodicity",
        description:
          "Understand atomic models, electron configurations, and periodic trends through interactive visualizations.",
      },
      {
        title: "Chemical Bonding & Reactions",
        description:
          "Learn about different types of bonds, reaction mechanisms, and stoichiometry with molecular models and simulations.",
      },
      {
        title: "Thermodynamics & Kinetics",
        description:
          "Explore energy changes, reaction rates, and equilibrium through graphical representations and problem-solving.",
      },
      {
        title: "Organic Chemistry",
        description:
          "Master carbon compounds, functional groups, and reaction pathways with 3D molecular visualizations.",
      },
    ],
    tutorApproach: [
      {
        title: "Molecular Visualization",
        description:
          "We use advanced 3D models to help you visualize chemical structures and understand molecular interactions.",
      },
      {
        title: "Virtual Experiments",
        description:
          "Experience chemical reactions and lab procedures through safe, interactive virtual simulations.",
      },
      {
        title: "Conceptual Connections",
        description:
          "Build deep understanding by connecting new concepts to previously learned material and real-world chemistry applications.",
      },
      {
        title: "Targeted Practice",
        description:
          "Strengthen your skills with practice problems specifically designed to address your individual learning needs.",
      },
    ],
  },
  {
    id: 4,
    title: "Biology",
    slug: "biology",
    description:
      "Dive into the science of life with comprehensive biology lessons.",
    fullDescription:
      "Our Biology program explores the fascinating world of living organisms from cellular processes to ecosystem dynamics. Through detailed visualizations, interactive models, and engaging content, students develop a deep understanding of biological concepts and their applications in medicine, environmental science, and biotechnology.",
    image:
      "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Cell Biology & Genetics",
        description:
          "Explore cellular structures, DNA, inheritance patterns, and gene expression through dynamic visualizations.",
      },
      {
        title: "Human Anatomy & Physiology",
        description:
          "Learn about body systems, their functions, and interactions with detailed anatomical models and explanations.",
      },
      {
        title: "Ecology & Evolution",
        description:
          "Understand biodiversity, population dynamics, natural selection, and evolutionary processes through case studies.",
      },
      {
        title: "Molecular Biology & Biotechnology",
        description:
          "Discover protein synthesis, genetic engineering, and biotechnology applications with molecular-level animations.",
      },
    ],
    tutorApproach: [
      {
        title: "Visual Learning",
        description:
          "We use detailed illustrations, animations, and models to help you visualize complex biological structures and processes.",
      },
      {
        title: "Conceptual Integration",
        description:
          "Connect different levels of biological organization from molecules to ecosystems to build a comprehensive understanding.",
      },
      {
        title: "Application Focus",
        description:
          "Learn how biological concepts apply to medicine, health, environmental issues, and cutting-edge research.",
      },
      {
        title: "Guided Investigation",
        description:
          "Develop scientific thinking skills through virtual experiments, case studies, and data analysis exercises.",
      },
    ],
  },
  {
    id: 5,
    title: "English",
    slug: "english",
    description: "Enhance your language skills with expert English tutoring.",
    fullDescription:
      "Our English program helps students master reading comprehension, writing, grammar, and literary analysis. Through personalized feedback, interactive exercises, and exposure to diverse texts, students develop strong communication skills and a deep appreciation for literature.",
    image:
      "https://images.unsplash.com/photo-1543109740-4bdb38fda756?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Reading Comprehension",
        description:
          "Develop critical reading skills, analyze different text types, and extract key information efficiently.",
      },
      {
        title: "Writing & Composition",
        description:
          "Master essay writing, creative composition, and effective communication for different purposes and audiences.",
      },
      {
        title: "Grammar & Usage",
        description:
          "Build a strong foundation in English grammar, syntax, and proper usage through targeted practice.",
      },
      {
        title: "Literature Analysis",
        description:
          "Learn to interpret themes, character development, literary devices, and historical contexts in diverse texts.",
      },
    ],
    tutorApproach: [
      {
        title: "Personalized Feedback",
        description:
          "Receive detailed, constructive feedback on your writing and analysis to target specific areas for improvement.",
      },
      {
        title: "Text Engagement",
        description:
          "Interact with diverse texts from classic literature to contemporary writings that match your interests and learning level.",
      },
      {
        title: "Skill Integration",
        description:
          "Develop reading, writing, speaking, and listening skills in an integrated approach that mirrors real-world communication.",
      },
      {
        title: "Adaptive Learning",
        description:
          "Progress through customized lessons that adapt to your specific language learning needs and interests.",
      },
    ],
  },
  {
    id: 6,
    title: "Computer Science",
    slug: "computer-science",
    description:
      "Learn programming and computing concepts with hands-on guidance.",
    fullDescription:
      "Our Computer Science program covers programming fundamentals, algorithms, data structures, and software development principles. Through interactive coding exercises, project-based learning, and personalized feedback, students build practical skills and computational thinking abilities essential for the digital world.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Programming Fundamentals",
        description:
          "Learn core programming concepts, syntax, and problem-solving approaches in languages like Python, Java, or JavaScript.",
      },
      {
        title: "Data Structures & Algorithms",
        description:
          "Master essential data organizations and algorithmic techniques for efficient problem solving.",
      },
      {
        title: "Web Development",
        description:
          "Build responsive websites and web applications using HTML, CSS, JavaScript, and modern frameworks.",
      },
      {
        title: "Computer Science Theory",
        description:
          "Understand computing principles, computational thinking, and the theoretical foundations of computer science.",
      },
    ],
    tutorApproach: [
      {
        title: "Interactive Coding",
        description:
          "Practice programming in real-time with immediate feedback and guidance through our interactive coding environment.",
      },
      {
        title: "Project-Based Learning",
        description:
          "Apply your skills to meaningful projects that reinforce concepts and build your portfolio of work.",
      },
      {
        title: "Visual Explanations",
        description:
          "Understand complex algorithms and data structures through animations and visual representations.",
      },
      {
        title: "Debugging Support",
        description:
          "Learn effective troubleshooting techniques with AI-powered assistance to identify and fix code issues.",
      },
    ],
  },
  {
    id: 7,
    title: "History",
    slug: "history",
    description:
      "Explore the past with engaging and informative history lessons.",
    fullDescription:
      "Our History program takes students on a journey through time, exploring key events, movements, cultures, and individuals that have shaped our world. Through primary sources, interactive timelines, and engaging narratives, students develop historical thinking skills and a deeper understanding of human experience across different eras and civilizations.",
    image:
      "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "World History",
        description:
          "Explore major civilizations, global interactions, and transformative events across different time periods and regions.",
      },
      {
        title: "Historical Analysis",
        description:
          "Develop skills in evaluating primary sources, understanding historical perspectives, and recognizing cause and effect.",
      },
      {
        title: "Cultural & Social History",
        description:
          "Examine how societies have evolved, including social structures, belief systems, art, and everyday life.",
      },
      {
        title: "Modern History & Current Events",
        description:
          "Connect historical developments to contemporary issues and understand the origins of today's global challenges.",
      },
    ],
    tutorApproach: [
      {
        title: "Narrative Engagement",
        description:
          "Experience history through compelling stories and accounts that bring the past to life.",
      },
      {
        title: "Visual Timeline Learning",
        description:
          "Use interactive timelines and maps to visualize chronological relationships and geographical contexts.",
      },
      {
        title: "Primary Source Analysis",
        description:
          "Examine historical documents, images, and artifacts with guided analysis to develop critical thinking skills.",
      },
      {
        title: "Thematic Connections",
        description:
          "Identify patterns and themes across different time periods to develop a deeper understanding of historical processes.",
      },
    ],
  },
  {
    id: 8,
    title: "Foreign Languages",
    slug: "foreign-languages",
    description:
      "Master new languages with interactive and immersive tutorials.",
    fullDescription:
      "Our Foreign Languages program offers comprehensive instruction in multiple languages through conversation practice, grammar exercises, cultural insights, and vocabulary building. With personalized feedback and adaptive learning paths, students develop practical communication skills and cultural understanding for real-world language use.",
    image:
      "https://images.unsplash.com/photo-1620968277880-a795336583ab?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    learningPoints: [
      {
        title: "Speaking & Pronunciation",
        description:
          "Develop conversational skills and authentic pronunciation through interactive speaking exercises with instant feedback.",
      },
      {
        title: "Grammar & Syntax",
        description:
          "Master language structures and rules through contextual learning and progressive practice exercises.",
      },
      {
        title: "Vocabulary Building",
        description:
          "Expand your word bank through themed lessons, spaced repetition, and real-world usage examples.",
      },
      {
        title: "Cultural Understanding",
        description:
          "Gain insights into the cultures where your target language is spoken, enhancing comprehension and appropriate usage.",
      },
    ],
    tutorApproach: [
      {
        title: "Immersive Learning",
        description:
          "Experience language in context through dialogues, stories, and simulated real-life situations.",
      },
      {
        title: "Adaptive Practice",
        description:
          "Receive personalized exercises that focus on your specific needs and adapt as your proficiency grows.",
      },
      {
        title: "Multi-Modal Engagement",
        description:
          "Develop all language skills—reading, writing, speaking, and listening—through varied interactive activities.",
      },
      {
        title: "Progress Tracking",
        description:
          "Monitor your language growth with detailed insights into your strengths and areas for improvement.",
      },
    ],
  },
  {
    id: 9,
    title: "Thinking Skills",
    slug: "thinking-skills",
    description: "Develop critical and creative thinking abilities.",
    fullDescription:
      "Our Thinking Skills program focuses on enhancing critical and creative thinking abilities through engaging activities and problem-solving exercises. Students will learn to analyze, evaluate, and create solutions in a structured manner.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    learningPoints: [
      {
        title: "Critical Thinking",
        description:
          "Learn to evaluate arguments, identify biases, and make reasoned decisions.",
      },
      {
        title: "Creative Problem Solving",
        description:
          "Develop innovative solutions to complex problems through brainstorming and lateral thinking.",
      },
      {
        title: "Logical Reasoning",
        description:
          "Master logical puzzles and reasoning techniques to enhance analytical skills.",
      },
    ],
    tutorApproach: [
      {
        title: "Interactive Activities",
        description:
          "Engage in hands-on exercises that challenge and develop thinking skills.",
      },
      {
        title: "Real-World Scenarios",
        description:
          "Apply thinking skills to practical situations and case studies.",
      },
      {
        title: "Personalized Feedback",
        description:
          "Receive constructive feedback to refine and improve your thinking processes.",
      },
    ],
  },
  {
    id: 10,
    title: "Hindi",
    slug: "hindi",
    description: "Learn Hindi language skills with expert guidance.",
    fullDescription:
      "Our Hindi program helps students master reading, writing, and speaking Hindi through interactive lessons and cultural insights. Students will develop a strong foundation in grammar, vocabulary, and communication skills.",
    image:
      "https://images.unsplash.com/photo-1657302156083-2e61fb23d161?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    learningPoints: [
      {
        title: "Speaking & Pronunciation",
        description:
          "Develop conversational skills and authentic pronunciation through practice.",
      },
      {
        title: "Grammar & Vocabulary",
        description:
          "Build a strong foundation in Hindi grammar and expand your vocabulary.",
      },
      {
        title: "Cultural Insights",
        description:
          "Learn about Indian culture and traditions to enhance language understanding.",
      },
    ],
    tutorApproach: [
      {
        title: "Immersive Learning",
        description:
          "Experience language in context through dialogues and stories.",
      },
      {
        title: "Adaptive Practice",
        description:
          "Receive personalized exercises that adapt to your proficiency level.",
      },
      {
        title: "Progress Tracking",
        description:
          "Monitor your growth with detailed insights into your strengths and areas for improvement.",
      },
    ],
  },
  {
    id: 11,
    title: "Telugu",
    slug: "telugu",
    description: "Master the Telugu language with engaging lessons.",
    fullDescription:
      "Our Telugu program offers comprehensive instruction in reading, writing, and speaking Telugu. Students will gain practical communication skills and an appreciation for Telugu literature and culture.",
    image:
      "https://media.istockphoto.com/id/1480492369/vector/telugu-language-classic-background.jpg?s=612x612&w=0&k=20&c=_XNVc0o3IcfEsET7S5sYt-DUFYA3jUbmbEDB2nmmC2E=",
    learningPoints: [
      {
        title: "Speaking & Pronunciation",
        description:
          "Develop conversational skills and authentic pronunciation through practice.",
      },
      {
        title: "Grammar & Vocabulary",
        description:
          "Build a strong foundation in Telugu grammar and expand your vocabulary.",
      },
      {
        title: "Cultural Insights",
        description:
          "Learn about Telugu culture and traditions to enhance language understanding.",
      },
    ],
    tutorApproach: [
      {
        title: "Interactive Lessons",
        description:
          "Engage in hands-on activities to practice and improve language skills.",
      },
      {
        title: "Personalized Feedback",
        description:
          "Receive constructive feedback to refine your language abilities.",
      },
      {
        title: "Cultural Immersion",
        description:
          "Explore Telugu culture through stories, songs, and traditions.",
      },
    ],
  },
  {
    id: 12,
    title: "Tamil",
    slug: "tamil",
    description: "Learn Tamil language skills with expert guidance.",
    fullDescription:
      "Our Tamil program helps students master reading, writing, and speaking Tamil through interactive lessons and cultural insights. Students will develop a strong foundation in grammar, vocabulary, and communication skills.",
    image:
      "https://www.factsmostly.com/wp-content/uploads/2024/09/Tamil-Language.webp",
    learningPoints: [
      {
        title: "Speaking & Pronunciation",
        description:
          "Develop conversational skills and authentic pronunciation through practice.",
      },
      {
        title: "Grammar & Vocabulary",
        description:
          "Build a strong foundation in Tamil grammar and expand your vocabulary.",
      },
      {
        title: "Cultural Insights",
        description:
          "Learn about Tamil culture and traditions to enhance language understanding.",
      },
    ],
    tutorApproach: [
      {
        title: "Immersive Learning",
        description:
          "Experience language in context through dialogues and stories.",
      },
      {
        title: "Adaptive Practice",
        description:
          "Receive personalized exercises that adapt to your proficiency level.",
      },
      {
        title: "Progress Tracking",
        description:
          "Monitor your growth with detailed insights into your strengths and areas for improvement.",
      },
    ],
  },
  {
    id: 13,
    title: "Python & Digital Literacy",
    slug: "python-digital-literacy",
    description: "Learn Python programming and essential digital skills.",
    fullDescription:
      "Our Python & Digital Literacy program combines coding fundamentals with essential digital skills. Students will learn to code in Python and develop competencies in using digital tools effectively.",
    image:
      "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9uJTIwbGFuZ3VhZ2V8ZW58MHx8MHx8fDA%3D",
    learningPoints: [
      {
        title: "Python Programming",
        description:
          "Learn the basics of Python programming, including syntax and problem-solving.",
      },
      {
        title: "Digital Tools",
        description:
          "Master essential digital tools for productivity and collaboration.",
      },
      {
        title: "Cybersecurity Basics",
        description:
          "Understand the fundamentals of online safety and data protection.",
      },
    ],
    tutorApproach: [
      {
        title: "Interactive Coding",
        description: "Practice coding in real-time with immediate feedback.",
      },
      {
        title: "Project-Based Learning",
        description:
          "Apply your skills to meaningful projects that reinforce concepts.",
      },
      {
        title: "Digital Literacy Exercises",
        description:
          "Engage in activities that build practical digital skills.",
      },
    ],
  },
  {
    id: 14,
    title: "Vedic Maths",
    slug: "vedic-maths",
    description: "Master fast and efficient mental math techniques.",
    fullDescription:
      "Our Vedic Maths program teaches students ancient techniques for performing calculations quickly and accurately. These methods enhance mental agility and problem-solving skills.",
    image:
      "https://images.unsplash.com/photo-1700773429986-1c28ed71b1d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    learningPoints: [
      {
        title: "Mental Arithmetic",
        description:
          "Learn to perform calculations mentally with speed and accuracy.",
      },
      {
        title: "Multiplication Shortcuts",
        description: "Master quick methods for multiplying numbers.",
      },
      {
        title: "Problem-Solving Skills",
        description:
          "Enhance your ability to solve mathematical problems efficiently.",
      },
    ],
    tutorApproach: [
      {
        title: "Step-by-Step Guidance",
        description:
          "Learn techniques through clear explanations and examples.",
      },
      {
        title: "Practice Drills",
        description: "Reinforce skills with targeted practice exercises.",
      },
      {
        title: "Progress Tracking",
        description: "Monitor your improvement with detailed analytics.",
      },
    ],
  },
  {
    id: 15,
    title: "Abacus",
    slug: "abacus",
    description: "Develop mental math skills using the abacus.",
    fullDescription:
      "Our Abacus program helps students build strong mental math skills through the use of the abacus. This ancient tool enhances concentration, memory, and numerical abilities.",
    image:
      "https://images.unsplash.com/photo-1642800489425-18f865fe1a47?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    learningPoints: [
      {
        title: "Basic Operations",
        description:
          "Learn addition, subtraction, multiplication, and division using the abacus.",
      },
      {
        title: "Visualization Techniques",
        description:
          "Develop the ability to perform calculations mentally by visualizing the abacus.",
      },
      {
        title: "Concentration & Memory",
        description: "Enhance focus and memory through regular practice.",
      },
    ],
    tutorApproach: [
      {
        title: "Hands-On Practice",
        description: "Engage in interactive sessions using the abacus.",
      },
      {
        title: "Skill Development",
        description: "Build foundational skills through structured lessons.",
      },
      {
        title: "Progress Monitoring",
        description: "Track your growth with regular assessments.",
      },
    ],
  },
  {
    id: 16,
    title: "Chess",
    slug: "chess",
    description: "Learn chess strategies and improve cognitive skills.",
    fullDescription:
      "Our Chess program teaches students the fundamentals of chess, including strategies and tactics. Playing chess enhances critical thinking, problem-solving, and decision-making skills.",
    image:
      "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    learningPoints: [
      {
        title: "Chess Basics",
        description: "Learn the rules and basic strategies of chess.",
      },
      {
        title: "Tactics & Strategies",
        description: "Master advanced tactics and strategic planning.",
      },
      {
        title: "Cognitive Skills",
        description: "Enhance critical thinking and problem-solving abilities.",
      },
    ],
    tutorApproach: [
      {
        title: "Interactive Games",
        description: "Practice chess through guided games and exercises.",
      },
      {
        title: "Strategy Sessions",
        description: "Learn advanced strategies through expert guidance.",
      },
      {
        title: "Skill Assessment",
        description: "Evaluate your progress with regular assessments.",
      },
    ],
  },
  {
    id: 17,
    title: "Yoga & Mindfulness",
    slug: "yoga-mindfulness",
    description: "Enhance well-being through yoga and mindfulness practices.",
    fullDescription:
      "Our Yoga & Mindfulness program promotes physical and mental well-being through yoga poses, breathing exercises, and mindfulness techniques. Students will learn to manage stress and improve focus.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    learningPoints: [
      {
        title: "Yoga Poses",
        description:
          "Learn basic yoga poses to improve flexibility and strength.",
      },
      {
        title: "Breathing Techniques",
        description:
          "Practice breathing exercises to enhance relaxation and focus.",
      },
      {
        title: "Mindfulness Practices",
        description:
          "Develop mindfulness skills to manage stress and improve mental clarity.",
      },
    ],
    tutorApproach: [
      {
        title: "Guided Sessions",
        description: "Participate in guided yoga and mindfulness sessions.",
      },
      {
        title: "Personalized Plans",
        description: "Receive customized plans to suit your individual needs.",
      },
      {
        title: "Holistic Approach",
        description:
          "Focus on overall well-being through integrated practices.",
      },
    ],
  },
  {
    id: 18,
    title: "Exam Preps",
    slug: "exam-preps",
    description:
      "Preparing for NAPLAN, OC & Selective School Exams the Smart Way",
    fullDescription: `Preparing for NAPLAN, OC, and Selective School exams can be challenging, but with the right approach, it becomes manageable and effective. These exams assess foundational skills, critical thinking, and problem-solving abilities. Starting early makes a big difference, as steady preparation over time builds confidence and reduces stress. Practising under exam-like conditions and focusing on thinking skills are key strategies for success. At NextGenAI Tutors, we provide personalized learning plans, mock tests, and AI-powered progress tracking to help students excel with confidence and clarity. Our approach ensures that students are not only prepared academically but also emotionally supported to perform their best.`,
    image:
      "https://plus.unsplash.com/premium_photo-1671069847963-9dde2af7c852?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    learningPoints: [
      {
        title: "Understanding Exam Objectives",
        description:
          "Learn the purpose and structure of NAPLAN, OC, and Selective School exams to prepare effectively.",
      },
      {
        title: "Time Management Skills",
        description:
          "Develop strategies to manage time efficiently during exams and practice sessions.",
      },
      {
        title: "Critical Thinking & Problem Solving",
        description:
          "Enhance logical reasoning and analytical skills to tackle complex questions.",
      },
      {
        title: "Mock Test Practice",
        description:
          "Simulate real exam conditions to build confidence and improve performance.",
      },
      {
        title: "Building Thinking Skills",
        description:
          "Focus on activities that improve comprehension, reasoning, and pattern recognition.",
      },
    ],
    tutorApproach: [
      {
        title: "Personalized Learning Plans",
        description:
          "Tailored study plans that adapt to each student’s strengths and areas for improvement.",
      },
      {
        title: "Interactive Practice Sessions",
        description:
          "Engage in hands-on activities and exercises to reinforce learning.",
      },
      {
        title: "AI-Powered Progress Tracking",
        description:
          "Monitor progress with advanced analytics and adjust learning paths as needed.",
      },
      {
        title: "Supportive Learning Environment",
        description:
          "Encourage a positive mindset and reduce stress through balanced preparation.",
      },
      {
        title: "Exam-Like Practice",
        description:
          "Provide timed practice sessions to improve speed, accuracy, and endurance.",
      },
    ],
  },
];

// Helper function to get a subject by slug
export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((subject) => subject.slug === slug);
}

// Helper function to get all subject slugs (useful for static generation)
export function getAllSubjectSlugs(): string[] {
  return subjects.map((subject) => subject.slug);
}
