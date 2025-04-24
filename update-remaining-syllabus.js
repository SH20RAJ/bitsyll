const fs = require('fs');
const path = require('path');

// Read the current subjects.json file
const subjectsFilePath = path.join(__dirname, 'src/data/subjects.json');
const subjectsData = JSON.parse(fs.readFileSync(subjectsFilePath, 'utf8'));

// Update syllabus data for remaining subjects
const updatedSubjects = subjectsData.subjects.map(subject => {
  const updatedSubject = { ...subject };
  
  // CH24102 - Chemistry Lab
  if (subject.id === 'CH24102' && subject.syllabus.length === 0) {
    updatedSubject.description = "Laboratory course on chemistry principles and techniques. Includes experiments on chemical analysis, synthesis, and characterization.";
    updatedSubject.syllabus = [
      {
        "unit": "Lab 1: Basic Laboratory Techniques",
        "topics": [
          "Laboratory safety procedures",
          "Handling of chemicals and equipment",
          "Preparation of solutions and dilutions",
          "Measurement techniques and error analysis",
          "Data recording and report writing"
        ]
      },
      {
        "unit": "Lab 2: Chemical Analysis",
        "topics": [
          "Qualitative analysis of inorganic compounds",
          "Quantitative analysis by titration",
          "pH measurement and buffer preparation",
          "Conductometric and potentiometric titrations",
          "Spectrophotometric analysis"
        ]
      },
      {
        "unit": "Lab 3: Organic Chemistry Experiments",
        "topics": [
          "Purification techniques: recrystallization, distillation",
          "Extraction and separation methods",
          "Synthesis of organic compounds",
          "Identification of functional groups",
          "Thin layer chromatography"
        ]
      },
      {
        "unit": "Lab 4: Physical Chemistry Experiments",
        "topics": [
          "Determination of viscosity and surface tension",
          "Kinetics of chemical reactions",
          "Phase equilibria studies",
          "Thermochemical measurements",
          "Adsorption isotherms"
        ]
      },
      {
        "unit": "Lab 5: Instrumental Analysis",
        "topics": [
          "UV-visible spectroscopy",
          "Infrared spectroscopy",
          "Flame photometry",
          "Electrochemical methods",
          "Chromatographic techniques"
        ]
      }
    ];
  }
  
  // PE24101 - Physical Education
  else if (subject.id === 'PE24101' && subject.syllabus.length === 0) {
    updatedSubject.description = "Introduction to physical education, fitness, sports, and wellness concepts for engineering students.";
    updatedSubject.syllabus = [
      {
        "unit": "Module 1: Introduction to Physical Education",
        "topics": [
          "History and philosophy of physical education",
          "Importance of physical activity for engineers",
          "Components of physical fitness",
          "Health-related and skill-related fitness",
          "Physical fitness assessment methods"
        ]
      },
      {
        "unit": "Module 2: Exercise Physiology",
        "topics": [
          "Basic anatomy and physiology for exercise",
          "Energy systems and metabolism",
          "Cardiorespiratory endurance training",
          "Muscular strength and endurance development",
          "Flexibility and mobility training",
          "Exercise prescription principles"
        ]
      },
      {
        "unit": "Module 3: Sports and Games",
        "topics": [
          "Rules and techniques of major sports",
          "Team sports: basketball, volleyball, football, cricket",
          "Individual sports: badminton, table tennis, athletics",
          "Indigenous games and activities",
          "Sports ethics and sportsmanship",
          "Organization of sports events"
        ]
      },
      {
        "unit": "Module 4: Wellness and Stress Management",
        "topics": [
          "Dimensions of wellness",
          "Stress and its impact on health",
          "Relaxation techniques and meditation",
          "Yoga for stress management",
          "Time management for students",
          "Work-life balance for engineers"
        ]
      },
      {
        "unit": "Module 5: Nutrition and Weight Management",
        "topics": [
          "Basic nutrition concepts",
          "Macronutrients and micronutrients",
          "Hydration and performance",
          "Nutrition for physical activity",
          "Weight management principles",
          "Eating disorders and prevention",
          "Ergogenic aids and supplements"
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

console.log('Successfully updated remaining syllabus data in subjects.json');
