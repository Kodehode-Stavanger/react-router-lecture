import { NavLink, Outlet } from "react-router-dom";
export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {profiles.map((profile) => (
        <NavLink
          to={`/profiles/${profile}`}
          key={profile}
          className={({ isActive }) => (isActive ? "green" : "")}
        >
          Profile {profile}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
}
