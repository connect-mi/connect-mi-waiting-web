const SubInput = () => {
  return (
    <div className="flex flex-row">
      <input
        className="py-4 px-2 md:px-10 rounded-s-2xl"
        type="text"
        placeholder="Type your email address"
      />
      <button className="bg-[#222F3E] p-3 md:p-5 rounded-2xl ms-[-2rem] text-white whitespace-nowrap">
        Join Us
      </button>
    </div>
  );
};

export default SubInput;
