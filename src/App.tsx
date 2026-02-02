import React, { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectDetail } from './components/ProjectDetail';
import { Contact } from './components/Contact';
import { Roadmap } from './components/Roadmap';
import { Assignments } from './components/Assignments';
import { AssignmentDetail } from './components/AssignmentDetail';
import { Assignment5Detail } from './components/Assignment5Detail';
import { EmpathyMap } from './components/EmpathyMap';
import { IdeationSketching } from './components/IdeationSketching';
import { IterativeDevelopment } from './components/IterativeDevelopment';
import { FinalPrototype } from './components/FinalPrototype';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'projects' | 'project-detail' | 'contact' | 'roadmap' | 'assignments' | 'assignment-detail' | 'assignment5-detail' | 'empathy-map' | 'ideation-sketching' | 'iterative-development' | 'final-prototype'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateToProject = (projectId: number) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project-detail');
  };

  const navigateToAssignment = (assignmentId: number) => {
    setSelectedAssignmentId(assignmentId);
    setCurrentPage('assignment-detail');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <main>
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <About setCurrentPage={setCurrentPage} />}
        {currentPage === 'assignments' && <Assignments setCurrentPage={setCurrentPage} navigateToAssignment={navigateToAssignment} />}
        {currentPage === 'assignment-detail' && (
          <AssignmentDetail setCurrentPage={setCurrentPage} assignmentId={selectedAssignmentId} />
        )}
        {currentPage === 'assignment5-detail' && (
          <Assignment5Detail setCurrentPage={setCurrentPage} assignmentId={selectedAssignmentId} />
        )}
        {currentPage === 'projects' && <Projects setCurrentPage={setCurrentPage} navigateToProject={navigateToProject} />}
        {currentPage === 'project-detail' && (
          <ProjectDetail setCurrentPage={setCurrentPage} projectId={selectedProjectId} />
        )}
        {currentPage === 'contact' && <Contact setCurrentPage={setCurrentPage} />}
        {currentPage === 'roadmap' && <Roadmap setCurrentPage={setCurrentPage} />}
        {currentPage === 'empathy-map' && <EmpathyMap setCurrentPage={setCurrentPage} />}
        {currentPage === 'ideation-sketching' && <IdeationSketching setCurrentPage={setCurrentPage} />}
        {currentPage === 'iterative-development' && <IterativeDevelopment setCurrentPage={setCurrentPage} />}
        {currentPage === 'final-prototype' && <FinalPrototype setCurrentPage={setCurrentPage} />}
      </main>
    </div>
  );
}