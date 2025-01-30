import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:8080/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json', // Add this
        'ngrok-skip-browser-warning': 'true' // Remove the space after the apostrophe}
    }
});