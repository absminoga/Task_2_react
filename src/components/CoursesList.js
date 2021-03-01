import React from 'react';
import Courses from './Courses';

export default function CoursesList({ cards }) {
   const courseElements = cards.map(card =>
      <Courses key={card.id} card={card} />)
   return (
      <div className="block_courses">
         {courseElements}
      </div>
   )
};