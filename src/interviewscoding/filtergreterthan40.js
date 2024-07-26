import React from 'react';

export default function FilterGreterthan40() {
  const employees = [
    {
      id: 1,
      name: 'John',
      age: 35,
    },
    {
      id: 2,
      name: 'Steve',
      age: 45,
    },
  ];
  return (
    <div>
      <h1>Employees above age 40</h1>
      <ul>
        {employees
          .filter((emp) => emp.age > 40)
          .map((id) => {
            return <li>{id.name}</li>;
          })}
      </ul>
    </div>
  );
}
