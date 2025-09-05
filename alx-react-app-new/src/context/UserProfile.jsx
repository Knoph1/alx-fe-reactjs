function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px auto",
        borderRadius: "8px",
        width: "280px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.2)"
      }}
    >
      <h2 style={{ color: "blue", marginBottom: "10px" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: "italic", color: "#555" }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
