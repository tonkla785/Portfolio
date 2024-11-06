const Button1 = ({ name, isBeam = false, containerClass }) => {
    return (
      <button className={`btn ${containerClass}`}>
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping1"></span>
            <span className="btn-ping_dot1"></span>
          </span>
        )}
        {name}
      </button>
    );
  };
  
  export default Button1;