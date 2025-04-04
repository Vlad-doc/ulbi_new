import { ReactNode } from "react";

import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTest";

export const renderWithTranslation = (component: ReactNode) => (
    render(
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>,
    ));