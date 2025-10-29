import "./style.css";

export default function Header() {
  return (
    <header className="app-header">
      <input
        type="text"
        className="app-header__search"
        placeholder="username"
      />
    </header>
  );
}
