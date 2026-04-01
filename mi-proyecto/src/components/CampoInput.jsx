function CampoInput({ label, type, placeholder }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} class ="u-full-width" placeholder={placeholder}
      />
    </>
  );
}

export default CampoInput;

