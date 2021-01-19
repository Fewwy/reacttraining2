import React from "react";

import "./index.css";
import { data } from "./data";
const UserList = () => {
  const [users, setUsers] = React.useState(data);

  //function to remove user onclick by id
  const removeUser = (id) => {
    setUsers((oldUsers) => {
      let newUsers = oldUsers.filter((person) => person.id !== id);
      return newUsers;
      // the logic is that we are looking for the id we got in const removeitem,
      //and if person.id not equal to the matching id are returned to the new people
    });
  };

  return (
    <>
      {users.map((person) => {
        const { id, name } = person;
        return (
          <section className="container">
            <div key={id} className="item">
              <h4>{name}</h4>
              <button className="btn" onClick={() => removeUser(id)}>
                remove
              </button>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default UserList;
