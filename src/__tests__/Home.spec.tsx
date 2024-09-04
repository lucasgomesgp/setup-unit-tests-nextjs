import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Homepage", () => {
    it("should be render Homepage correctly", () => {
        render(<Home />);
        expect(screen.getByText(/Get started/i)).toBeInTheDocument();
    });
});