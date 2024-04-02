import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404! This page doesn't exist 🤔</h1>
      <Link to="/">Go back to homepage</Link>
      <br />
      <a href="/">Back link without Link component</a>
    </div>
  );
}
