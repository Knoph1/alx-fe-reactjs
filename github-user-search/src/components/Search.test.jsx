import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "./Search";

global.fetch = jest.fn();

describe("Search component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("calls API with the right endpoint", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ login: "knoph", avatar_url: "https://avatar.com" }),
    });

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/search github username/i), {
      target: { value: "knoph" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("https://api.github.com/users/knoph");
    });
  });

  test("displays user when found", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ login: "knoph", avatar_url: "https://avatar.com" }),
    });

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/search github username/i), {
      target: { value: "knoph" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    expect(await screen.findByText("knoph")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "https://avatar.com");
  });

  test("shows error if user not found", async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/search github username/i), {
      target: { value: "unknownuser" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    expect(
      await screen.findByText(/looks like we cant find the user/i)
    ).toBeInTheDocument();
  });
});
