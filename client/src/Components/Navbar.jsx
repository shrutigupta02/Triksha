import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        TRIKSHA
      </div>
      <div className="list">
        <div onClick={() => navigate("/")}>HOME</div>
        <div onClick={() => navigate("/collection")}>COLLECTION</div>
        <div onClick={() => navigate("/aboutus")}>ABOUT US</div>
      </div>
    </div>
  );
}
