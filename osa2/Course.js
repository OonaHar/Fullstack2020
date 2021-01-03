import React from 'react';


const Content = ({ parts }) => (
  <content>
    {parts.map(({ name, exercises, id }) => (
      <Part key={id} name={name} exercises={exercises} />
    ))}
  </content>
);

const Header = (props) => {
    return <h1>{props.name}</h1>;
  };
const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);


const Course = ({ course }) => (
    <div>  
    <Header name={course.name} />
    <Content parts={course.parts} />
  </div>
  );

  


export default Course;