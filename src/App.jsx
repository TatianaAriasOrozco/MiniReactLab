import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Header from './components/layout/Header/Header';
import styles from './styles/App.module.css';
import { I18nContextProvider } from './contexts/I18nContext';

const HOME = 'home';
const PROJECT = 'project';

function App() {
  const [currentPage, setCurrentPage] = useState(PROJECT);

  const handleToHomePage = () => {
    setCurrentPage(HOME);
  };

  const handleToProjectPage = () => {
    setCurrentPage(PROJECT);
  };

  return (
    <div className={styles.main}>
      <I18nContextProvider>
        <Header
          onClickTitle={handleToHomePage}
          disabledTitle={currentPage === HOME}
        />
        {currentPage === HOME && (
          <HomePage onClickAnyProject={handleToProjectPage} />
        )}
        {currentPage === PROJECT && <ProjectPage />}
      </I18nContextProvider>
    </div>
  );
}

export default App;
