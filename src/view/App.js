// import Form from "../components/Form";
// import DOMEvent from "../components/DOMEvent";
// import MyConponent from "../components/MyConponent";
// import NestingComponent from "../components/B4_Quan_he_cha_con_reactjs/NestingComponent";
// import Form from "../components/B5_Render_nhieu_data_voi_PROPS/Form";
// import NestingComponent from "../components/B5_Render_nhieu_data_voi_PROPS/NestingComponent";
// import Form from "../components/B6_Stateless_StatefullComponent/Form";
// import Form from "../components/B7_ConditionalOutput/Form";
// import Form from "../components/B8_Split_Components_FCAS_Props/Form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ListToDo from "../components/B11_CRUD_XayDungAppToDo/ListToDo";
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
        {/* <NestingComponent /> */}
        {/* B5: Renders Nhiều Data với Props */}
        {/* <NestingComponent />
        <Form /> */}
        {/* B6: Function component(stateless-statefull) */}
        {/* <Form /> */}
        {/* B7: Điều kiện */}
        {/* <Form /> */}
        {/* B8/9/10: Split component-Add Validate-Delete-React Lifecycle Methods */}
        {/* <Form /> */}
        {/* B11: App To Do CRUD */}
        <ListToDo />
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
