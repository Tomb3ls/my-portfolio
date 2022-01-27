function MessageMe(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for contacting. Your message has been sent.");
  };

  const formBackgrStyle = {
    backgroundColor: "rgba(131, 146, 155)",
    borderRadius: "10px",
    padding: "1em",
    textAlign: "center",
  };

  const formStyle = {
    display: "grid",
    gap: "1em",
  };

  const txtAreaStyle = {
    minWidth: "20vw",
    minHeight: "40vh",
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formBackgrStyle}>
        <fieldset style={formStyle}>
          <h3 style={{ color: "white" }}>Message me</h3>
          <textarea style={txtAreaStyle}></textarea>
          <button style={{ maxWidth: "5em" }} type="submit">
            send
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default MessageMe;
