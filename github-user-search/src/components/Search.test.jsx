import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "./Search";
import * as github from "../api/github";

jest.mock("../api/github");

describe("Search component", () => {
  beforeEach(() => {
    github.fetchUserData.mockClear();
  });

  test("calls fetchUserData with entered username", async () => {
    github.fetchUserData.mockResolvedValueOnce({
      login: "knoph",
      avatar_url: "https://avatar.com",
      html_url: "https://github.com/knoph",
    });

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/search github username/i), {
      target: { value: "knoph" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    await waitFor(() =>
      expect(github.fetchUserData).toHaveBeenCalledWith("knoph")
    );
  });

  test("renders error if user not found", async () => {
    github.fetchUserData.mockRejectedValueOnce(new Error("User not found"));

    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText(/search github username/i), {
      target: { value: "baduser" },
    });
    fireEvent.submit(screen.getByRole("button", { name: /search/i }));

    expect(
      await screen.findByText(/looks like we cant find the user/i)
    ).toBeInTheDocument();
  });
});
