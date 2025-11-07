# 🚀 Profile-Page-Day-5 - Portfolio Website

> A modern, interactive portfolio website built with **HTML & CSS only**. Perfect for showcasing your work as a full-stack developer.

![Badge](https://img.shields.io/badge/HTML-5-orange) 
![Badge](https://img.shields.io/badge/CSS-3-blue) 
![Badge](https://img.shields.io/badge/License-MIT-green)
![Badge](https://img.shields.io/badge/Status-Active-brightgreen)

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technologies](#-technologies-used)
- [🚀 Getting Started](#-getting-started)
- [📋 Sections](#-sections)
- [🎨 Design](#-design-highlights)
- [🌐 Browser Support](#-browser-support)
- [🎯 Customization](#-customization)
- [📊 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Author](#-author)
- [📄 License](#-license)

---

## ✨ Features

✅ **Dashboard Layout** - Responsive sidebar navigation with main content  
✅ **Smooth Animations** - CSS transitions and keyframe animations  
✅ **Glassmorphism Design** - Modern backdrop blur effects  
✅ **Dark Theme** - Eye-friendly color scheme with gradients  
✅ **Interactive Sections** - Expandable projects and education details  
✅ **Mobile Optimized** - Responsive design for all devices  
✅ **No Dependencies** - Pure HTML & CSS (zero JavaScript)  
✅ **Fast Loading** - Lightweight & optimized performance  
✅ **Semantic HTML** - Clean, accessible code structure  
✅ **Print Friendly** - Optimized for printing  

---

## 📁 Project Structure

```
Profile-Page-Day-5/
├── 📄 index.html              # Main HTML file
├── 🎨 styles.css              # CSS styling & animations
├── 📖 README.md               # Documentation
└── 📸 assets/                 # Images (optional)
    └── screenshot.png
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup & structure |
| **CSS3** | Styling, animations & effects |
| **CSS Grid** | Responsive layout management |
| **Flexbox** | Component alignment |
| **CSS Variables** | Dynamic theming & colors |
| **CSS Animations** | Smooth transitions |
| **Media Queries** | Mobile responsiveness |

---

## 🚀 Getting Started

### Prerequisites
- ✓ Modern web browser (Chrome, Firefox, Safari, Edge)
- ✓ Text editor (VS Code, Sublime, Notepad++)
- ✓ Git (optional, for cloning)

### Installation

**Option 1️⃣ - Direct Opening**
```bash
# 1. Clone the repository
git clone https://github.com/Manav0721/Profile-Page-Day-5.git

# 2. Navigate to folder
cd Profile-Page-Day-5

# 3. Open index.html in your browser
# Double-click index.html (or right-click → Open with Browser)
```

**Option 2️⃣ - Using Local Server (Recommended)**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# Then visit: http://localhost:8000
```

**Option 3️⃣ - VS Code Live Server**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

---

## 📋 Sections

### 🎯 Header
- Profile introduction with avatar
- Name and professional title
- Contact information (email, phone)
- Quick access links

### 📌 Sidebar Navigation
- Dashboard-style menu
- Quick links to all sections:
  - 📌 About
  - ⚙️ Skills
  - 💼 Projects
  - 🎓 Education
  - 📞 Contact
- Icon + label navigation
- Smooth hover effects

### 📄 Main Content

#### About Me
Professional background, skills overview, and introduction

#### Skills
```
Frontend: HTML, CSS, JavaScript
Backend: Java, Python, C++
Database: SQL
Tools: Git, GitHub, VS Code
```

#### Projects

**1. Sales Forecasting Using ML** 🤖
- Python, TensorFlow, Matplotlib
- ML algorithms: KNN Regression, ARIMA, Gaussian Process
- Sales trend analysis & visualization

**2. BookYourSlots** 📱
- Android app development
- Figma UI/UX prototyping
- Indoor games slot booking system

**3. Insightsverse Web Analytics** 📊
- Web performance monitoring
- Google Analytics integration
- User behavior analysis & reporting

#### Education

**B.TECH - Computer Science & Business System**
- 🏫 MIT WPU, Pune
- 📅 Graduating: 2025
- 📈 CGPA: 7.5
- 📚 Focus: CS fundamentals + Business management

#### Contact
- 📧 Email
- 📞 Phone
- 📍 Location
- 🔗 Social links

---

## 🎨 Design Highlights

### Color Palette
```
Dark Background:     #1a1a1a
Mid Background:      #2d2d2d
Light Background:    #404040
Primary Text:        #e8e8e8
Text Accent:         #d0d0d0
Border Color:        rgba(120, 120, 120, 0.4)
Hover State:         rgba(80, 80, 80, 0.6)
```

### Animation Effects
- 🎬 Page load fade-in effects
- 🎯 Slide-in navigation elements
- ✨ Hover scale & glow effects
- 🌟 Shimmer animation on cards
- 🔄 Rotating chevrons on expand/collapse
- ⏱️ Smooth 0.3s transitions

### Responsive Breakpoints
- 🖥️ **Desktop**: 1024px and above
- 📱 **Tablet**: 768px - 1024px
- 📲 **Mobile**: Below 768px

---

## 🌐 Browser Support

| Browser | Status | Version |
|---------|--------|---------|
| Chrome | ✅ Supported | Latest |
| Firefox | ✅ Supported | Latest |
| Safari | ✅ Supported | Latest |
| Edge | ✅ Supported | Latest |
| Safari iOS | ✅ Supported | iOS 12+ |
| Chrome Android | ✅ Supported | Latest |

---

## 🎯 Customization

### 1️⃣ Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --bg-dark: #1a1a1a;        /* Background color */
  --text-accent: #d0d0d0;    /* Accent color */
  --text-primary: #e8e8e8;   /* Main text color */
  --item-bg-hover: rgba(80, 80, 80, 0.6); /* Hover state */
}
```

### 2️⃣ Update Content
Edit text in `index.html`:
- Update name, title, contact info
- Modify About section
- Update skills list
- Add/edit project descriptions
- Change education details

### 3️⃣ Add Images
```bash
# 1. Create assets folder
mkdir assets

# 2. Add your images
# Copy images to assets/ folder

# 3. Reference in HTML
<img src="assets/image.jpg" alt="description">
```

### 4️⃣ Modify Fonts
In `styles.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### 5️⃣ Change Navigation Items
In `index.html`, edit sidebar navigation:
```html
<a href="#about" class="nav-item">
  <span class="nav-icon">📌</span>
  <span class="nav-text">About</span>
</a>
```

---

## 📊 Performance

- **Page Load Time**: < 1 second
- **Total File Size**: ~25KB (HTML + CSS combined)
- **Lighthouse Score**: 95+ 
- **Zero External Dependencies**
- **GPU Accelerated Animations**

---

## 🔗 Live Demo

**View Live Portfolio**: [https://manav0721.github.io/Profile-Page-Day-5/](#)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**
   ```bash
   git clone https://github.com/Manav0721/Profile-Page-Day-5.git
   cd Profile-Page-Day-5
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**
   ```bash
   git commit -m "Add: amazing feature"
   ```

4. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Describe your changes
   - Link any related issues

---

## 📈 Roadmap

- [ ] Light/dark mode toggle
- [ ] Contact form functionality
- [ ] Blog section
- [ ] Project gallery with images
- [ ] Testimonials section
- [ ] Resume download button
- [ ] Search functionality
- [ ] Social media links

---

## 👨‍💻 Author

**Manav Pimparkar**

- 📧 **Email**: [manavpimparkar123@gmail.com](mailto:manavpimparkar123@gmail.com)
- 📱 **Phone**: +91 9325001634
- 📍 **Location**: Pune, India
- 🔗 **GitHub**: [@Manav0721](https://github.com/Manav0721)
- 💼 **LinkedIn**: [Manav Pimparkar](#)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🙏 Acknowledgments

- Inspired by modern dashboard UI patterns
- Built with HTML5 & CSS3 best practices
- System fonts optimized for all devices
- Icons from Unicode emoji set

---

## 💡 Why This Portfolio?

✨ **Built without JavaScript** - Pure HTML & CSS power!  
⚡ **Super Fast** - No framework overhead  
🎨 **Modern Design** - Glassmorphism & smooth animations  
📱 **Fully Responsive** - Works on all devices  
♿ **Accessible** - Semantic HTML & ARIA labels  
🔒 **Secure** - No external dependencies  

---

## 📞 Support & Questions

- 📩 Email me at: manavpimparkar123@gmail.com
- 🐛 Report bugs by opening an [Issue](https://github.com/Manav0721/Profile-Page-Day-5/issues)
- 💬 Start a [Discussion](https://github.com/Manav0721/Profile-Page-Day-5/discussions)

---

## ⭐ Show Your Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🍴 Forking the project
- 🔗 Sharing with friends
- 📝 Leaving feedback

---

<div align="center">

**Made with ❤️ by Manav Pimparkar**

**Last Updated**: November 7, 2025  
**Version**: 2.0 - Dashboard Layout

*If you like this project, don't forget to leave a ⭐ star!*

</div>