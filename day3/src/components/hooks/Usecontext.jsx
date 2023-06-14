import { createContext, useState, useContext } from "react";

const UserContext = createContext();

function Comp1() {
  const [name, setName] = useState("Deepanshu");
  return (
    <UserContext.Provider value={name}>
      <h1>Hi, {name}</h1>
      <Comp2 />
    </UserContext.Provider>
  );
}


function Comp2() {
  const name = useContext(UserContext);
  return (
    <>
      <h1>Welcome back, {name}</h1>
    </>
  );
}

export default Comp1;
