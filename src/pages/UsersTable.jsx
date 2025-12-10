import Table from "../components/Table";

export default function UsersTable() {
  const columns = ["Name", "Email", "Role"];
  const data = [
    { Name: "John", Email: "john@example.com", Role: "Admin" },
    { Name: "Jane", Email: "jane@example.com", Role: "User" },
  ];

  return (
    <div className="page users">
      <h1>Users</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}
