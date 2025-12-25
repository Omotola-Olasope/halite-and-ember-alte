# Halite & Ember - Real Estate & Investment Website

## 📦 Package Contents

This package contains a professional dark-themed website for Halite & Ember, a real estate and investment company with operations in the UK and Nigeria.

### Included Files:
- **Frontend** (`/frontend`):
  - React application with all pages and components
  - Dark theme styling (black #000000 with cyan-green #00FFD1 accents)
  - 3D Spline interactive element
  - Responsive design
  - Mock data for all content
  
- **Backend** (`/backend`):
  - FastAPI server setup
  - MongoDB integration ready
  - Basic API structure

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- MongoDB (optional, for backend integration)
- Yarn package manager

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn start
```

The website will be available at `http://localhost:3000`

### Backend Setup (Optional)

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Update the `.env` file with your MongoDB connection string

5. Start the server:
```bash
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

## 📄 Pages Included

1. **Home** - Hero section with 3D Spline element, services preview, global presence, stats
2. **About** - Mission, vision, values, company stats
3. **Services** - Detailed service descriptions (Real Estate, Asset Management, Tech Consulting)
4. **UK Branch** - UK operations, team, contact information
5. **Nigerian Branch** - Nigerian operations, team, contact information
6. **Contact** - Contact form and branch contact details

## 🎨 Design Features

- Premium dark theme (#000000 background)
- Cyan-green brand color (#00FFD1)
- Sharp-cornered buttons (0px border-radius)
- 3D interactive Spline element on hero
- Professional typography
- Fixed navigation header
- Responsive mobile design
- Lucide React icons

## 📝 Customization

### Adding Your Logo
Replace the text logo in `/frontend/src/components/Header.jsx` with:
```jsx
<img src="/path-to-your-logo.png" alt="Halite & Ember" className="dark-logo" />
```

### Updating Content
Edit the mock data in `/frontend/src/mock.js` to update:
- Company information
- Services
- Team members
- Contact details
- Branch information

### Changing Colors
Update color variables in `/frontend/src/index.css`:
```css
:root {
  --bg-primary: #000000;        /* Main background */
  --brand-primary: #00FFD1;     /* Brand color */
  /* ... other colors */
}
```

## 🔧 Production Build

To create a production build:

```bash
cd frontend
yarn build
```

The optimized files will be in the `build` directory.

## 📦 Dependencies

### Frontend
- React 19
- React Router DOM
- Spline (@splinetool/react-spline)
- Lucide React (icons)
- Tailwind CSS
- Shadcn/UI components

### Backend
- FastAPI
- Motor (MongoDB driver)
- Python-dotenv

## 🌐 Deployment

### Frontend
Deploy the `build` folder to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Backend
Deploy the backend to:
- Heroku
- AWS EC2
- DigitalOcean
- Railway

## 📞 Support

For questions or issues with the website:
- Check the browser console for errors
- Ensure all dependencies are installed
- Verify Node.js and Python versions

## 📄 License

© 2025 Halite & Ember. All rights reserved.

---

Built with ❤️ using React, FastAPI, and modern web technologies.
