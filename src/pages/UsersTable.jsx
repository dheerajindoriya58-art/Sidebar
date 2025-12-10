import { useState } from "react";
import Table from "../components/Table";

export default function UsersTable() {

  // ✅ Dynamic user data (state)
  const [users, setUsers] = useState([
    { Name: "John", Email: "john@example.com", Role: "Admin" },
    { Name: "Jane", Email: "jane@example.com", Role: "User" },
    { Name: "Amit", Email: "amit@gmail.com", Role: "User" },
    { Name: "Sara", Email: "sara@yahoo.com", Role: "Admin" },
  ]);

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const columns = ["Name", "Email", "Role", "Action"];

  // ✅ Delete user
  const handleDelete = (email) => {
    const filteredUsers = users.filter((u) => u.Email !== email);
    setUsers(filteredUsers);
  };

  // ✅ Search filter
  const filteredUsers = users.filter(
    (user) =>
      user.Name.toLowerCase().includes(search.toLowerCase()) ||
      user.Email.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Sorting
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.Name.localeCompare(b.Name);
    } else {
      return b.Name.localeCompare(a.Name);
    }
  });

  
  return (
    <div className="page users">
      <h1>Users Management</h1>

      {/* ✅ Search & Sort Controls */}
      <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          Sort ({sortOrder})
        </button>
      </div>

      {/* ✅ Custom Advanced Table */}
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedUsers.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No users found
              </td>
            </tr>
          ) : (
            sortedUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Role}</td>
                <td>
                  <button onClick={() => handleDelete(user.Email)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
