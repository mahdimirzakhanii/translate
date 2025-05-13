import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center gap-5 w-full">
      <button
        className="flex items-center justify-center gap-2 hover:text-blue-500 cursor-pointer inset-shadow-lg hover:inset-shadow-md duration-500 font-bold text-lg rounded-md py-2 w-48 bg"
        onClick={() => navigate("/words")}
      >
        Words
      </button>
      <button
        className="flex items-center justify-center gap-2 hover:text-blue-500 cursor-pointer inset-shadow-lg hover:inset-shadow-md duration-500 font-bold text-lg rounded-md py-2 w-48 bg"
        onClick={() => navigate("/manage")}
      >
        Words Management
      </button>
    </div>
  );
};

export default Home;
