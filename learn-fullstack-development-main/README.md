# Comprehensive Full-Stack Development Curriculum

This repository contains the complete modular course material for a comprehensive curriculum covering foundational to advanced **Front-End Development** concepts. The modules systematically progress through core technologies, culminating in the development of modern Single-Page Applications (SPAs) using **React.js**.

---

## 📚 Curriculum Structure

The learning path is segmented into distinct, project-based modules:

### 1. 02. HTML and CSS Fundamentals
This module establishes the core web development foundation through practical implementation.

| Topics Covered | Projects & Deliverables |
| :--- | :--- |
| **HTML5 Markup** (Semantic tags, Forms, Navigation) | Personal Portfolio Site |
| **CSS3 Styling** (Selectors, Cascading, Inheritance) | Google.com Clone |
| **Box Model** (`margin`, `padding`, `border`) | Digital Business Card |
| **Layout Techniques** (Block/Inline elements, **Flexbox**) | Birthday GIFt Site, Space Exploration Site |

### 2. 03. JavaScript Fundamentals
This module transitions to client-side logic, introducing imperative programming, control flow, and DOM manipulation.

| Topics Covered | Applications & Challenges |
| :--- | :--- |
| **Core Concepts** (Variables, Functions, Data Types) | Passenger Counter App |
| **Data Structures** (Arrays, Objects, Iteration via `for` loops) | Blackjack Game |
| **Control Flow** (`if/else`, Logical Operators) | Calculator Challenge |
| **Browser APIs** (The **DOM**, **`localStorage`**, Chrome Tabs API) | Chrome Extension (Lead Tracker) |

### 3. 15. React.js Fundamentals
This module focuses on declarative UI development and modern state management using the React library ecosystem.

| Topics Covered | Applications & Capstone Projects |
| :--- | :--- |
| **JSX** and **Component Architecture** (Functional Components) | React Facts Page |
| **Data Flow** (Props and the `.map()` function for lists) | Travel Journal App |
| **State Management** (The `useState` Hook, Complex State Objects/Arrays) | Chef Claude AI Recipe Generator (API Integration) |
| **Side Effects** (The `useEffect` Hook, Data Fetching, Cleanup) | Meme Generator |
| **Forms** (Controlled Components, Event Handling) | Sound Pads Challenge |
| **Capstone Projects** | **Tenzies** (Dice Game), **Assembly Endgame** (Hangman Clone) |

---

## ⚙️ Technical Stack

* **Primary Languages:** HTML5, CSS3, JavaScript (ES6+)
* **Core Library:** React.js
* **Hooks:** `useState`, `useEffect`
* **Build Tooling:** Vite (Used for React environment setup)
* **Deployment Concepts:** Chrome Extension Manifest (`manifest.json`)
* **Data Handling:** `localStorage`, RESTful API interaction (`fetch`)

---

## 🚀 Getting Started

To access and execute the project code within a specific lesson folder:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    ```
2.  **For HTML/CSS/JS Lessons:** Navigate to the desired folder and open `index.html` directly in your web browser.
3.  **For React.js Lessons (within `15. React.js Fundamentals`):**
    * Ensure you have **Node.js** installed.
    * Navigate to the target project directory (e.g., `15. React.js Fundamentals/05. Capstone Project #1 - Tenzies`).
    * Install project dependencies:
        ```bash
        npm install
        ```
    * Start the local development server:
        ```bash
        npm run dev
        ```
    * Open the application at the address provided in your terminal (typically `http://localhost:5173/`).