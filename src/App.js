import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form className="family-details">
        <label>
          {" "}
          Name:
          <input />
        </label>

        <label>
          {" "}
          Spouse:
          <input />
        </label>

        <label>
          {" "}
          Location:
          <input />
        </label>

        <label>
          {" "}
          Birth Year:
          <input />
        </label>

        <label>
          {" "}
          Present Address:
          <input />
        </label>

        <label>
          {" "}
          Family Photo:
          <input type="file" style={{ border: "none" }} />
          <input type="file" style={{ border: "none" }} />
        </label>
      </form>
    </div>
  );
}
