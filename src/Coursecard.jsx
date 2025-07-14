import { Link } from 'react-router-dom';

function Coursecard({ imgSrc, title, description, link, Btntxt }) {
  return (
    <div className="w-[350px] h-[370px] bg-[#575757] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col">
      <div className="h-[40%] overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 opacity-90"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow text-gray-300">
        <h5 className="text-lg font-bold text-white mb-2">{title}</h5>
        <p className="text-sm mb-4 line-clamp-3">{description}</p>
        <Link
          to={link}
          className="mt-auto bg-[#1e74d5] hover:bg-[#145cac] text-white text-center py-2 px-4 rounded transition duration-300"
        >
          {Btntxt}
        </Link>
      </div>
    </div>
  );
}

export default Coursecard;