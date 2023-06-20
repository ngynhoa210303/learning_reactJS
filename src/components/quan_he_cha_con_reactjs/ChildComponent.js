import React from "react";
class ChildComponent extends React.Component {
  state = {
    name: "",
    age: "",
  };

  render() {
    console.log(">>> check props: ", this.props); //ktra data từ cha truyền xuống
    // C1:
    //let name=this.props.name;
    // let age=this.props.age;
    // C2:
    let { name, age } = this.props; //this.props bản chất là OBJ
    return (
      <>
        {/* props: property: Giải quyết vấn đề truyền data từ cha-> con
          Cha ở đây là NestingComponent -> con là ChildComponent
          Props (viết tắt của Properties) là cách Child Component có thể Inherit (kế thừa) lại data từ Parent Component truyền xuống. Với việc sử dụng props, luồng dữ liệu sẽ được truyền theo kiểu Top to Bottom (truyền từ trên xuống dưới).*/}
        <div>
          ChildComponent name :{name} - {age}
        </div>
      </>
    );
  }
}
export default ChildComponent;
