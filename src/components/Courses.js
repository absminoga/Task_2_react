import React, { Component } from 'react';
// import './courses.css'

class Courses extends Component {

   state = {
      isOpen: false
   }

   render() {
      const { card } = this.props
      const description = this.state.isOpen && < div className="course_description" > {card.description}</div>
      return (
         <div>
            <div className="course" role="link">
               <div className="course_img" style={{
                  backgroundImage: `url("${card.img}")`
               }} >

               </div>

               <div className="course_title" onClick={this.handleClick}> {card.title}</div>
               <div className="course_btn" onClick={this.handleClick}>
                  {this.state.isOpen ? "згорнути" : "детально"}
               </div>
               {description}
               <div className="start-date">Початок: {card.date}</div>
            </div>
         </div >
      )
   }
   handleClick = () => {
      this.setState({
         isOpen: !this.state.isOpen
      })
   }
}


export default Courses;