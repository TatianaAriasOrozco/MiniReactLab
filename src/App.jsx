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
  const [currentProjectName, setCurrentProjectName] = useState('');

  const handleToHomePage = () => {
    setCurrentPage(HOME);
    setCurrentProjectName('');
  };

  const handleToProjectPage = (projectName) => {
    setCurrentPage(PROJECT);
    setCurrentProjectName(projectName);
  };

  return (
    <div className={styles.main}>
      <I18nContextProvider>
        <Header
          onClickTitle={handleToHomePage}
          disabledTitle={currentPage === HOME}
          currentProjectName={currentProjectName}
        />
        <section className={styles.content}>
          {currentPage === HOME && (
            <HomePage onClickProject={handleToProjectPage} />
          )}
          {currentPage === PROJECT && (
            <ProjectPage currentProject={currentProjectName} />
          )}
        </section>
      </I18nContextProvider>
    </div>
  );
}

export default App;
