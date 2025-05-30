# David Iyanuoluwa Oluwapelumi - Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience as an Information Technology student and aspiring Frontend Developer.

---

## ✨ Features

- **Animated Hero Section** with Typed.js
- **Project Gallery** with category filtering
- **Skills Section** with animated skill bars
- **Experience Timeline**
- **Contact Form** with real-time validation
- **Dark Mode** toggle (with localStorage support)
- **Responsive Design** (mobile-friendly)
- **Back to Top** button
- **Custom Color Scheme** (teal, coral, navy, mint)
- **Modern UI** using Tailwind CSS and custom styles

---

## 📁 Project Structure

```
DAVID PORTFOLIO/
│
├── index.html                # Main portfolio page
├── style.css                 # Custom styles (with Tailwind utility classes)
├── script.js                 # Main JS (animations, filtering, validation, etc.)
├── images/                   # Project and hero images
├── assets/                   # Profile photo and other assets
├── projects/
│   ├── to-do-list/
│   ├── loan-calaculator/
│   └── Image-search-app/
│       ├── index.html
│       ├── script.js
│       └── style.css
└── README.MD                 # This file
```

---

## 🚀 Installation & Usage

1. **Clone or Download** this repository to your local machine.

2. **Open `index.html`** in your browser.  
   No build step is required; all dependencies are loaded via CDN.

3. **For local development:**
   - Ensure all images and assets are in the correct folders.
   - If you add new projects, update the `projects` section in `index.html`.

---

## 🛠️ Technologies Used

- **HTML5, CSS3, JavaScript (ES6+)**
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- [Typed.js](https://mattboldt.com/demos/typed-js/) (for hero animation)
- [Google Fonts](https://fonts.google.com/) (Inter, Montserrat, Poppins)
- [Unsplash API](https://unsplash.com/developers) (for Image Search App)

---

## ⚡ Problems Faced & Solutions

### 1. **CSS Merge Conflicts & Formatting**
   - **Problem:** The stylesheet had duplicated, corrupted, and conflicting rules (especially in media queries and typography).
   - **Solution:** Cleaned up the CSS, removed duplicates, fixed syntax errors, and standardized formatting for maintainability.

### 2. **Responsive Design Issues**
   - **Problem:** Some media queries were malformed, causing layout bugs on mobile.
   - **Solution:** Rewrote and tested media queries for all breakpoints, ensuring a smooth experience on all devices.

### 3. **Color Consistency**
   - **Problem:** Inconsistent use of color variables and classes.
   - **Solution:** Standardized color usage across all components, using custom utility classes and Tailwind's palette.

### 4. **Form Validation**
   - **Problem:** Needed real-time feedback and accessibility for the contact form.
   - **Solution:** Added JavaScript validation with instant feedback and ARIA labels for accessibility.

### 5. **Dark Mode**
   - **Problem:** Ensuring all sections and components look good in both light and dark modes.
   - **Solution:** Used Tailwind's dark mode utilities and custom CSS for seamless theme switching.

---

## 🖼️ Screenshots

> _Add screenshots of your portfolio here for a better preview!_

---

## 📚 Credits

- [Tailwind CSS](https://tailwindcss.com/)
- [Typed.js](https://github.com/mattboldt/typed.js/)
- [Unsplash API](https://unsplash.com/developers)
- [Google Fonts](https://fonts.google.com/)

---

## 📬 Contact

- **Email:** [Your Email Here]
- **LinkedIn:** [Your LinkedIn Here]
- **GitHub:** [Your GitHub Here]

---

## 📝 License

This project is for educational and personal portfolio use.
