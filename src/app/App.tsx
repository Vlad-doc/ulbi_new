import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>
                Change Theme
            </button>
            <AppRouter />
        </div>
    );
};

export default App;
