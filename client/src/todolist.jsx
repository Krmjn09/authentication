// import React, { useState, useEffect } from "react";

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   useEffect(() => {
//     // Load saved to-do list from localStorage when the component mounts
//     const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
//     setTodos(savedTodos);
//   }, []);

//   useEffect(() => {
//     // Save the current to-do list to localStorage whenever it changes
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = () => {
//     if (newTodo.trim() === "") {
//       return;
//     }

//     const newTask = {
//       id: Date.now(),
//       text: newTodo.trim(),
//       completed: false,
//     };

//     setTodos([...todos, newTask]);
//     setNewTodo("");
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="todo-list container mx-auto p-8 bg-gray-100 rounded shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-4 text-blue-500">
//         To-Do List
//       </h1>
//       <div className="flex items-center mb-4">
//         <input
//           type="text"
//           placeholder="Add a new task..."
//           className="todo-input border p-2 w-full rounded focus:outline-blue-500 focus:ring-2 focus:ring-blue-500"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           onKeyPress={(e) => {
//             if (e.key === "Enter") {
//               addTodo(); // Add todo on Enter key press for faster interaction
//             }
//           }}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
//           onClick={addTodo}
//         >
//           Add
//         </button>
//       </div>
//       <ul className="todo-list list-none">
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             className={`todo-item p-2 mb-2 border rounded flex justify-between items-center ${
//               todo.completed ? "line-through text-gray-500" : ""
//             }`}
//           >
//             <span onClick={() => toggleTodo(todo.id)} className="todo-text">
//               {todo.text}
//             </span>
//             <div className="flex items-center">
//               <button
//                 className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white todo-delete"
//                 onClick={() => deleteTodo(todo.id)}
//               >
//                 Delete
//               </button>
//               <span
//                 className={`ml-2 text-sm font-light ${
//                   todo.completed ? "text-gray-400" : ""
//                 }`}
//               >
//                 {todo.completed ? "Completed" : "Pending"}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <p className="text-center text-gray-500 mt-4">
//         Changes saved automatically.
//       </p>
//     </div>
//   );
// };

// export default TodoList;


import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";

export default function TodoList() {
  const [active, setActive] = useState("tab1");

  const handleClick = (value) => {
    if (value === active) {
      return;
    }

    setActive(value);
  };

  return (
    <section className="gradient-custom vh-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol xl="10">
            <MDBCard>
              <MDBCardBody className="p-5">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <MDBInput
                    type="text"
                    id="form1"
                    label="New task..."
                    wrapperClass="flex-fill"
                  />
                  <MDBBtn type="submit" color="info" className="ms-2">
                    Add
                  </MDBBtn>
                </div>
                <MDBTabs className="mb-4 pb-2">
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick("tab1")}
                      active={active === "tab1"}
                    >
                      All
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick("tab2")}
                      active={active === "tab2"}
                    >
                      Active
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick("tab3")}
                      active={active === "tab3"}
                    >
                      Completed
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent>
                  <MDBTabsPane show={active === "tab1"}>
                    <MDBListGroup className="mb-0">
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Cras justo odio</s>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Dapibus ac facilisis in</s>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Morbi leo risus
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Porta ac consectetur ac
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Vestibulum at eros
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBTabsPane>
                  <MDBTabsPane show={active === "tab2"}>
                    <MDBListGroup className="mb-0">
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Morbi leo risus
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Porta ac consectetur ac
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Vestibulum at eros
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBTabsPane>
                  <MDBTabsPane show={active === "tab3"}>
                    <MDBListGroup className="mb-0">
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Cras justo odio</s>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Dapibus ac facilisis in</s>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBTabsPane>
                </MDBTabsContent>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}