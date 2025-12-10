import { useEffect, useState } from "react";

export default function Settings() {
  // ✅ All settings in one state object
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("appSettings");
    return saved
      ? JSON.parse(saved)
      : {
          darkMode: false,
          notifications: true,
          language: "en",
        };
  });

  const { darkMode, notifications, language } = settings;

  // ✅ Auto Save Settings to localStorage
  useEffect(() => {
    localStorage.setItem("appSettings", JSON.stringify(settings));

    // ✅ Apply Dark Mode on body
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [settings, darkMode]);

  return (
    <div className="page settings">
      <h1>Settings</h1>

      {/* ✅ Dark Mode */}
      <div className="settings-option">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) =>
              setSettings({ ...settings, darkMode: e.target.checked })
            }
          />
          Enable Dark Mode
        </label>
      </div>

      {/* ✅ Notifications */}
      <div className="settings-option">
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) =>
              setSettings({ ...settings, notifications: e.target.checked })
            }
          />
          Enable Notifications
        </label>
      </div>

      {/* ✅ Language Select */}
      <div className="settings-option">
        <label>Choose Language</label>
        <select
          value={language}
          onChange={(e) =>
            setSettings({ ...settings, language: e.target.value })
          }
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
        </select>
      </div>
     
    </div>
  );
}
