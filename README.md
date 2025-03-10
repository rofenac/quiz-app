# 🚀 FULL STACK...ARISE 🌌

> *"The fullstack deployment is complete. Now, witness the firepower of this fully armed and operational application!"*

## ⚔️ ALL WINGS REPORT IN...

### 🛸 FRONTEND STANDING BY
| Technology | Function |
|------------|---------|
| ⚛️ ReactJS | Creates powerful disturbances in the DOM, binding components with a strength greater than any tractor beam |
| ⚡ Vite | Makes the jump to hyperspace while other build tools are still calculating routes through the asteroid field |
| 🛡️ Material UI | Provides elegant components for a more civilized age, complete with `@mui/icons-material` |
| 🌊 TailwindCSS 4.0 | "Never tell me the odds" of rapidly styling components with this utility-first targeting computer |
| 🌟 DaisyUI 5.0 | The power to destroy a planet-sized UI challenge is insignificant next to these pre-built components |
| ✨ GSAP | Handles animations with the precision of a smuggler navigating an imperial blockade |

### 🛸 BACKEND STANDING BY
| System | Technology | Intelligence Briefing |
|-------|------------|-------|
| 🌑 Server | NodeJS with Fastify + React | A single battle station on Akamai—housing both frontend and backend forces on the same command ship |
| 💾 Database | MySQL | A remote outpost safeguarding "the plans you refer to"—from questions to leaderboard stats—secured on a separate server |
| 🤖 Process Manager | PM2 | A loyal companion that keeps your server running—these ARE the deployments you're looking for |

### 🛸 THE TECHNICAL READOUT

```
                Deployment Diagram

                        Application Server              Database Server w/ exhaust port
                       ┌───────────┬───────┐               ┌────┐
                       ↓           ↓       └──────────────→│ <> │
                   Frontend    Backend                     └────┘
```

### 🛸 INFRASTRUCTURE AS CODE STANDING BY
| Technology | Intelligence Briefing |
|------------|----------------------|
| 🏗️ Terraform | Creates entire galactic infrastructure with a single command—deploys our fleet of Akamai (Linode) servers with the precision of Imperial shipyards |
| 🤖 Ansible | Configures the battle stations after deployment—like having an army of droids installing and configuring all systems to exact specifications |

#### 🌌 Deployment Chronicles: The Infrastructure Saga

Our journey to deploy the PMP Quiz App spanned across the digital galaxy, utilizing the power of Infrastructure as Code:

**Chapter I: Terraform — The Creation of Battle Stations**

With Terraform as our galactic architect, we forged two powerful servers from the void:

The NodeJS Battle Station emerged in the US-SEA region. This g6-standard-2 class vessel, powered by linode/ubuntu24.04 technology, and running our frontend and backend forces on a single command ship.

The MySQL Outpost was strategically positioned in the same US-SEA quadrant. Another g6-standard-2 vessel, safeguarding "the plans you refer to" from unauthorized access.

**Chapter II: Ansible — The Configuration Chronicles**

Once our vessels materialized in the digital cosmos, Ansible's droid army descended upon them:

For the NodeJS Battle Station, the droids meticulously installed NodeJS, NPM, Git, and other essential systems. They deployed our application code from the central repository and established PM2 as the loyal companion to ensure continuous operation.

The MySQL Outpost received specialized configuration—the droids installed and fortified MySQL, created the necessary schemas, and established secure communication channels with the NodeJS Battle Station.

Like a well-coordinated Imperial fleet, our infrastructure now stands ready, with each component communicating seamlessly to deliver the PMP Quiz experience across all corners of the galaxy.

**I find your lack of downtime disturbing. 🎊**

---

# PMP Quiz App – Project Vision, Backlog, and Sprint Breakdown

## **Project Vision**

Build a responsive PMP Quiz App that:
- Displays multiple-choice questions (4 options per question)
- Organizes questions by PMP knowledge areas (People, Process, Business Environment)
- Provides immediate feedback and explanations
- Tracks user scores during a quiz session and persists them between reloads
- Offers a leaderboard for gamification (with a reset option)
- Delivers a polished UI/UX on both desktop and mobile devices

---

## **Backlog & User Stories**

### **Epic 1: Quiz Functionality**

- **User Story 1:**
  **As a user, I want to view a multiple-choice quiz question with four options so that I can test my knowledge.**
  **Acceptance Criteria:**
  - The quiz page displays one question at a time.
  - Exactly four answer options are rendered as interactive buttons.
  - Questions are sourced from a JSON data file (or similar).

