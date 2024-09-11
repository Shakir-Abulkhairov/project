import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames';
import { AppRouter } from 'app/providers/router/ui/AppRouter';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { LoaderPage } from 'widgets/LoaderPage';

export function App() {
    const { theme } = useTheme();

    return (
        <Suspense fallback={<LoaderPage />}>
            <div className={classNames('app', {}, [theme])}>
                <NavBar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
}
