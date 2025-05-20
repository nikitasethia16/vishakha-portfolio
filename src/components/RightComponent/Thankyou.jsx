import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-center max-w-md">
        Your message has been sent successfully. I’ll get back to you soon.
      </p>
       <button
        onClick={goHome}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition mt-4"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
