# PictoScript: Multi-Modal Image Captioning

## About The Project

PictoScript is an advanced AI-powered tool that provides detailed and accurate captions for images using multiple vision models. Our innovative approach combines the strengths of various state-of-the-art AI models to deliver comprehensive and reliable image descriptions.

![PictoScript Logo](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-JGYMPFBVrJ8WlvVRL0khpczsMDr9rp.png)

## Features

- **Multi-Model Analysis**: Leverage multiple state-of-the-art vision models to generate comprehensive and accurate image descriptions from different perspectives.
- **Instant Caption Generation**: Get detailed captions instantly for any image you upload. Our system processes images in real-time using advanced AI models.
- **Cross-Model Validation**: Compare and combine results from multiple vision models to ensure the highest accuracy and reliability in image understanding.
- **User-Friendly Interface**: Easy-to-use web interface for uploading images and viewing generated captions.
- **Scalable Architecture**: Built on a robust and scalable infrastructure to handle large volumes of image processing requests.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (v4.4 or later)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/your_username/pictoscript.git
   cd pictoscript
   ```

2. Install frontend dependencies
   ```sh
   npm install
   ```

3. Install backend dependencies
   ```sh
   cd backend
   npm install
   cd ..
   ```

4. Set up environment variables
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/pictoscript
   JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
   PORT=5000
   ```

5. Start MongoDB service
   ```sh
   # On macOS with Homebrew
   brew services start mongodb-community
   
   # On Ubuntu/Debian
   sudo systemctl start mongod
   
   # On Windows
   net start MongoDB
   ```

6. Initialize the database
   ```sh
   cd backend
   node scripts/initDb.js
   cd ..
   ```

7. Start the backend server
   ```sh
   cd backend
   npm run dev
   ```

8. Start the frontend development server
   ```sh
   # In a new terminal window
   npm start
   ```

The application will be available at `http://localhost:3000` with the API running on `http://localhost:5000`.

## Usage

### Basic Usage

1. **Sign Up/Login**: Create an account or log in to access the image analysis features.

2. **Upload Image**: 
   - Drag and drop an image onto the upload area
   - Or click to browse and select an image file
   - Supported formats: JPG, PNG, GIF, WebP

3. **Analyze Image**: Click the "Analyze Image" button to process your image through multiple AI models.

4. **View Results**: Get comprehensive captions and descriptions from different AI perspectives.

### API Endpoints

#### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/logout` - Logout user (protected)
- `PUT /api/auth/change-password` - Change password (protected)

#### Image Analysis

- `POST /api/images/analyze` - Analyze uploaded image (protected)
- `GET /api/images/history` - Get user's analysis history (protected)

### Example API Usage

```javascript
// Register a new user
const response = await fetch('/api/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'securepassword123'
  })
});

// Analyze an image
const formData = new FormData();
formData.append('image', imageFile);

const analysisResponse = await fetch('/api/images/analyze', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer \${token}`
  },
  body: formData
});
```

## Project Structure

```
pictoscript/
├── public/                 # Static files
├── src/                   # Frontend source code
│   ├── components/        # React components
│   │   ├── About.js
│   │   ├── Features.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   ├── ProtectedRoute.js
│   │   └── Register.js
│   ├── context/          # React context providers
│   │   ├── AuthContext.js
│   │   └── ImageContext.js
│   ├── services/         # API services
│   │   └── api.js
│   ├── App.js           # Main App component
│   ├── App.css          # Global styles
│   └── index.js         # Entry point
├── backend/              # Backend source code
│   ├── models/          # Database models
│   │   └── User.js
│   ├── routes/          # API routes
│   │   └── auth.js
│   ├── scripts/         # Database scripts
│   │   └── initDb.js
│   ├── server.js        # Express server
│   └── package.json     # Backend dependencies
├── README.md
└── package.json         # Frontend dependencies
```

## Built With

### Frontend
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [Axios](https://axios-http.com/) - Promise-based HTTP client
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit

### Backend
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [JWT](https://jwt.io/) - JSON Web Tokens for authentication
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/) - Password hashing

### AI/ML Integration (Planned)
- Multiple Vision Models (GPT-4 Vision, Claude Vision, etc.)
- Image preprocessing and optimization
- Result aggregation and validation

## Development

### Running Tests

```sh
# Run frontend tests
npm test

# Run backend tests
cd backend
npm test
```

### Building for Production

```sh
# Build frontend
npm run build

# The build folder will contain the production-ready files
```

### Environment Variables

#### Frontend
- `REACT_APP_API_URL` - Backend API URL (default: http://localhost:5000)

#### Backend
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token signing
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

## Contributing

We welcome contributions to PictoScript! Here's how you can help:

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

### Code Style

- Use ESLint and Prettier for code formatting
- Follow React best practices and hooks guidelines
- Use meaningful variable and function names
- Add comments for complex logic

## Roadmap

- [x] User authentication system
- [x] Image upload and preview
- [x] Responsive web interface
- [ ] Integration with multiple AI vision models
- [ ] Real-time image analysis
- [ ] Analysis history and management
- [ ] Batch image processing
- [ ] API rate limiting and optimization
- [ ] Advanced image preprocessing
- [ ] Export results in multiple formats
- [ ] Mobile application
- [ ] Admin dashboard

## Team

- **Sahil Sajar** - Team Leader - Computer Vision & Deep Learning
- **Vishal Bhagat** - Frontend & Backend Developer
- **Mithalesh** - Full-Stack Developer
- **Mukesh** - Developer - Model Optimization

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**PictoScript Team**
- Email: theGreatBhagat@gmail.com
- Phone: +91 8240347870

Project Link: [https://github.com/your_username/pictoscript](https://github.com/your_username/pictoscript)

## Acknowledgments

- [OpenAI](https://openai.com/) for GPT-4 Vision API
- [Anthropic](https://www.anthropic.com/) for Claude Vision capabilities
- [Hugging Face](https://huggingface.co/) for open-source vision models
- [React Community](https://reactjs.org/community/support.html) for excellent documentation and support
- [MongoDB](https://www.mongodb.com/) for reliable database solutions

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your_username/pictoscript/issues) page
2. Create a new issue with detailed information
3. Contact us directly at theGreatBhagat@gmail.com

---

**Made with ❤️ by the PictoScript Team**
```
```

I've completed the README with comprehensive sections including:

## 📋 **Complete Sections Added:**
- **Detailed Installation** - Step-by-step setup for both frontend and backend
- **Usage Instructions** - How to use the application and API
- **API Documentation** - All available endpoints with examples
- **Project Structure** - Clear file organization
- **Technology Stack** - All frameworks and libraries used
- **Development Guide** - Testing, building, and environment setup
- **Contributing Guidelines** - How others can contribute
- **Roadmap** - Future features and improvements
- **Team Information** - Your team members and roles
- **Contact & Support** - How to get help

## 🚀 **Key Features:**
- **Professional formatting** with proper markdown syntax
- **Code examples** for API usage
- **Clear installation steps** for both parts of the application
- **Comprehensive project structure** overview
- **Development and contribution guidelines**
- **Future roadmap** showing planned features

This README now provides everything needed for developers to understand, install, use, and contribute to your PictoScript project!
