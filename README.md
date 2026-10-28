# Web Development Flashcards App (Static Deck)

An interactive, responsive, and accessible **Web Development Flashcards** study application built entirely with vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**.

Designed with a clean, modern light theme featuring soft pastel blue and pastel green accents, this app helps learners master foundational web technologies including HTML5, CSS3, JavaScript, Responsive Web Design, and the Document Object Model (DOM).

---

## ✨ Features

1. **10 Curated Web Development Flashcards**
   - Covers core topics: HTML semantics, the CSS Box Model, variable scoping (`const`, `let`, `var`), responsive viewport meta tags, DOM manipulation, Flexbox vs. CSS Grid, event delegation, accessibility (`alt` & ARIA), CSS specificity, and asynchronous JavaScript.
   - Every card features an accurate, clear, and beginner-friendly answer with highlighted code snippets and structured bullet points.

2. **Smooth 3D Card Flip Animation**
   - Built using pure CSS 3D perspective (`perspective: 1200px`, `transform-style: preserve-3d`, and `backface-visibility: hidden`).
   - Clicking on the card or pressing the **Flip Card** button triggers a fluid 180° rotation with realistic depth.

3. **Dynamic Progress Tracking**
   - Displays real-time counter indicators (e.g., **"Card 3 of 10"**).
   - Live percentage indicator and smooth animated progress track (e.g., **30% Completed**).

4. **Previous and Next Navigation with Boundary Controls**
   - Navigate smoothly forward and backward across the card deck.
   - **Boundary Enforcement:** Automatically disables the *Previous* button on the first card and disables the *Next* button on the last card, preventing out-of-bounds errors.

5. **Automatic Flip State Reset**
   - Navigating to another card automatically resets the card face back to the question side, ensuring a natural study flow.

6. **Fisher-Yates Deck Shuffle**
   - Randomizes the question deck using an unbiased algorithm.
   - Automatically resets to card 1 of 10 and displays a toast notification feedback badge.

7. **Accessibility & Keyboard Navigation**
   - Complete keyboard shortcut support:
     - <kbd>←</kbd> (Left Arrow) : Previous Card
     - <kbd>→</kbd> (Right Arrow) : Next Card
     - <kbd>Space</kbd> or <kbd>F</kbd> : Flip Card
     - <kbd>S</kbd> : Shuffle Deck
   - Full ARIA attributes (`role="button"`, `aria-pressed`, `aria-live`, `aria-label`, `progressbar`) for screen readers.
   - Generous touch targets (minimum 48px height) for mobile touchscreens.

8. **Clean, Modern Light Theme**
   - Distraction-free white canvas with subtle pastel blue and soft green highlights.
   - Styled typography using Google Fonts (*Plus Jakarta Sans*, *Inter*, and *JetBrains Mono*).
   - Optimized for desktop, tablet, and mobile displays without any external frameworks.

---

## 🛠️ Technology Stack

- **HTML5:** Semantic document structure, accessible landmarks, and SVG icons.
- **CSS3:** Modern CSS variables, Flexbox, CSS Grid, 3D transformations (`rotateY`, `perspective`), and responsive media queries.
- **JavaScript (ES6+):** Pure vanilla JavaScript, array manipulation, event listeners, keyboard event handling, and Fisher-Yates shuffle algorithm.

---

## 📂 Project Structure

```text
flashcard-app/
│
├── index.html       # Semantic HTML5 layout and card structure
├── style.css        # Clean light theme styling, pastel accents, and 3D flip effects
├── script.js        # Card data deck, state management, flip, navigation & shuffle logic
└── README.md        # Comprehensive documentation and project guide
```

---

## 🚀 Getting Started

No build tools, package managers, or local server installations are required.

1. **Clone or Download the Repository:**
   ```bash
   git clone https://github.com/dharmarayank946/Flashcard-App-Static-Deck.git
   ```
2. **Open the App:**
   Simply double-click `index.html` or open it with any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).

3. **Deploy to GitHub Pages:**
   - Push the repository to GitHub.
   - Go to **Settings** > **Pages**.
   - Under **Branch**, select `main` and root `/`, then click **Save**.
   - Your flashcard app will be live instantly!

---

## 📱 Mobile Responsiveness

The interface adapts smoothly to smaller screens:
- Buttons transform into an ergonomic two-column grid for comfortable thumb reach.
- Card dimensions adjust dynamically to accommodate varying answer lengths without content truncation.
- High-contrast, touch-friendly tap targets prevent accidental misclicks.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
