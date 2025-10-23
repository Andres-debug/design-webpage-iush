# Estructura de Datos del Curriculum

## Formato JSON

Cada materia en el curriculum ahora tiene la siguiente estructura:

```json
{
  "name": "Nombre de la materia",
  "color": "bg-[#780D80]",
  "description": "Descripción completa de la materia o null",
  "type": "Tipo de materia (ej: Fundamentación, Taller central) o null",
  "subjectCredits": 2,
  "teacher": "Nombre del profesor o null",
  "teacherRole": "Rol del profesor o null",
  "teacherImage": "Ruta de la imagen o null"
}
```

## Campos

### Obligatorios
- **name**: Nombre de la materia (string)
- **color**: Color de fondo en Tailwind CSS (string)

### Opcionales (pueden ser null)
- **description**: Descripción de lo que se aprende en la materia
- **type**: Tipo o categoría de la materia (ej: "Fundamentación", "Taller central")
- **subjectCredits**: Número de créditos de la materia
- **teacher**: Nombre completo del profesor
- **teacherRole**: Cargo o rol del profesor
- **teacherImage**: Ruta a la imagen del profesor (en /assets/teachers/)

## Colores Disponibles

- `bg-[#780D80]`: Morado - Materias principales de diseño
- `bg-[#A4B1D8]`: Azul claro - Materias complementarias
- `bg-[#1E3374]`: Azul oscuro - Materias transversales

## Ejemplo Completo

```json
{
  "name": "Psicología del color",
  "color": "bg-[#780D80]",
  "description": "La materia Psicología del Color busca comprender la influencia del color en las emociones y percepciones humanas, así como su papel en la comunicación visual. El estudiante aprende a utilizarlos de manera estratégica para transmitir emociones sensaciones",
  "type": "Fundamentación",
  "subjectCredits": 2,
  "teacher": "Sonia Peláez",
  "teacherRole": "Coordinadora de Diseño Gráfico",
  "teacherImage": "/assets/teachers/sonia-pelaez.jpg"
}
```

## Ejemplo Sin Información

```json
{
  "name": "Creatividad gráfica",
  "color": "bg-[#780D80]",
  "description": null,
  "type": null,
  "subjectCredits": null,
  "teacher": null,
  "teacherRole": null,
  "teacherImage": null
}
```

## Notas

- Puedes ir llenando la información de las materias poco a poco
- Las materias sin información (con campos en null) seguirán mostrándose en la malla curricular
- El modal mostrará solo la información disponible
- Las imágenes de los profesores deben estar en `public/assets/teachers/`

