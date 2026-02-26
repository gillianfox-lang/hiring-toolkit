import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MockInterview from './components/MockInterview'
import QuestionBank from './components/QuestionBank'
import TrainingProgram from './components/TrainingProgram'
import Playbook from './components/Playbook'
import InterviewGuides from './components/InterviewGuides'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <MockInterview />
        <QuestionBank />
        <TrainingProgram />
        <Playbook />
        <InterviewGuides />
      </main>
      <footer className="app-footer">
        <p>Hiring Manager Training Toolkit — Practice makes perfect.</p>
      </footer>
    </div>
  )
}
