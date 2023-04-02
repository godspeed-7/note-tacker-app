import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";
const MockFollowerList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("should render follower item", async () => {
    render(<MockFollowerList />);
    const followerElem = await screen.findByTestId('follower-item-0');
    expect(followerElem).toBeInTheDocument();
  });
  

  // it("should render error message if no data", async () => {
  //   render(<MockFollowerList />);
  //   const errorElem = screen.getByText(/No Records Found/i);
  //   expect(errorElem).toBeInTheDocument();
  // });
});
