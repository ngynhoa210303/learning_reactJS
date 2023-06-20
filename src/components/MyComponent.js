import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Hoant",
    age: 19,
  };
  render() {
    let name = "hoahahah";
    return (
      // JSX luôn return vể 1 block
      // <div>
      //  Hoant dep qua , Ten toi la {name}
      // </div>
      //   {/* Nếu không có div bọc bên ngoài tất cả nội dung muốn in ra thì ta dùng fragment */}
      // C1: <React.Fragment>Hoant dep qua , Ten toi la {name}</React.Fragment>
      // Ngoài ra có thể dùng
      <>
        Hoant dep qua , Ten toi la {name}
        <div>
          {this.state.name}
          {/* this: gọi đến class
           */}
        </div>
      </>
      // => không cần 1 thẻ div bọc bên ngoài những thẻ div khác nếu muốn mà chương trình vẫn chạy bthuong
      // STATE -> Cập nhật dlieu liên tục không cần refrest lại
    );
  }
}

export default MyComponent; //Chỉ export 1 file
