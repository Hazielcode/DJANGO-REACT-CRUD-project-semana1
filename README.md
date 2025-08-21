# 🚀 HazielRango - Proyecto Django + React CRUD

Este proyecto es un ejemplo completo de un **CRUD** usando **Django** en el backend y **React** en el frontend. Está diseñado para aprender a integrar ambas tecnologías y manejar rutas, bases de datos y componentes frontend.

---

## 📝 Descripción

HazielRango es una aplicación que permite **gestionar información de manera sencilla**.  
El backend maneja la lógica y la base de datos usando Django, mientras que el frontend usa React para mostrar la información de forma dinámica y moderna.

---

## 🛠 Tecnologías usadas

- **Backend:** Django 🐍  
- **Frontend:** React ⚛️  
- **Base de datos:** SQLite (puedes cambiar a PostgreSQL si quieres)  
- **Control de versiones:** Git & GitHub 🗂️  
- **Autenticación:** SSH para subir proyectos a GitHub 🔑  

---

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone git@github.com:Hazielcode/DJANGO-REACT-CRUD-project-semana1.git
Entrar a la carpeta del proyecto:

bash
Copiar código
cd hazielrango
Crear un entorno virtual:

bash
Copiar código
python3 -m venv venv
source venv/bin/activate  # Linux / Mac
venv\Scripts\activate     # Windows
Instalar dependencias:

bash
Copiar código
pip install -r requirements.txt
Preparar la base de datos y migraciones:

bash
Copiar código
python manage.py makemigrations
python manage.py migrate
Ejecutar el servidor Django:

bash
Copiar código
python manage.py runserver
Levantar el frontend React (si existe carpeta frontend):

bash
Copiar código
cd frontend
npm install
npm start
⚡ Funcionalidades
Crear, leer, actualizar y eliminar registros (CRUD) ✅

Interfaz interactiva con React ⚛️

Gestión de base de datos con Django ORM 🐍

Fácil de extender para nuevos módulos o aplicaciones

📂 Estructura del proyecto
bash
Copiar código
hazielrango/
├─ backend/      # Django project
├─ frontend/     # React app
├─ README.md
├─ requirements.txt
└─ .gitignore
👨‍💻 Uso
Abre tu navegador y ve a http://127.0.0.1:8000/ para acceder al backend

El frontend normalmente corre en http://localhost:3000/

Modifica, agrega o elimina datos y verás los cambios reflejados en tiempo real

💡 Notas
Asegúrate de activar el entorno virtual antes de ejecutar Django.

Para cualquier cambio de dependencias, recuerda actualizar requirements.txt:

bash
Copiar código
pip freeze > requirements.txt
Para mantener tu repositorio limpio, no subas archivos sensibles ni venv/.

🌟 Contribuciones
Si quieres contribuir al proyecto:

Haz un fork del repositorio

Crea tu rama: git checkout -b mi-rama

Haz tus cambios y commits

Haz push y crea un Pull Request

📞 Contacto
Autor: Samir Haziel Alfonso Solórzano

Email: samir.alfonso@tecsup.edu.pe

GitHub: Hazielcode

✨ ¡Gracias por usar y probar HazielRango! 🚀
