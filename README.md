# ELI.ai (Explain Like I'm...)

**ELI.ai** is a cinematic, persona-driven knowledge synthesis engine. It takes complex topics and distills them into tailored explanations for different audiences—ranging from a 5-year-old child to an executive CEO, a Gen Z persona, and an academic scholar.

Built with **React**, **Vite**, **Tailwind CSS**, and powered by **Groq (Llama 3.1)**.

## ✨ Features

- **Persona-Driven Explanations**: Transform any topic into 5 distinct "Vibes":
  - **5yo (Magical/Simple)**: Rainbows, magic wands, and simple analogies.
  - **Senior (Journalistic)**: Classic newspaper aesthetic with historical context.
  - **Executive (Tactical)**: Sharp, data-driven dashboard with actionable intelligence.
  - **Gen Z (Viral Feed)**: Neo-brutalist social thread aesthetic with high-energy slang.
  - **Academic (Peer-Reviewed)**: Formal manuscript style with conceptual rigor.
- **Cinematic Transitions**: Seamlessly morph between personas with immersive background decorators and theme-specific UI components.
- **Auto-Suggest/Auto-Expand**: Intelligent textarea that grows with your thoughts.
- **New Insight Workflow**: Quick reset to explore multiple topics rapidly.

## 🚀 Tech Stack

- **Frontend**: React (TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (Transitional logic) + Custom CSS Spring Animations
- **Icons**: Lucide React
- **AI Brain**: Groq API (Llama 3.1 8B Instant)

## 🛠️ Development Setup

### 1. Prerequisite
- Node.js (v18+)
- npm or yarn
- A **Groq API Key** (Get one at [console.groq.com](https://console.groq.com/))

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/arnofrxdd/eli.ai.git

# Navigate to project
cd eli.ai

# Install dependencies
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_MODEL_NAME=llama-3.1-8b-instant
```

### 4. Run Locally
```bash
npm run dev
```

## 🎨 Aesthetic Philosophy
Each persona is a fully immersive environment. The app uses **Neo-Brutalism** (Gen Z), **Minimalist Glassmorphism** (CEO), **Vintage Serif** (Senior), and **Playful Pastel** (5yo) to ensure the visual medium matches the message.

---
Created with 💖 by [arnofrxdd](https://github.com/arnofrxdd)
