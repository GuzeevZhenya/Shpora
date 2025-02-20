import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/CodeDisplay.css"; // Импортируем стили для отображения кода
import { useGetAllMateryalQuery } from "../../feature/GetInfo";
import CodeBlock from "../CodeOutput/CodeOutput";
import "../../styles/ThemeSinglePage.css";
import LoadingSpinner from "../Loading/Loading";

export const ThemeSinglePage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.split("/");
  const theme = pathSegments[pathSegments.length - 1];

  const { data: themes } = useGetAllMateryalQuery();

  if (!themes) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  const currentThemes = themes.filter((tl) => tl.category === theme);

  return (
    <div className="theme-single-page">
      <h1>Тема: {theme}</h1>

      {currentThemes.length > 0 ? (
        <ul>
          {currentThemes.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.content}</p>

              {item.code && (
                <div>
                  <h4>Пример кода:</h4>
                  <pre className="code-display">
                    <CodeBlock code={item.code} />
                  </pre>
                </div>
              )}

              {item.officialDocLink && (
                <a
                  href={item.officialDocLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Официальная документация
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет доступных тем для этой категории.</p>
      )}
    </div>
  );
};
