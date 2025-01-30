# React Frontend Application
## Modern React Frontend with Tailwind CSS

This repository contains the frontend React application for the full-stack mini project, designed to work with the Spring Boot backend.

### Tech Stack

- React 18
- Node.js & npm
- React Router v6
- Axios for API calls
- Tailwind CSS
- Jest & React Testing Library
- ESLint & Prettier

### Prerequisites

- Node.js 16.x or higher
- npm or yarn
- Modern web browser
- VS Code (recommended)

### Project Structure

```
react-frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   ├── context/
│   ├── assets/
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
├── .env
└── README.md
```

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-frontend.git
   cd react-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:8080/api/v1
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   The application will open in your browser at `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Runs the test suite
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint
- `npm run format` - Formats code with Prettier

### API Integration

The application uses Axios for API calls. API service configuration:

```javascript
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
```

### Features

- Responsive design with Tailwind CSS
- React Router for navigation
- Form handling with validation
- Error handling and loading states
- API integration with the Spring Boot backend
- Protected routes
- Dark mode support

### Folder Structure Explanation

- `components/` - Reusable UI components
- `pages/` - Page components/routes
- `services/` - API calls and other services
- `hooks/` - Custom React hooks
- `utils/` - Helper functions and utilities
- `context/` - React Context providers
- `assets/` - Images, fonts, and other static files

### State Management

The application uses React Context API for state management. For more complex state requirements, consider using Redux or Zustand.

### Testing

Run tests using:
```bash
npm test
```

Write tests in the `__tests__` directory adjacent to the component being tested.

### Code Style

The project uses ESLint and Prettier for code formatting. Configuration files:
- `.eslintrc.js`
- `.prettierrc`

### Building for Production

1. Update the production API URL in `.env.production`
2. Build the project:
   ```bash
   npm run build
   ```
3. The `build` folder will contain production-ready files

### Deployment

The application can be deployed to various platforms:
- Vercel
- Netlify
- AWS S3
- GitHub Pages

### Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License
This project is licensed under the FREE License.
