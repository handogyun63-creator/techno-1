
# Blueprint: Foreign Student Document Service

## 1. Overview

This web application serves as a platform to automate the generation of part-time employment documents for foreign students in Korea. It provides separate portals for employers and students to streamline the process of creating, signing, and managing necessary paperwork like labor contracts and employment confirmations.

## 2. Design and Style Guide

- **Layout:** A clean, modern, and responsive two-column layout. The main navigation will allow users to switch between the "Employer" and "Student" sections.
- **Color Palette:**
  - Primary: `#3498db` (A professional and calming blue)
  - Secondary: `#2ecc71` (A friendly and encouraging green)
  - Accent: `#f1c40f` (A warm and noticeable yellow)
  - Text: `#333333` (Dark grey for readability)
  - Background: `#f9f9f9` (A very light grey for a soft, clean look)
- **Typography:** `Roboto` from Google Fonts for its modern and clean appearance.
- **Components:**
  - Cards with soft drop shadows to present information.
  - Buttons with a subtle glow effect on hover.
  - Responsive forms for data input.
  - A navigation bar that is intuitive and easy to use.

## 3. Features & Implementation Plan

### Phase 1: Core Structure (Current Task)

1.  **`index.html`:**
    *   Set up the main page with a header and a central container.
    *   Create two primary buttons on the landing page: "For Employers" and "For Students".
    *   Create hidden container sections for each user type's features.
    *   **Employer Section (`#employer-view`):**
        *   A form to post a job opening.
    *   **Student Section (`#student-view`):**
        *   A self-assessment checklist for required documents.
        *   A form to submit personal information for document generation.
        *   A section to view and electronically sign generated documents.
2.  **`style.css`:**
    *   Implement the design guide (colors, fonts).
    *   Style the main layout, buttons, forms, and cards.
    *   Add basic responsiveness using media queries.
3.  **`main.js`:**
    *   Implement logic to show/hide the employer and student views based on button clicks.
    *   Define custom elements (`<employer-view>`, `<student-view>`) to encapsulate the functionality for each section.

### Phase 2: Document Generation (Future)

*   Implement a JavaScript library (like `jsPDF`) to generate PDF documents from the student's input data.
*   Develop templates for:
    *   Part-time Employment Confirmation
    *   Labor Contract
    *   Compliance Confirmation

### Phase 3: Electronic Signatures (Future)

*   Integrate a library (like `signature_pad.js`) to allow students to draw their signatures on a canvas element.
*   Overlay the signature onto the generated PDF documents.

### Phase 4: Backend & Database (Future)

*   Set up a backend service (e.g., using Firebase Functions) to manage data.
*   Use a database (e.g., Firestore) to store user information, job postings, and generated documents.
