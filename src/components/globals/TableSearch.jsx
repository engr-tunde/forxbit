import { FaSearch } from "react-icons/fa";

const TableSearch = ({ setSearchBy }) => {
  return (
    <div className="h-max w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
      <FaSearch className="" />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none h-[37px]"
        onChange={(e) => setSearchBy(e.target.value)}
        style={{ border: "0px", outline: "none" }}
      />
    </div>
  );
};

export default TableSearch;
