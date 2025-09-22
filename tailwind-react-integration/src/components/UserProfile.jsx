function UserProfile() {
  return (
    <div
      className="
        bg-gray-100 
        p-2 sm:p-4 md:p-8 
        max-w-xs sm:max-w-sm 
        mx-auto my-10 sm:my-16 md:my-20 
        rounded-lg shadow-lg
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          rounded-full 
          mx-auto 
          w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36
        "
      />
      <h1
        className="
          text-base sm:text-lg md:text-xl 
          text-blue-800 
          my-2 sm:my-3 md:my-4
          text-center
        "
      >
        John Doe
      </h1>
      <p
        className="
          text-xs sm:text-sm md:text-base 
          text-gray-600 
          text-center
        "
      >
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
