import React from "react";
// import ChildComponent from "./ChildComponent";
// class NestingComponent extends React.Component {
//   state = {
//     name: "",
//     age: "",
//   };

//   render() {
//     console.log(">>> call render: ", this.state);
//     let { arrJobs } = this.props; //this.props bản chất là OBJ
//     return (
//       <>
//         <div className="job-lists">
//           {arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }

//Stateless (Function component) và StateFull (Class component) là hai loại component được sử dụng phổ biến nhất của React. Trong bài này, chúng ta sẽ đi tìm hiểu hai loại component này, đi tìm lí do tại sao chúng ra đời cũng như mục đích ra đời của 2 loại này.
const NestingComponent = (props) => {
  console.log(">>check props", props);
  //khum caàn this
  let { arrJobs } = props;
  return (
    <>
      <div className="job-lists">
        {arrJobs.map((item, index) => {
          return (
            <div key={item.id}>
              {item.title} - {item.salary}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NestingComponent;
