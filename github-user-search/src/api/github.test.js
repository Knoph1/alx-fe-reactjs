import { fetchUserData } from "./github";

global.fetch = jest.fn();

describe("fetchUserData", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("calls GitHub API with correct username", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ login: "knoph" }),
    });

    const user = await fetchUserData("knoph");

    expect(fetch).toHaveBeenCalledWith("https://api.github.com/users/knoph");
    expect(user.login).toBe("knoph");
  });

  it("throws error if user not found", async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    await expect(fetchUserData("baduser")).rejects.toThrow("User not found");
  });
});
