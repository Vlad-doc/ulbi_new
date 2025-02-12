import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';

import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>
                Главная
            </Link>
            <Link to='/about'>
                О сайте
            </Link>
            <button onClick={toggleTheme}>
                Change Theme
            </button>
            <AppRouter />
        </div>
    );
};

export default App;
