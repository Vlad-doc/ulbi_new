import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/componentRender/componentRender";
import { Sidebar } from "widgets/SideBar";

describe("Sidebar", () => {
    test("render", () => {
        componentRender(<Sidebar />);

        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("click", () => {
        componentRender(<Sidebar />);

        const button = screen.getByTestId("sidebar-toggle");

        fireEvent.click(button);

        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
