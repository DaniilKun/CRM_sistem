import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // Проверка типа переменной error
  if (typeof error === 'string') {
    // Если ошибка является строкой, выводим её как текст
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error}</i>
        </p>
      </div>
    );
  } else if (error instanceof Error) {
    // Если ошибка является объектом Error, используем свойства объекта Error для вывода информации
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    // Если тип error неизвестен или не поддерживается, выводим общее сообщение об ошибке
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }
}
