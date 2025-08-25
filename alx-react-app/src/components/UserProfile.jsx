const UserProfile = (props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "250px", margin: "10px auto" }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
