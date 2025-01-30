# Full Stack Mini Project
## Java Spring Boot + React + MongoDB

This project is a full-stack application built using Spring Boot for the backend, React for the frontend, and MongoDB as the database. It serves as a learning project to understand the integration of these technologies.

### Tech Stack

**Backend:**
- Java 17
- Spring Boot 3.x
- Spring Data MongoDB
- Spring Web
- Maven for dependency management

**Frontend:**
- React 18
- Node.js & npm
- Axios for API calls
- React Router for navigation
- Tailwind CSS for styling

**Database:**
- MongoDB

### Prerequisites

Before running this project, make sure you have the following installed:
- JDK 17 or higher
- Node.js and npm
- MongoDB
- Maven
- Your favorite IDE (VS Code, IntelliJ IDEA, etc.)

### Project Structure

```
fullstack-project/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
└── README.md
```

### Getting Started

#### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   mvn install
   ```

3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
   The server will start on `http://localhost:8080`

#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   The application will open in your browser at `http://localhost:3000`

#### Database Setup
1. Make sure MongoDB is running on your system
2. The default MongoDB connection URL is: `mongodb://localhost:27017/mydatabase`
3. You can modify the connection settings in `application.properties`

### Key Features
- RESTful API endpoints
- MongoDB integration
- React frontend with modern UI
- Cross-Origin Resource Sharing (CORS) enabled
- Basic CRUD operations

### API Endpoints
- `GET /api/v1/resources` - Get all resources
- `POST /api/v1/resources` - Create a new resource
- `GET /api/v1/resources/{id}` - Get a specific resource
- `PUT /api/v1/resources/{id}` - Update a resource
- `DELETE /api/v1/resources/{id}` - Delete a resource

### Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Learning Resources
- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Spring Data MongoDB](https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/)

### License
This project is licensed under the MIT License - see the LICENSE file for details

### Acknowledgments
- Thanks to the Spring Boot, React, and MongoDB communities for their excellent documentation
- This project was created as a learning exercise to understand full-stack development
