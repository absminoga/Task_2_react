import React from 'react';
// import './App.css';
import CoursesList from './components/CoursesList';
import cards from './fixtures'

function App() {
  return (
    <div id="new-courses" className="section_courses">
      <div className="container">
        <h2 className="section-course_title">нові курси</h2>
        <CoursesList cards={cards} />
      </div>
    </div>
  )
};

export default App; 
