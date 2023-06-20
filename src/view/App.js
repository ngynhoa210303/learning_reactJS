// import Form from "../components/Form";
// import DOMEvent from "../components/DOMEvent";
// import MyConponent from "../components/MyConponent";
import NestingComponent from "../components/quan_he_cha_con_reactjs/NestingComponent";
import "./App.scss";
/**
 *  2 loai component chính class component / function component( function, arrow function )
 *
 */
//      2 cach khai bao function
//     - cach 1: function
// function App(){return ()}
//     - cach 2: arrow function
const App = () => {
  //function component
  return (
    //tra ve 1 khoi HTML
    <div className="App">
      <header className="App-header">
        {/* sdung JSX co the viet duoc code js phia trong html
         B12
           <MyComponent />
           B3: Tài liệu Reactjs.org->DOCs->MAIN CONCEPTS-> Handing events */}
        {/* <DOMEvent /> */}
        {/* <Confirm /> */}
        {/* <Form /> */}
        {/* B4: Quan hệ cha con của reactjs */}
        <NestingComponent />
      </header>
    </div>
  );
};

export default App;
