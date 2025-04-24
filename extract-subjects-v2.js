const fs = require('fs');
const path = require('path');

// Path to the subject folders
const subjectsDir = path.join(__dirname, 'src/app/subject');

// Get all subject folders
const subjectFolders = fs.readdirSync(subjectsDir)
  .filter(folder => {
    // Filter out non-directories and special folders
    const folderPath = path.join(subjectsDir, folder);
    return fs.statSync(folderPath).isDirectory() && 
           !folder.startsWith('[') && 
           folder !== 'NSS';
  });

console.log(`Found ${subjectFolders.length} subject folders`);

// Initialize subjects array
const subjects = [];

// Process each subject folder
subjectFolders.forEach(folder => {
  try {
    const folderPath = path.join(subjectsDir, folder);
    const pageJsPath = path.join(folderPath, 'page.js');
    
    // Skip if page.js doesn't exist
    if (!fs.existsSync(pageJsPath)) {
      console.log(`Skipping ${folder}: No page.js found`);
      return;
    }
    
    // Read the page.js file
    const content = fs.readFileSync(pageJsPath, 'utf8');
    
    // Extract subject code from folder name
    const code = folder;
    
    // Try to extract title from content
    let title = "";
    const titleMatch = content.match(/([A-Z][a-zA-Z\s]+(?:for|and|of|[0-9])[a-zA-Z\s]+)/);
    if (titleMatch) {
      title = titleMatch[1].trim();
    } else {
      // Fallback to a generic title based on the code
      title = `${code} Course`;
    }
    
    // Extract syllabus
    const syllabusMatch = content.match(/export function Syllabus\(\) {([\s\S]*?)return \(([\s\S]*?)<\/div>\s*<\/>/);
    
    // Parse syllabus modules
    const syllabus = [];
    if (syllabusMatch) {
      const syllabusContent = syllabusMatch[2];
      const moduleMatches = syllabusContent.matchAll(/<h3[^>]*>(.*?)<\/h3>[\s\S]*?<p[^>]*>(.*?)<\/p>/g);
      
      for (const match of Array.from(moduleMatches)) {
        const unit = match[1].trim();
        const description = match[2].trim();
        
        // Extract topics from description
        const topics = description.split(/\.\s+|,\s+/).map(topic => topic.trim()).filter(topic => topic.length > 5);
        
        syllabus.push({
          unit,
          topics
        });
      }
    }
    
    // Extract PDFs/resources
    const pdfsMatch = content.match(/export function PDFs\(\) {[\s\S]*?let pdfs = \[([\s\S]*?)\];/);
    const resources = [];
    
    if (pdfsMatch) {
      const pdfsContent = pdfsMatch[1];
      const pdfMatches = pdfsContent.matchAll(/{[\s\S]*?title: "(.*?)",[\s\S]*?link: "(.*?)"[\s\S]*?}/g);
      
      for (const match of Array.from(pdfMatches)) {
        resources.push({
          type: "notes",
          title: match[1].trim(),
          url: match[2].trim()
        });
      }
    }
    
    // Extract YouTube channels
    const youtubeMatch = content.match(/(?:const youtubeChannels|export function YoutubeVideos\(\) {[\s\S]*?let channels) = \[([\s\S]*?)\];/);
    const youtubeChannels = [];
    
    if (youtubeMatch) {
      const channelsContent = youtubeMatch[1];
      const channelMatches = channelsContent.matchAll(/{[\s\S]*?title: "(.*?)",[\s\S]*?link: "(.*?)"[\s\S]*?}/g);
      
      for (const match of Array.from(channelMatches)) {
        youtubeChannels.push({
          title: match[1].trim(),
          url: match[2].trim()
        });
      }
    }
    
    // Extract PYQs
    const pyqsMatch = content.match(/export function PYQs\(\) {[\s\S]*?let pdfs = \[([\s\S]*?)\];/);
    const pyqs = [];
    
    if (pyqsMatch) {
      const pyqsContent = pyqsMatch[1];
      const pyqMatches = pyqsContent.matchAll(/{[\s\S]*?title: "(.*?)",[\s\S]*?link: "(.*?)"[\s\S]*?}/g);
      
      for (const match of Array.from(pyqMatches)) {
        pyqs.push({
          title: match[1].trim(),
          url: match[2].trim()
        });
      }
    }
    
    // Determine department based on subject code prefix
    const deptPrefix = code.substring(0, 2);
    let department = "";
    
    switch (deptPrefix) {
      case "CS":
        department = "Computer Science and Engineering";
        break;
      case "MA":
        department = "Mathematics";
        break;
      case "PH":
        department = "Physics";
        break;
      case "CH":
        department = "Chemistry";
        break;
      case "EC":
        department = "Electronics and Communication Engineering";
        break;
      case "EE":
        department = "Electrical Engineering";
        break;
      case "ME":
        department = "Mechanical Engineering";
        break;
      case "BE":
        department = "Bio Engineering";
        break;
      case "ES":
        department = "Environmental Science";
        break;
      case "PE":
        department = "Physical Education";
        break;
      default:
        department = "General Engineering";
    }
    
    // Create subject object
    const subject = {
      id: code,
      code,
      title,
      credits: 4, // Default value
      semester: parseInt(code.charAt(3)) || 1, // Extract semester from code
      department,
      description: syllabus.length > 0 ? 
        `This course covers ${syllabus.map(s => s.unit.toLowerCase().replace(/module -?\s*[ivxl]+:?\s*/i, '').trim()).join(', ')}.` : 
        `${title} course for engineering students.`,
      syllabus,
      books: [
        {
          title: `${title} Textbook`,
          author: "Department Faculty",
          publisher: "BIT Mesra",
          edition: "Latest Edition"
        }
      ],
      resources: [
        ...resources,
        ...pyqs.map(pyq => ({
          type: "exam",
          title: pyq.title,
          url: pyq.url
        }))
      ],
      youtubeChannels,
      faculty: [
        {
          name: "Department Faculty",
          email: `faculty@bitmesra.ac.in`,
          office: `${deptPrefix} Department`
        }
      ]
    };
    
    subjects.push(subject);
    console.log(`Processed ${folder}: ${code} - ${title}`);
  } catch (error) {
    console.error(`Error processing ${folder}:`, error);
  }
});

// Create the final JSON structure
const subjectsData = {
  subjects
};

// Write to file
fs.writeFileSync(
  path.join(__dirname, 'src/data/subjects.json'), 
  JSON.stringify(subjectsData, null, 2)
);

console.log(`Successfully extracted ${subjects.length} subjects to src/data/subjects.json`);
