import logo from "../../public/images/logo.png";

function Logo({ onClick }) {

  const handleClick = () => {
    onClick("");
  };

  return (
    <div className="w-1/2 flex items-center md:w-1/12">
        <img src={logo} className="w-[4rem] ml-2 md:ml-5" onClick={handleClick}/>
    </div>
  )
}
  
export default Logo