- **User Story 2:**
  **As a user, I want to receive immediate feedback on my answer so that I know if I was correct and learn the explanation.**
  **Acceptance Criteria:**
  - Upon selecting an answer, the app displays a message ("Correct!" or "Incorrect!") with a brief explanation.
  - The correct answer is highlighted regardless of whether the user’s answer was correct.
  - A "Next Question" button appears after feedback is shown.

- **User Story 3:**
  **As a user, I want to see my progress through the quiz so that I understand how many questions I have completed and how many remain.**
  **Acceptance Criteria:**
  - A progress bar or counter reflects the current question number and total questions.
  - Navigation between questions works seamlessly until the quiz is finished.

---

### **Epic 2: Scorekeeping & Leaderboard**

- **User Story 1:**
  **As a user, I want my score to be tracked during the quiz so that I know my performance in real time.**
  **Acceptance Criteria:**
  - Correct answers increment the score by a fixed value (e.g., 1 point per correct answer).
  - The score is updated and visible on the quiz page.

- **User Story 2:**
  **As a user, I want my score to persist between reloads so that I can continue or review my performance later.**
  **Acceptance Criteria:**
  - The score is saved (e.g., using local storage) so that a page refresh does not reset it.
  - On quiz completion, the final score is retained and can be referenced by the leaderboard.

- **User Story 3:**
  **As a user, I want to see a leaderboard that displays top scores so that I can compare my performance with others.**
  **Acceptance Criteria:**
  - The leaderboard displays a ranked list of users with their names and scores.
  - Leaderboard entries are sorted in descending order by score.
  - The leaderboard data is stored persistently (e.g., in local storage or via an API).

- **User Story 4:**
  **As a user, I want a reset button to clear the leaderboard so that I can start over if needed.**
  **Acceptance Criteria:**
  - A reset option/button is provided on the leaderboard page.
  - Clicking the reset button clears all persisted leaderboard data after confirmation.

---

### **Epic 3: Domain Categorization**

- **User Story 1:**
  **As a user, I want to choose a quiz domain (People, Process, Business Environment) so that I can focus on specific PMP knowledge areas.**
  **Acceptance Criteria:**
  - The quiz landing page (or navigation) allows selecting one of the three domains.
  - Questions are filtered by the selected domain when the quiz starts.
  - There is an option for a mixed/random quiz if no specific domain is selected.

---

### **Epic 4: UX/UI & Responsive Design**

- **User Story 1:**
  **As a user, I want the app to be visually appealing and responsive on both desktop and mobile devices so that I have a seamless experience.**
  **Acceptance Criteria:**
  - The UI leverages TailwindCSS, DaisyUI, and Material UI components for a modern look.
  - The layout adapts to various screen sizes (responsive design).
  - Interactive elements (buttons, progress bars) are easily accessible on touch devices.

- **User Story 2:**
  **As a new frontend developer, I want to simulate a real-world Agile project by evolving the UX/UI in parallel with code functionality so that my project reflects industry practices.**
  **Acceptance Criteria:**
  - Regular design reviews and iterations are scheduled.
  - A design system or style guide is established early on.
  - User feedback (or self-review) is incorporated into subsequent design refinements.

- **User Story 3:**
  **As a user, I want the entire home page card to be clickable so that navigation to specific domains is more intuitive.**
  **Acceptance Criteria:**
   - Each card on the home page is fully clickable, not just the domain text.
   - Hover effects or visual cues indicate the card's interactivity.
   - The update is consistent across all devices and screen sizes.

- **User Story 4:**
  **As a user, I want the "Take Quiz" button to be visible on the home page so that I can start the quiz without issues.**
  **Acceptance Criteria:**
   - The "Take Quiz" button is present and prominently displayed on the home page.
   - The button is styled consistently with the app's design.
   - The button is functional and directs users to the quiz section.

---

### **Epic 5: Project Maintenance & Technical Debt**

- **User Story 1:**
  **As a developer, I want to continuously refactor my codebase and mitigate technical debt so that my project remains maintainable and scalable.**
  **Acceptance Criteria:**
  - Refactoring sessions are planned after each sprint.
  - The code is well documented and follows a consistent style.
  - Code reviews or self-audits are performed periodically.

- **User Story 2:**
  **As a developer, I want to add tests for core functionality so that I can ensure stability as I refactor and add new features.**
  **Acceptance Criteria:**
  - Unit tests are written for critical components (e.g., quiz logic, score tracking, leaderboard).
  - A testing framework (such as Jest) is set up and integrated into the build process.
  - Tests run successfully with each build or commit.

