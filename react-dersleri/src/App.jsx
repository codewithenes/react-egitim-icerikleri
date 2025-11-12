import { useEffect, useState } from "react";
import Header from './header'
import  {courses} from "./Data"
import Course from "./Course";
import "./css/course.css"

function App() {

  return (
    <div>
      <Header/>
      <div className="course-main">
        {courses.map((course)=>(
        <Course key={course.id} course =  {course} />
      ))}
      </div>
      
      
    </div>
  )

}
export default App;
