import { render, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";

describe("Sideba", () => {
    test("render", () => {
        render(<Sidebar />);

        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
});
