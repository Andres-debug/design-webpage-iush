import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer el archivo JSON actual
const jsonPath = path.join(__dirname, '../src/data/curriculumData.json');
const curriculumData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Función para actualizar la estructura de una materia
function updateSubjectStructure(subject) {
  // Si ya tiene la nueva estructura, no hacer nada
  if (subject.hasOwnProperty('description')) {
    return subject;
  }
  
  // Agregar los nuevos campos
  return {
    name: subject.name,
    color: subject.color,
    description: null,
    type: null,
    subjectCredits: null,
    teacher: null,
    teacherRole: null,
    teacherImage: null
  };
}

// Actualizar todos los niveles
const updatedData = curriculumData.map(level => ({
  ...level,
  subjects: level.subjects.map(updateSubjectStructure)
}));

// Guardar el archivo actualizado
fs.writeFileSync(
  jsonPath,
  JSON.stringify(updatedData, null, 2),
  'utf8'
);

console.log('✅ Curriculum data structure updated successfully!');
console.log(`Updated ${updatedData.reduce((acc, level) => acc + level.subjects.length, 0)} subjects across ${updatedData.length} levels`);

