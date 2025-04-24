const fs = require('fs');
const path = require('path');

// Read the current subjects.json file
const subjectsFilePath = path.join(__dirname, 'src/data/subjects.json');
const subjectsData = JSON.parse(fs.readFileSync(subjectsFilePath, 'utf8'));

// Update syllabus data for each subject
const updatedSubjects = subjectsData.subjects.map(subject => {
  const updatedSubject = { ...subject };
  
  // CS24101 - Computer Programming
  if (subject.id === 'CS24101') {
    updatedSubject.description = "Introduction to programming concepts using C language. Topics include data types, operators, control structures, functions, arrays, pointers, and file handling.";
    updatedSubject.syllabus = [
      {
        "unit": "Module 1: Introduction to Programming",
        "topics": [
          "Introduction to Computer Programming",
          "Problem Solving Techniques",
          "Algorithm Development",
          "Flowcharts and Pseudocode with examples",
          "From algorithms to programs",
          "Source code, variables with data types",
          "Variables and memory locations",
          "Syntax and Logical Errors in compilation",
          "Object and executable code"
        ]
      },
      {
        "unit": "Module 2: Arithmetic expressions and Conditional Branching and Loops",
        "topics": [
          "Arithmetic expressions and precedence",
          "Conditional Branching and Loops",
          "Writing and evaluation of conditionals",
          "Iterations",
          "Loops"
        ]
      },
      {
        "unit": "Module 3: Array, Character array, strings",
        "topics": [
          "Array, Character array, strings",
          "Case studies to discuss the various Problems related to Basic science",
          "Matrix addition, Matrix-matrix multiplication",
          "Roots of an equation",
          "Sorting, Searching"
        ]
      },
      {
        "unit": "Module 4: Functions and Recursion",
        "topics": [
          "Functions (including using built in libraries)",
          "Parameter passing in functions",
          "Call by value, call by reference",
          "Passing arrays to functions",
          "Recursion (Finding Factorial, Fibonacci series, Ackerman function)"
        ]
      },
      {
        "unit": "Module 5: Structures and Pointers",
        "topics": [
          "Structures, Defining structures and Array of Structures",
          "Pointers: Defining pointers",
          "Use of Pointers in self-referential structures",
          "File Handling"
        ]
      }
    ];
  }
  
  // EC24101 - Basic Electronics
  else if (subject.id === 'EC24101') {
    updatedSubject.description = "Introduction to electronic devices, circuits, and systems. Topics include semiconductor devices, amplifiers, digital circuits, and basic communication systems.";
    updatedSubject.syllabus = [
      {
        "unit": "Module 1: Diodes and Applications",
        "topics": [
          "Introduction to PN junction diodes",
          "Characteristics of semiconductor diodes: V-I characteristics, diode-resistance",
          "Temperature-dependence, diode-capacitance",
          "DC & AC load lines",
          "Breakdown Mechanisms",
          "Zener Diode – Operation and Applications",
          "Diode as a Rectifier: Half Wave and Full Wave Rectifiers with and without C-Filters"
        ]
      },
      {
        "unit": "Module 2: Bipolar Junction Transistors (BJT)",
        "topics": [
          "PNP and NPN Transistors, Basic Transistor Action",
          "Input and Output Characteristics of CB, CE and CC Configurations",
          "DC and AC load line analysis, operating point",
          "Transistor biasing: Fixed bias, emitter bias/self-bias",
          "Low-frequency response of CE amplifier",
          "Field Effect Transistors: JFET, Idea of Channel Formation",
          "Pinch-Off and saturation Voltage, Current-Voltage Output Characteristics",
          "MOSFET: Basic structure, operation and characteristics"
        ]
      },
      {
        "unit": "Module 3: Sinusoidal Oscillators",
        "topics": [
          "Concept of positive and negative feedback",
          "Barkhausen criterion for sustained oscillations",
          "Determination of Frequency and Condition of oscillation",
          "Hartley and Colpitt's oscillator",
          "Operational Amplifiers: Characteristics of an Ideal and Practical Operational Amplifier (IC 741)",
          "Inverting and non-inverting amplifiers",
          "Offset error voltages and currents",
          "Power supply rejection ratio, Slew Rate and concept of Virtual Ground",
          "Summing and Difference Amplifiers",
          "Differentiator and Integrator, RC phase shift oscillator"
        ]
      },
      {
        "unit": "Module 4: Logic Gates and Boolean algebra",
        "topics": [
          "Introduction to Boolean Algebra and Boolean operators",
          "Symbolic representation, Boolean algebraic function",
          "Truth table of different Digital logic Gates (AND, OR, NOT, NAND, NOR, EX-OR, EX-NOR)",
          "Realization of Basic logic gates using universal gates",
          "Adder, Subtractor, adder/subtractor"
        ]
      },
      {
        "unit": "Module 5: Electronic communication",
        "topics": [
          "Introduction to electronic communication system",
          "Electromagnetic Communication spectrum band and applications",
          "Elements of Electronic Communication System",
          "Merits and demerits of analog and digital communication",
          "Modes of communication",
          "Signal radiation and propagation",
          "Need for modulation",
          "Introduction to Amplitude modulation and Angle modulation"
        ]
      }
    ];
  }
  
  // EC24102 - Basic Electronics Lab
  else if (subject.id === 'EC24102') {
    updatedSubject.description = "Practical laboratory course on basic electronics. Includes hands-on experiments with diodes, transistors, operational amplifiers, and digital circuits.";
    updatedSubject.syllabus = [
      {
        "unit": "Lab 1: Diode Characteristics",
        "topics": [
          "Study of PN junction diode characteristics",
          "Zener diode characteristics and voltage regulation",
          "Half-wave and full-wave rectifier circuits",
          "Filter circuits and ripple measurement"
        ]
      },
      {
        "unit": "Lab 2: Transistor Experiments",
        "topics": [
          "BJT characteristics in CE, CB, and CC configurations",
          "Transistor biasing circuits",
          "Single-stage amplifier design and testing",
          "JFET and MOSFET characteristics"
        ]
      },
      {
        "unit": "Lab 3: Operational Amplifier Circuits",
        "topics": [
          "Op-amp characteristics measurement",
          "Inverting and non-inverting amplifier configurations",
          "Adder, subtractor, and differential amplifier circuits",
          "Integrator and differentiator circuits"
        ]
      },
      {
        "unit": "Lab 4: Digital Logic Circuits",
        "topics": [
          "Verification of logic gate truth tables",
          "Implementation of combinational circuits",
          "Half and full adder/subtractor circuits",
          "Flip-flop and counter circuits"
        ]
      },
      {
        "unit": "Lab 5: Communication Circuits",
        "topics": [
          "Amplitude modulation and demodulation",
          "Frequency modulation circuits",
          "Oscillator circuits",
          "Simple communication system design"
        ]
      }
    ];
  }
  
  // MA24101 - Mathematics 1
  else if (subject.id === 'MA24101') {
    updatedSubject.description = "This course covers differential and integral calculus, differential equations, and linear algebra fundamentals essential for engineering applications.";
    updatedSubject.syllabus = [
      {
        "unit": "MODULE - I: Sequences and Series",
        "topics": [
          "Infinite Sequences",
          "Monotonic Sequences",
          "Bounded Sequences",
          "Convergence of Sequences",
          "Cauchy's General Principle of Convergence",
          "Infinite series",
          "Convergence of Infinite Series",
          "Tests for Convergence: Comparison tests, Ratio test, Cauchy's root test",
          "Raabe's test, Logarithmic Test, Gauss test, Cauchy's Integral test",
          "Alternating series, Leibnitz test"
        ]
      },
      {
        "unit": "MODULE - II: Matrices",
        "topics": [
          "Special Matrices (Symmetric, Skew-Symmetric, Orthogonal Matrix, Unitary Matrix)",
          "Elementary Transformations",
          "Rank of a Matrix",
          "Row-reduced Echelon form, Normal From",
          "Vectors, Linear Independence and Dependence of Vectors",
          "System of linear equations",
          "Introduction to Linear Transformations",
          "Eigenvalues, Eigenvectors, Cayley-Hamilton theorem"
        ]
      },
      {
        "unit": "MODULE - III: Multivariable Differential Calculus",
        "topics": [
          "Function of several variables",
          "Limit, Continuity, Partial derivatives",
          "Euler's theorem for homogeneous functions",
          "Total derivatives, Chain rules",
          "Jacobians and its properties",
          "Taylor series for function of two variables",
          "Maxima – Minima, Lagrange's method of multipliers"
        ]
      },
      {
        "unit": "MODULE - IV: Multivariable Integral Calculus",
        "topics": [
          "Double integrals, double integrals in polar coordinates",
          "Change of order of integration",
          "Triple Integrals, cylindrical and spherical coordinate systems",
          "Transformation of coordinates",
          "Applications of double and triple integrals in areas and volumes",
          "Beta and gamma functions"
        ]
      },
      {
        "unit": "MODULE - V: Vector Calculus",
        "topics": [
          "Scalar and vector point functions",
          "Gradient, directional derivative, divergence, curl",
          "Vector equations and identities",
          "Line Integral, Work done, Conservative field",
          "Green's theorem in a plane",
          "Surface and volume integrals",
          "Gauss – divergence theorem, Stoke's theorem"
        ]
      }
    ];
  }
  
  // MA24102 - Mathematics 2
  else if (subject.id === 'MA24102') {
    updatedSubject.description = "This course covers differential equations, Fourier series, partial differential equations, complex variables, and probability and statistics.";
    updatedSubject.syllabus = [
      {
        "unit": "MODULE - I: Ordinary Differential Equations - I",
        "topics": [
          "Linear differential equations",
          "Wronskian, Linear independence and dependence of solutions",
          "Linear differential equations of second and higher order",
          "Operator method",
          "Euler - Cauchy's differential equation",
          "Legendre's linear differential equation",
          "Method of variation of parameters",
          "Method of change of independent variable",
          "Normal form method"
        ]
      },
      {
        "unit": "MODULE - II: Ordinary Differential Equations - II",
        "topics": [
          "Power series, ordinary and singular points of differential equation",
          "Power and Frobenius series solutions",
          "Bessel's differential equation and its series solution",
          "Bessel function of first kind and its properties",
          "Legendre's differential equation and its series solution",
          "Legendre's polynomial and its properties"
        ]
      },
      {
        "unit": "MODULE - III: Partial Differential Equations",
        "topics": [
          "Fourier series, Euler formulae for Fourier series",
          "Dirichlet conditions",
          "Fourier series for arbitrary length of interval",
          "Half range Fourier series",
          "Linear and quasi-linear partial differential equations",
          "Lagrange's method",
          "Linear-partial differential equations with constant coefficients",
          "Method of separation of variables",
          "Applications in solving one dimensional wave and heat equations"
        ]
      },
      {
        "unit": "MODULE - IV: Complex Variable",
        "topics": [
          "Function of a complex variable",
          "Limit, Continuity, Differentiability",
          "Analyticity, Analytic functions",
          "Cauchy-Riemann equations (Cartesian and Polar form)",
          "Harmonic functions",
          "Complex integration"
        ]
      },
      {
        "unit": "MODULE - V: Probability and Statistics",
        "topics": [
          "Definition and scope of statistics",
          "Average and dispersion",
          "Skewness and kurtosis",
          "Graphical statistics",
          "Classical and empirical definitions of probability",
          "Addition theorem",
          "Conditional probability",
          "Discrete and continuous distributions",
          "Mathematical expectation, variance",
          "Moment generating function"
        ]
      }
    ];
  }
  
  // PH24101 - Physics
  else if (subject.id === 'PH24101') {
    updatedSubject.description = "This course covers fundamental physics concepts including optics, relativity, quantum mechanics, and electromagnetic theory with applications in engineering.";
    updatedSubject.syllabus = [
      {
        "unit": "Module 1: Physical Optics",
        "topics": [
          "Interference of light waves",
          "Young's double slit experiment",
          "Fraunhofer diffraction by single slit",
          "Diffraction grating",
          "Polarization of light waves",
          "Production and analysis of polarized light"
        ]
      },
      {
        "unit": "Module 2: Electromagnetic Theory",
        "topics": [
          "Maxwell's equations in differential and integral forms",
          "Electromagnetic wave propagation",
          "Poynting vector and Poynting theorem",
          "Electromagnetic spectrum",
          "Wave propagation in conducting and non-conducting media",
          "Reflection and refraction at dielectric interfaces"
        ]
      },
      {
        "unit": "Module 3: Special Theory of Relativity",
        "topics": [
          "Michelson-Morley experiment",
          "Postulates of special theory of relativity",
          "Lorentz transformations",
          "Length contraction and time dilation",
          "Relativistic mass and energy",
          "Mass-energy equivalence"
        ]
      },
      {
        "unit": "Module 4: Quantum Mechanics",
        "topics": [
          "Wave-particle duality",
          "de Broglie hypothesis",
          "Heisenberg's uncertainty principle",
          "Schrödinger wave equation",
          "Particle in a box",
          "Quantum tunneling"
        ]
      },
      {
        "unit": "Module 5: Lasers",
        "topics": [
          "Spontaneous and stimulated emission",
          "Population inversion",
          "Optical resonator",
          "Ruby laser",
          "He-Ne laser",
          "Semiconductor laser",
          "Applications of lasers in engineering"
        ]
      }
    ];
  }
  
  // BE24102 - Biology Science for Engineers
  else if (subject.id === 'BE24102') {
    updatedSubject.description = "Introduction to biological concepts and principles relevant to engineering applications. Covers cell biology, bioenergetics, enzymes, biological signals, and bioengineering.";
    updatedSubject.syllabus = [
      {
        "unit": "Module 1: Basic Cell Biology",
        "topics": [
          "Cell structure and organization",
          "Prokaryotic and eukaryotic cells",
          "Cell membrane and transport",
          "Cellular organelles and their functions",
          "Cell division and cell cycle",
          "Biomolecules: proteins, carbohydrates, lipids, nucleic acids"
        ]
      },
      {
        "unit": "Module 2: Bioenergetics and Metabolism",
        "topics": [
          "Principles of bioenergetics",
          "ATP and energy currency",
          "Cellular respiration",
          "Glycolysis and Krebs cycle",
          "Electron transport chain",
          "Photosynthesis",
          "Metabolic pathways and regulation"
        ]
      },
      {
        "unit": "Module 3: Enzymes and its Application",
        "topics": [
          "Enzyme structure and function",
          "Enzyme kinetics and Michaelis-Menten equation",
          "Factors affecting enzyme activity",
          "Enzyme inhibition",
          "Allosteric regulation",
          "Industrial applications of enzymes",
          "Enzyme immobilization techniques"
        ]
      },
      {
        "unit": "Module 4: Biological Signal Generation and Propagation",
        "topics": [
          "Membrane potential and ion channels",
          "Action potential generation",
          "Synaptic transmission",
          "Neurotransmitters and receptors",
          "Signal transduction pathways",
          "Hormonal signaling",
          "Sensory transduction"
        ]
      },
      {
        "unit": "Module 5: Engineering Biological Systems and its Applications",
        "topics": [
          "Principles of genetic engineering",
          "DNA recombination techniques",
          "Polymerase chain reaction (PCR)",
          "Cloning and expression systems",
          "Biosensors and biochips",
          "Tissue engineering",
          "Biomedical applications",
          "Ethical considerations in bioengineering"
        ]
      }
    ];
  }
  
  // CH24101 - Chemistry
  else if (subject.id === 'CH24101') {
    updatedSubject.description = "Fundamental principles of chemistry with emphasis on chemical bonding, stereochemistry, kinetics, catalysis, and spectroscopic techniques.";
    updatedSubject.syllabus = [
      {
        "unit": "Module 1: Chemical Bonding",
        "topics": [
          "Atomic structure and periodic properties",
          "Ionic and covalent bonding",
          "Molecular orbital theory",
          "Valence bond theory",
          "Hybridization and molecular geometry",
          "Coordination compounds and ligand field theory",
          "Metallic bonding and band theory"
        ]
      },
      {
        "unit": "Module 2: Organic Structure and Stereochemistry",
        "topics": [
          "Structural theory in organic chemistry",
          "Isomerism and stereoisomerism",
          "Conformational analysis",
          "Chirality and optical activity",
          "R-S configuration and E-Z notation",
          "Stereoselectivity and stereospecificity",
          "Asymmetric synthesis"
        ]
      },
      {
        "unit": "Module 3: Kinetics and Catalysis",
        "topics": [
          "Reaction rate and rate laws",
          "Reaction order and molecularity",
          "Temperature dependence and Arrhenius equation",
          "Reaction mechanisms",
          "Homogeneous and heterogeneous catalysis",
          "Enzyme catalysis",
          "Catalytic converters and industrial catalysts"
        ]
      },
      {
        "unit": "Module 4: Spectroscopic Techniques",
        "topics": [
          "Principles of spectroscopy",
          "UV-visible spectroscopy",
          "Infrared spectroscopy",
          "Nuclear magnetic resonance spectroscopy",
          "Mass spectrometry",
          "X-ray diffraction",
          "Applications in structural determination"
        ]
      },
      {
        "unit": "Module 5: Phase and Chemical equilibrium",
        "topics": [
          "Phase rule and phase diagrams",
          "One and two component systems",
          "Chemical equilibrium and equilibrium constants",
          "Le Chatelier's principle",
          "Acid-base equilibria",
          "Solubility equilibria",
          "Electrochemical cells and Nernst equation"
        ]
      }
    ];
  }
  
  // ES24101 - Ecosystem and Environment
  else if (subject.id === 'ES24101') {
    updatedSubject.description = "Study of ecosystems, environmental pollution, and sustainable environmental management practices for engineering applications.";
    updatedSubject.syllabus = [
      {
        "unit": "Module 1: Ecosystem and Environment",
        "topics": [
          "Concept of ecosystem and its components",
          "Energy flow in ecosystem",
          "Food chains and food webs",
          "Ecological pyramids",
          "Biogeochemical cycles",
          "Biodiversity and its conservation",
          "Environmental ethics and sustainable development"
        ]
      },
      {
        "unit": "Module 2: Air Pollution and control",
        "topics": [
          "Sources and classification of air pollutants",
          "Effects of air pollution on human health and environment",
          "Air quality standards and indices",
          "Meteorological aspects of air pollution",
          "Air pollution control technologies",
          "Indoor air pollution",
          "Global air pollution issues: acid rain, ozone depletion, global warming"
        ]
      },
      {
        "unit": "Module 3: Water Pollution",
        "topics": [
          "Water resources and quality parameters",
          "Sources and types of water pollutants",
          "Effects of water pollution",
          "Eutrophication and thermal pollution",
          "Water quality standards",
          "Water treatment processes",
          "Wastewater treatment technologies",
          "Water conservation strategies"
        ]
      },
      {
        "unit": "Module 4: SOIL POLLUTION AND SOLID WASTE MANAGEMENT",
        "topics": [
          "Soil composition and properties",
          "Sources and effects of soil pollution",
          "Soil remediation techniques",
          "Municipal solid waste: sources and characteristics",
          "Collection, transportation and disposal methods",
          "Landfills and incineration",
          "Recycling and resource recovery",
          "Hazardous waste management"
        ]
      },
      {
        "unit": "Module 5: Noise Pollution",
        "topics": [
          "Physics of sound and noise measurement",
          "Sources and effects of noise pollution",
          "Noise standards and control measures",
          "Environmental impact assessment",
          "Environmental management systems",
          "Environmental legislation and policies",
          "Environmental auditing",
          "Role of engineers in environmental protection"
        ]
      }
    ];
  }
  
  // EE24101 - Electrical Engineering
  else if (subject.id === 'EE24101') {
    updatedSubject.description = "Introduction to electrical engineering principles including circuit analysis, electrical machines, power systems, and electrical measurements.";
    updatedSubject.syllabus = [
      {
        "unit": "Module 1: Basic Circuit Analysis",
        "topics": [
          "Kirchhoff's laws and network theorems",
          "Resistive circuits and voltage/current division",
          "Mesh and nodal analysis",
          "Superposition, Thevenin's and Norton's theorems",
          "Maximum power transfer theorem",
          "Star-delta transformation",
          "Transient response of RL, RC and RLC circuits"
        ]
      },
      {
        "unit": "Module 2: AC Circuit Analysis",
        "topics": [
          "Sinusoidal steady state analysis",
          "Phasor representation",
          "Complex power and power factor",
          "Resonance in series and parallel circuits",
          "Three-phase circuits",
          "Balanced and unbalanced loads",
          "Power measurement in three-phase circuits"
        ]
      },
      {
        "unit": "Module 3: Electrical Machines",
        "topics": [
          "Principles of electromechanical energy conversion",
          "DC machines: construction, operation and characteristics",
          "Transformers: principle, construction and operation",
          "Induction motors: types, construction and working principle",
          "Synchronous machines: construction and operation",
          "Special purpose motors",
          "Applications of electrical machines"
        ]
      },
      {
        "unit": "Module 4: Power Systems",
        "topics": [
          "Power generation: conventional and renewable sources",
          "Transmission and distribution of electrical energy",
          "Transmission line parameters and models",
          "Per unit system",
          "Load flow studies",
          "Fault analysis",
          "Power system protection",
          "Economic operation of power systems"
        ]
      },
      {
        "unit": "Module 5: Electrical Measurements and Instrumentation",
        "topics": [
          "Measurement systems and their characteristics",
          "Error analysis in measurements",
          "Measuring instruments: ammeters, voltmeters, wattmeters",
          "Bridges for measurement of R, L and C",
          "Electronic instruments",
          "Digital instruments and data acquisition systems",
          "Transducers and sensors",
          "Signal conditioning circuits"
        ]
      }
    ];
  }
  
  // ME24101 - Mechanical Engineering
  else if (subject.id === 'ME24101') {
    updatedSubject.description = "Introduction to mechanical engineering principles including mechanics, thermodynamics, fluid mechanics, and energy resources.";
    updatedSubject.syllabus = [
      {
        "unit": "Module 1: System of Forces and Structure Mechanics",
        "topics": [
          "Force systems and resultants",
          "Equilibrium of rigid bodies",
          "Free body diagrams",
          "Analysis of trusses and frames",
          "Friction and its applications",
          "Centroid and moment of inertia",
          "Virtual work and energy methods"
        ]
      },
      {
        "unit": "Module 2: Kinematics & Kinetics of rigid bodies",
        "topics": [
          "Kinematics of particles and rigid bodies",
          "Rectilinear and curvilinear motion",
          "Rotation about a fixed axis",
          "General plane motion",
          "Newton's laws of motion",
          "Work-energy principle",
          "Impulse and momentum",
          "Impact and collision"
        ]
      },
      {
        "unit": "Module 3: Friction and Vibration",
        "topics": [
          "Laws of friction",
          "Applications of friction in machines",
          "Belt and rope drives",
          "Clutches and brakes",
          "Free and forced vibrations",
          "Damped vibrations",
          "Vibration isolation",
          "Critical speeds of shafts"
        ]
      },
      {
        "unit": "Module 4: Boilers and Internal Combustion Engine",
        "topics": [
          "Classification and working of boilers",
          "Boiler mountings and accessories",
          "Performance of boilers",
          "Internal combustion engines: classification and components",
          "Working cycles of SI and CI engines",
          "Performance parameters",
          "Combustion in SI and CI engines",
          "Engine cooling and lubrication systems"
        ]
      },
      {
        "unit": "Module 5: Non-Conventional Energy and their resources",
        "topics": [
          "Solar energy: collection, storage and applications",
          "Wind energy conversion systems",
          "Biomass energy and biogas production",
          "Geothermal energy systems",
          "Ocean thermal energy conversion",
          "Tidal and wave energy",
          "Fuel cells",
          "Energy storage systems",
          "Environmental aspects of energy conversion"
        ]
      }
    ];
  }
  
  // ME24102 - Engineering Graphics
  else if (subject.id === 'ME24102') {
    updatedSubject.description = "Principles of engineering drawing and design including projections, sectional views, dimensioning, and computer-aided design.";
    updatedSubject.syllabus = [
      {
        "unit": "Module 1: Fundamentals of Engineering Drawing",
        "topics": [
          "Drawing instruments and their uses",
          "Standard drawing sheets and layouts",
          "Types of lines and lettering",
          "Scales and dimensioning",
          "Geometric constructions",
          "Engineering curves: conic sections, cycloids, involutes",
          "Principles of orthographic projection"
        ]
      },
      {
        "unit": "Module 2: Projections of Points, Lines and Planes",
        "topics": [
          "Projection of points in different quadrants",
          "Projection of lines: true length, inclinations, traces",
          "Projection of planes: true shape, inclinations",
          "Problems on projections",
          "Auxiliary planes and projections",
          "Revolution method"
        ]
      },
      {
        "unit": "Module 3: Projections of Solids and Development of Surfaces",
        "topics": [
          "Projection of polyhedra, prisms, pyramids",
          "Projection of cylinders, cones, spheres",
          "Sections of solids",
          "True shape of sections",
          "Development of surfaces of prisms, pyramids",
          "Development of cylinders and cones",
          "Applications in sheet metal work"
        ]
      },
      {
        "unit": "Module 4: Isometric and Perspective Projections",
        "topics": [
          "Principles of isometric projection",
          "Isometric scale and dimensions",
          "Isometric views of simple solids and combinations",
          "Principles of perspective projection",
          "Types of perspective projections",
          "Perspective views of simple objects"
        ]
      },
      {
        "unit": "Module 5: Computer Aided Design",
        "topics": [
          "Introduction to CAD software",
          "2D drafting techniques",
          "Editing and modifying drawings",
          "Layers, blocks and attributes",
          "Dimensioning and annotation",
          "Introduction to 3D modeling",
          "Solid modeling techniques",
          "Assembly modeling and drawing generation"
        ]
      }
    ];
  }
  
  return updatedSubject;
});

// Update the subjects data
subjectsData.subjects = updatedSubjects;

// Write the updated data back to the file
fs.writeFileSync(subjectsFilePath, JSON.stringify(subjectsData, null, 2));

console.log('Successfully updated syllabus data for all subjects in subjects.json');
