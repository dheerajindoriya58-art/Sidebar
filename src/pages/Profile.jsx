export default function Profile() {
  return (
    <div className="page profile">
      <h1>Profile</h1>
      <form className="profile-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
