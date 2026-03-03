import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InterviewPrep from './components/InterviewPrep'
import QuestionBank from './components/QuestionBank'
import TrainingProgram from './components/TrainingProgram'
import Playbook from './components/Playbook'
import InterviewGuides from './components/InterviewGuides'
import FedRamp from './components/FedRamp'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <InterviewPrep />
        <QuestionBank />
        <TrainingProgram />
        <Playbook />
        <InterviewGuides />
        <FedRamp />
      </main>
      <footer className="app-footer">
        <p>Hiring Manager Training Toolkit — Practice makes perfect.</p>
      </footer>
    </div>
  )
}
