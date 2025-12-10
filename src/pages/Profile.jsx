import { useEffect, useState } from "react";

export default function Profile() {

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved
      ? JSON.parse(saved)
      : { user: "", email: "" };
  });

  const { user, email } = formData;

  //  Auto-save on every change
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || !email) {
      return alert("Please fill all the fields");
    }

    alert("Profile saved successfully ✅");
  };

  return (
    <div className="page profile">
      <h1>Profile</h1>

      <form className="profile-form" onSubmit={handleSubmit}>
        <label>User name</label>
        <input
          type="text"
          value={user}
          placeholder="Enter your name"
          onChange={(e) =>
            setFormData({ ...formData, user: e.target.value })
          }
        />

        <label>Email...</label>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
