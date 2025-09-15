const SearchResults = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        Looks like we can’t find the user
      </p>
    );
  }

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full border mb-3"
          />
          <h3 className="text-lg font-semibold">{user.login}</h3>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
