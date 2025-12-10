import Card from "../components/Card";

export default function Dashboard() {
  const cards = [
    { title: "Total Users", value: 1200 },
    { title: "Total Sales", value: "$34,000" },
    { title: "New Orders", value: 230 },
  ];

  return (
    <div className="page dashboard">
      <h1>Dashboard</h1>
      <div className="cards-container">
        {cards.map((c, idx) => (
          <Card key={idx} title={c.title} value={c.value} />
        ))}
      </div>
    </div>
  );
}
