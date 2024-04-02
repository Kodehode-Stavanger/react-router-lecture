import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <Link to="/profiles">Go to profiles page</Link>
    </div>
  );
}