---

## **Stretch Goals**

These are additional features and improvements that are not critical for the core functionality but will enhance the user experience or the overall quality of the project:

- **Stretch Goal 1: Timer & Time-Based Scoring**
  **Description:**
  Introduce a timer for each question to encourage quick thinking. Award bonus points for fast answers.
  **Acceptance Criteria:**
  - A countdown timer is displayed for each question.
  - Bonus points are awarded if the user answers within a set time frame.
  - The timer resets with each new question.

- **Stretch Goal 2: Animations and Transitions**
  **Description:**
  Enhance the UX with smooth animations and transitions for state changes (e.g., moving to the next question, displaying feedback, updating the leaderboard).
  **Acceptance Criteria:**
  - Animations are implemented using CSS transitions or animation libraries.
  - The animations do not interfere with usability or performance.
  - Feedback messages and UI elements fade in/out or slide appropriately.

- **Stretch Goal 3: Social Sharing**
  **Description:**
  Allow users to share their scores or leaderboard achievements on social media platforms.
  **Acceptance Criteria:**
  - A social sharing button is available on the final score/leaderboard page.
  - Pre-formatted messages or images are generated for sharing.
  - Integration with popular platforms (Facebook, Twitter, LinkedIn) is supported.

- **Stretch Goal 4: Backend Integration**
  **Description:**
  Replace local storage with a backend API (or serverless functions) to store scores and leaderboard data persistently, allowing for multi-device access and real-time updates.
  **Acceptance Criteria:**
  - A simple API endpoint is developed to record and fetch leaderboard data.
  - The quiz app communicates with the backend to retrieve and update scores.
  - Data security and basic validation are implemented.

---

## **Suggested Sprint Breakdown**

### **Sprint 1: Setup & Basic Quiz Mechanics**
- **Tasks:**
  - Set up the project environment with ReactJS, Vite, PostCSS, TailwindCSS, DaisyUI, and Material UI.
  - Import and display questions from the JSON file.
  - Implement the basic quiz component that renders one question at a time.
- **Goals:**
  - Establish a working quiz flow (question display, answer buttons, basic progress indicator).

---

### **Sprint 2: Feedback, Scorekeeping & Domain Filtering**
- **Tasks:**
  - Implement immediate feedback for each answer (correct/incorrect messages and explanations).
  - Add scorekeeping logic to update the score on correct answers.
  - Introduce domain filtering so that users can select a specific PMP knowledge area.
- **Goals:**
  - Users can take a quiz in a chosen domain and receive instant feedback.
  - Score updates are visible during the quiz.

---

### **Sprint 3: Leaderboard & Persistence**
- **Tasks:**
  - Implement persistent storage for scores (using local storage or an API stub).
  - Develop the leaderboard page to display user rankings.
  - Add a reset button to clear the leaderboard.
- **Goals:**
  - Scores persist between reloads.
  - Users can view and clear the leaderboard as needed.

---

### **Sprint 4: UX/UI Enhancements & Testing**
- **Tasks:**
  - Refine the overall design and responsiveness for both desktop and mobile.
  - Integrate Material UI components where applicable.
  - Set up unit tests for core components (quiz logic, score tracking, leaderboard).
  - Perform code refactoring and address any technical debt.
- **Goals:**
  - A polished, responsive, and well-tested app.
  - Finalize and document the design system/style guide.

---

### Sprint 5: UAT Feedback Implementation
- **Tasks:**
  - Modify home page cards to be fully clickable.
  - Ensure visual feedback (e.g., hover effects) is applied to clickable cards.
  - Investigate the disappearance of the "Take Quiz" button and restore it.
  - Test the changes across various devices and screen sizes for consistency.
- **Goals:**
  - Enhance user navigation by making home page cards fully interactive.
  - Ensure the "Take Quiz" button is visible and functional, allowing users to start the quiz seamlessly.

---

## **Next Steps**

1. **Review and Prioritize:**
   Go over these user stories, acceptance criteria, and stretch goals. Adjust priorities based on your timeline and resources.

2. **Task Breakdown:**
   Break down each user story (and stretch goal) into specific development tasks. Assign time estimates and decide which features to target in your upcoming sprints.

3. **Iterate and Expand:**
   As you build the core functionality, continuously refine your backlog and consider adding new user stories or stretch goals based on testing and user feedback.

4. **Document Decisions:**
   Keep a changelog or design document to record UX/UI decisions, code refactoring efforts, and lessons learned from implementing stretch goals.% 