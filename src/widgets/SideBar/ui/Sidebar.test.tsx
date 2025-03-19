import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "widgets/SideBar";

describe("Sidebar", () => {
    test("render", () => {
        renderWithTranslation(<Sidebar />);

        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("click", () => {
        renderWithTranslation(<Sidebar />);

        const button = screen.getByTestId("sidebar-toggle");

        fireEvent.click(button);

        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
