import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SideBar';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback='Loading...'>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
