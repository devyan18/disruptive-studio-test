# Disruptive Studio

Este repositorio es un monorepositorio multipaquete para la prueba técnica de Disruptive Studio para el puesto de Desarrollador Fullstack.

# Objetivos de la prueba técnica

- ✅ Aplicación de buenas prácticas, código escalable, mantenible y limpio.
- ✅ Login, registro y validación de roles de los usuarios.
- ✅ Aplicar restricciones en base a los roles - Solo el usuario con el rol de **Admin** puede realizar las operaciones de borrado de información. Solo el usuario con el rol de **Creador** puede realizar las operaciones de lectura y escritura.
- ✅ Validaciones de las entradas de la API - Aplicadas con express-validator (Aunque también se podría haber usado JOI o Zod)
- 😔 _(No tantas como me hubiera gustado)_ Aplicar pruebas unitarias las hay. Me faltaron las puebas de integración y también tenía planeado realizar un test end-to-end en el frontend para cada rol de usuario.
- ❌ Documentación de la API. Lamentablemente no pude completar esta parte por temas de tiempo, pero de haberlo hecho, adelanto que se usar Swagger para documentar la API y también se usaría Postman para probarla y hasta exportaría las pruebas de los endpoints en un archivo JSON para que puedan ser importadas en Postman.
- ✅ Los contenidos estarán listados como una biblioteca, ordenados por tipos, y por temas.
- ✅ El usuario se puede registrar como Lector, y como Creador, cualquiera de las 2 opciones.
- ✅ Validar que sea únicamente un tipo. Nunca los 2 tipos.
- ✅ Si no está registrado como Lector, solo mira información textual más, no puede acceder a mirar
los contenidos (videos, imágenes, textos).
  *(La validación en terminos de seguridad y privacidad del contenido esta hecha, pero falta la validación en el frontend para mostrar algún mensaje o feedback para que el usuario sepa que no tiene permisos para ver el contenido)*


# Apreciaciones personales

- La prueba técnica resultó ser excepcionalmente enriquecedora y estimulante. Me brindó la oportunidad de revisitar y practicar con algunas tecnologías que había dejado de utilizar hace algún tiempo. Este reencuentro no solo refrescó mis habilidades previas, sino que también me permitió apreciar la evolución de estas herramientas y cómo podrían integrarse eficazmente en los proyectos actuales. Cada desafío planteado en la prueba fue una excelente ocasión para profundizar mi comprensión y aplicar conocimientos de manera práctica.

- Aunque estoy satisfecho con el esfuerzo realizado, realmente me hubiera gustado disponer de más tiempo para dedicarle a la prueba. Creo firmemente que con algunas horas adicionales de trabajo, hubiese podido explorar soluciones más creativas y optimizadas. Un tiempo extra me hubiera permitido pulir aún más las funcionalidades implementadas y quizás abordar algunos aspectos avanzados que tuve que dejar de lado debido a las limitaciones de tiempo. Sin duda, una mayor dedicación habría resultado en un proyecto más completo y robusto, reflejando mejor mis capacidades y la calidad de trabajo que aspiro a entregar.

# Mi enfoque
  
- Durante la prueba técnica, me enfoqué no solo en cumplir con los requisitos establecidos, sino también en demostrar mi estilo de programación y metodología de trabajo, buscando reflejar un compromiso con la calidad del código y la eficiencia en el desarrollo. En el frontend, elegí React junto con TypeScript, tecnologías con las que tengo experiencia y que me permiten construir interfaces de usuario dinámicas y efectivas. Para el backend, implementé Node.js con Express y TypeScript, aplicando el patrón de repositorio y el patrón de diseño de inyección de dependencias para una estructura de código clara y mantenible.
- Adicionalmente, integré pruebas básicas utilizando Jest y Supertest, lo que me permitió verificar la funcionalidad y robustez de las APIs de manera eficiente. Este enfoque de testing asegura que tanto las funcionalidades del frontend como del backend funcionen según lo previsto y cumplan con los estándares de calidad antes de su despliegue.

# Instalación

- Luego de tanto texto, aquí les dejo los pasos para poder instalar y correr el proyecto en sus máquinas.

## Requisitos Previos

Antes de iniciar, asegúrate de tener instalado:

- Docker y Docker Compose
- Node.js y pnpm
- Git (para clonar el repositorio)

## Configuración Inicial

### Configuración de Variables de Entorno

1. Clona el repositorio:
   ```bash
   git clone [URL-del-repositorio]
   cd [nombre-del-repositorio]
   ```

2. Copia el archivo `.env.example` a un nuevo archivo que se llame `.env`:
   ```bash
   cp .env.example .env
   ```

3. Abre el archivo `.env` y modifica las variables de entorno según tus necesidades. Este archivo incluirá configuraciones críticas como conexiones a bases de datos y configuraciones del servidor.

   **Importante:** El backend utiliza estas variables para crear automáticamente un usuario administrador al inicializar, por lo que es crucial configurarlas correctamente antes de arrancar el proyecto.

# Iniciar la Aplicación

## Opción 1: Docker Compose

1. Asegúrate de que Docker esté corriendo en tu sistema.
2. Construye e inicia los servicios usando Docker Compose:
   ```bash
   docker-compose up --build
   ```

   Esto descargará las imágenes necesarias y creará los contenedores según lo definido en el `docker-compose.yml`. La aplicación estará disponible según los puertos configurados en este archivo.

## Opción 2: pnpm Workspaces

1. Instala las dependencias usando `pnpm`:
   ```bash
   pnpm install
   ```

2. Para iniciar el proyecto en sistemas basados en Unix (macOS o Linux):
   ```bash
   pnpm run dev
   ```

   Para usuarios de Windows:
   ```bash
   pnpm run dev:win
   ```

   Esto arrancará tanto el backend como el frontend en modo de desarrollo, utilizando las configuraciones especificadas en los scripts correspondientes del archivo `package.json`.



# Despedida

Quedo a su disposición sobre cualquier dudas que se les presente o cualquier problema que pueda llegar a tener, estaré encantado de poder ayudarles en lo que necesiten. Muchas gracias por la oportunidad y por tomarse el tiempo de revisar mi trabajo. Espero que el proyecto cumpla con sus expectativas y que pueda ser considerado para la siguiente etapa del proceso de selección. 

¡Saludos y que tengan un excelente día! 