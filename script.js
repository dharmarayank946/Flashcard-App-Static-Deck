/**
 * ============================================================================
 * Web Development Flashcard App (Static Deck)
 * Vanilla JavaScript (ES6+) Implementation
 * 
 * Features:
 * - 10 beginner-friendly Web Development questions & answers (HTML, CSS, JS, Responsive, DOM)
 * - Interactive 3D flip card mechanic with keyboard & touch accessibility
 * - Previous & Next card navigation with strict boundary handling
 * - Progress indicator ("Card X of Y") & dynamic progress bar
 * - Automatic reset to question side on card navigation
 * - Fisher-Yates deck shuffle with toast notification
 * - Responsive, touch-friendly UI for mobile, tablet, and desktop
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // Flashcard Deck Data (10 Web Development Questions & Answers)
  // --------------------------------------------------------------------------
  const initialDeck = [
    {
      id: 1,
      category: "HTML5",
      tag: "Markup & Semantics",
      question: "What are semantic HTML elements, and why are they important in modern web development?",
      answer: "<p><strong>Semantic HTML elements</strong> (such as <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;footer&gt;</code>) clearly describe their meaning and purpose to both browsers and developers.</p><ul><li><strong>Accessibility:</strong> Assistive tools (screen readers) rely on semantic landmarks for navigation.</li><li><strong>SEO:</strong> Search engine crawlers understand content priority and hierarchy.</li><li><strong>Maintainability:</strong> Clean, self-documenting code compared to generic <code>&lt;div&gt;</code> tags.</li></ul>"
    },
    {
      id: 2,
      category: "CSS3",
      tag: "Layout & Box Model",
      question: "What are the four components of the CSS Box Model, and what does 'box-sizing: border-box' do?",
      answer: "<p>The <strong>CSS Box Model</strong> wraps every HTML element in four rectangular layers:</p><ul><li><strong>Content:</strong> The area where text, images, or child elements appear.</li><li><strong>Padding:</strong> Transparent internal breathing room around content.</li><li><strong>Border:</strong> The outline enclosing padding and content.</li><li><strong>Margin:</strong> Transparent outer space separating the element from neighbors.</li></ul><p><code>box-sizing: border-box</code> ensures width and height include padding and borders, preventing layout blowouts.</p>"
    },
    {
      id: 3,
      category: "JavaScript",
      tag: "Scope & Variables",
      question: "What are the fundamental differences between 'const', 'let', and 'var' in JavaScript?",
      answer: "<p>Modern JavaScript provides three variable declaration keywords:</p><ul><li><code>const</code>: <strong>Block-scoped</strong>, cannot be reassigned. Preferred by default for predictable values and immutability.</li><li><code>let</code>: <strong>Block-scoped</strong>, can be reassigned. Use when variable values change (e.g. loops, counters).</li><li><code>var</code>: <strong>Function-scoped</strong> legacy declaration. Gets hoisted with <code>undefined</code> and lacks block-scoping, making it bug-prone.</li></ul>"
    },
    {
      id: 4,
      category: "Responsive Design",
      tag: "Media Queries & Viewport",
      question: "Why is the '<meta name=\"viewport\">' tag essential for responsive mobile websites?",
      answer: "<p>Without a viewport meta tag, mobile browsers assume a desktop viewport width (typically <strong>980px</strong>) and scale the page down, rendering tiny, unreadable text.</p><p>Adding <code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code> tells the mobile browser to:</p><ul><li>Match the screen width in CSS pixels (1:1 scale).</li><li>Prevent automatic desktop zoom and enable accurate CSS media queries (<code>@media</code>).</li></ul>"
    },
    {
      id: 5,
      category: "DOM",
      tag: "Document Object Model",
      question: "What is the Document Object Model (DOM), and how does JavaScript manipulate it?",
      answer: "<p>The <strong>DOM (Document Object Model)</strong> is a tree-like object representation of the HTML document created by the browser in memory.</p><p>JavaScript accesses and manipulates nodes via standard APIs:</p><ul><li><strong>Selection:</strong> <code>document.querySelector()</code>, <code>getElementById()</code></li><li><strong>Modification:</strong> <code>element.textContent</code>, <code>element.innerHTML</code></li><li><strong>Class & Styles:</strong> <code>element.classList.toggle()</code>, <code>element.style</code></li><li><strong>Interactivity:</strong> <code>element.addEventListener('click', handler)</code></li></ul>"
    },
    {
      id: 6,
      category: "CSS3",
      tag: "Flexbox vs. Grid",
      question: "When should you choose CSS Flexbox over CSS Grid, and vice versa?",
      answer: "<p>Choose based on dimensionality and layout structure:</p><ul><li><strong>CSS Flexbox (1-Dimensional):</strong> Designed to lay out items along a single axis (either row <em>or</em> column). Ideal for navbars, toolbars, vertical centering, and component alignment.</li><li><strong>CSS Grid (2-Dimensional):</strong> Designed to arrange items across simultaneous rows <em>and</em> columns. Ideal for overall page skeletons, photo galleries, and card dashboards.</li></ul>"
    },
    {
      id: 7,
      category: "JavaScript",
      tag: "Events & Delegation",
      question: "What is Event Delegation in JavaScript, and what core advantage does it provide?",
      answer: "<p><strong>Event Delegation</strong> is a technique where a single listener is placed on a parent container rather than attaching individual listeners to each child element.</p><p>It works through <strong>event bubbling</strong>: when an event occurs on a child, it propagates up the DOM tree.</p><ul><li><strong>Benefits:</strong> Drastically reduces memory overhead and automatically handles dynamic child elements added later.</li></ul>"
    },
    {
      id: 8,
      category: "HTML5",
      tag: "Accessibility & ARIA",
      question: "What is the purpose of the 'alt' attribute on images, and when should you use ARIA?",
      answer: "<p>The <strong><code>alt</code> attribute</strong> serves two crucial roles:</p><ul><li>Provides screen readers with a spoken description for visually impaired visitors.</li><li>Displays readable fallback text if the image fails to load.</li></ul><p><strong>ARIA (Accessible Rich Internet Applications)</strong> attributes (like <code>aria-label</code> and <code>aria-expanded</code>) provide semantic clues when native HTML elements cannot convey dynamic UI state.</p>"
    },
    {
      id: 9,
      category: "CSS3",
      tag: "Cascade & Specificity",
      question: "How does CSS Specificity calculate which stylesheet rule wins in a conflict?",
      answer: "<p>Specificity calculates precedence using a 4-tier weighting hierarchy:</p><ol style=\"padding-left: 1.25rem; margin-bottom: 0.5rem;\"><li><strong>Inline Styles</strong> (<code>style=\"...\"</code>): 1,000 points</li><li><strong>IDs</strong> (<code>#header</code>): 100 points</li><li><strong>Classes &amp; Attributes</strong> (<code>.btn</code>, <code>[type]</code>, <code>:hover</code>): 10 points</li><li><strong>Elements &amp; Pseudo-elements</strong> (<code>div</code>, <code>p</code>, <code>::before</code>): 1 point</li></ol><p>If two rules have identical specificity, the rule declared <strong>latest</strong> in the cascade wins.</p>"
    },
    {
      id: 10,
      category: "JavaScript",
      tag: "Asynchronous JavaScript",
      question: "What is the difference between synchronous and asynchronous execution in JavaScript?",
      answer: "<p>JavaScript runs on a <strong>single-threaded</strong> event loop:</p><ul><li><strong>Synchronous:</strong> Code executes sequentially line-by-line. Each operation blocks the thread until completed.</li><li><strong>Asynchronous:</strong> Time-consuming tasks (e.g. <code>fetch()</code>, <code>setTimeout</code>, Promises, <code>async/await</code>) run non-blocking in the background, executing callbacks when ready without freezing the browser UI.</li></ul>"
    }
  ];

  // --------------------------------------------------------------------------
  // Application State
  // --------------------------------------------------------------------------
  let deck = [...initialDeck]; // Working copy of the deck
  let currentIndex = 0;        // Current card index (0-based)
  let isFlipped = false;       // Track flip status of active card

  // --------------------------------------------------------------------------
  // DOM References
  // --------------------------------------------------------------------------
  const flashcard = document.getElementById('flashcard');
  const questionText = document.getElementById('questionText');
  const answerText = document.getElementById('answerText');

  const cardCategoryFront = document.getElementById('cardCategoryFront');
  const cardTagFront = document.getElementById('cardTagFront');
  const cardIndexFront = document.getElementById('cardIndexFront');

  const cardCategoryBack = document.getElementById('cardCategoryBack');
  const cardTagBack = document.getElementById('cardTagBack');
  const cardIndexBack = document.getElementById('cardIndexBack');

  const cardCounter = document.getElementById('cardCounter');
  const progressPercentage = document.getElementById('progressPercentage');
  const progressBar = document.getElementById('progressBar');
  const progressBarTrack = document.getElementById('progressBarTrack');

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const flipBtn = document.getElementById('flipBtn');
  const flipBtnText = document.getElementById('flipBtnText');
  const shuffleBtn = document.getElementById('shuffleBtn');

  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer = null;

  // --------------------------------------------------------------------------
  // Render Function: Update Card & Navigation UI
  // --------------------------------------------------------------------------
  function renderCard() {
    const totalCards = deck.length;
    const currentCard = deck[currentIndex];

    // 1. Reset flip state when loading a card
    resetFlipState();

    // 2. Format Card Number index (e.g., #01, #02)
    const formattedIndex = String(currentIndex + 1).padStart(2, '0');
    const indexString = `#${formattedIndex}`;

    // 3. Populate Front Face Content (Question)
    cardCategoryFront.textContent = currentCard.category;
    cardTagFront.textContent = currentCard.tag;
    cardIndexFront.textContent = indexString;
    questionText.textContent = currentCard.question;

    // 4. Populate Back Face Content (Answer)
    cardCategoryBack.textContent = currentCard.category;
    cardTagBack.textContent = currentCard.tag;
    cardIndexBack.textContent = indexString;
    answerText.innerHTML = currentCard.answer;

    // 5. Update Progress Indicator Text & Progress Bar
    const currentDisplayNumber = currentIndex + 1;
    cardCounter.textContent = `Card ${currentDisplayNumber} of ${totalCards}`;
    
    const percentage = Math.round((currentDisplayNumber / totalCards) * 100);
    progressPercentage.textContent = `${percentage}% Completed`;
    progressBar.style.width = `${percentage}%`;
    progressBarTrack.setAttribute('aria-valuenow', percentage);

    // 6. Handle Boundary Conditions on Navigation Buttons
    // Disable Previous on first card (index 0)
    if (currentIndex === 0) {
      prevBtn.disabled = true;
      prevBtn.setAttribute('aria-disabled', 'true');
    } else {
      prevBtn.disabled = false;
      prevBtn.removeAttribute('aria-disabled');
    }

    // Disable Next on last card (index totalCards - 1)
    if (currentIndex === totalCards - 1) {
      nextBtn.disabled = true;
      nextBtn.setAttribute('aria-disabled', 'true');
    } else {
      nextBtn.disabled = false;
      nextBtn.removeAttribute('aria-disabled');
    }

    // 7. Accessibility labels
    updateCardAccessibility();
  }

  // --------------------------------------------------------------------------
  // Flip Mechanics
  // --------------------------------------------------------------------------
  function toggleFlip() {
    isFlipped = !isFlipped;
    if (isFlipped) {
      flashcard.classList.add('is-flipped');
      flipBtnText.textContent = 'View Question';
    } else {
      flashcard.classList.remove('is-flipped');
      flipBtnText.textContent = 'Flip Card';
    }
    updateCardAccessibility();
  }

  function resetFlipState() {
    if (isFlipped) {
      isFlipped = false;
      flashcard.classList.remove('is-flipped');
      flipBtnText.textContent = 'Flip Card';
    }
  }

  function updateCardAccessibility() {
    flashcard.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
    const sideName = isFlipped ? 'Answer' : 'Question';
    const actionPrompt = isFlipped ? 'return to question' : 'reveal answer';
    flashcard.setAttribute(
      'aria-label', 
      `Flashcard ${currentIndex + 1} of ${deck.length}. Currently showing ${sideName}. Click or press Enter to ${actionPrompt}.`
    );
  }

  // --------------------------------------------------------------------------
  // Navigation: Next & Previous
  // --------------------------------------------------------------------------
  function goToNextCard() {
    if (currentIndex < deck.length - 1) {
      currentIndex++;
      renderCard();
    }
  }

  function goToPrevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      renderCard();
    }
  }

  // --------------------------------------------------------------------------
  // Shuffle Deck (Fisher-Yates Algorithm)
  // --------------------------------------------------------------------------
  function shuffleDeck() {
    // Fisher-Yates shuffle on deck array
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    // Always reset to first card of new order
    currentIndex = 0;
    renderCard();

    // Show temporary toast feedback
    showToast('Deck shuffled! Random order ready. 🔀');
  }

  function showToast(message) {
    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastMessage.textContent = message;
    toastNotification.classList.add('is-visible');
    toastNotification.setAttribute('aria-hidden', 'false');

    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('is-visible');
      toastNotification.setAttribute('aria-hidden', 'true');
    }, 2200);
  }

  // --------------------------------------------------------------------------
  // Event Listeners: Click & Touch
  // --------------------------------------------------------------------------
  
  // 1. Card Flip on direct click
  flashcard.addEventListener('click', (e) => {
    // Prevent accidental flip when user is selecting text in answer
    if (window.getSelection && window.getSelection().toString().length > 0) {
      return;
    }
    toggleFlip();
  });

  // 2. Flip Button
  flipBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFlip();
  });

  // 3. Navigation Buttons
  prevBtn.addEventListener('click', () => {
    goToPrevCard();
  });

  nextBtn.addEventListener('click', () => {
    goToNextCard();
  });

  // 4. Shuffle Button
  shuffleBtn.addEventListener('click', () => {
    shuffleDeck();
  });

  // --------------------------------------------------------------------------
  // Keyboard Navigation & Accessibility
  // --------------------------------------------------------------------------
  // Card-specific keyboard focus triggers (Enter & Space)
  flashcard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  });

  // Global keyboard shortcuts (Left/Right arrow, Space, S, F)
  document.addEventListener('keydown', (e) => {
    // Ignore keystrokes if an input/textarea has focus
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      return;
    }

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        goToPrevCard();
        break;
      case 'ArrowRight':
        e.preventDefault();
        goToNextCard();
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFlip();
        break;
      case 's':
      case 'S':
        e.preventDefault();
        shuffleDeck();
        break;
      case ' ':
        // If the card is not already focused (which handles Space separately)
        if (document.activeElement !== flashcard) {
          e.preventDefault();
          toggleFlip();
        }
        break;
      default:
        break;
    }
  });

  // --------------------------------------------------------------------------
  // Initial Deck Render
  // --------------------------------------------------------------------------
  renderCard();
});
