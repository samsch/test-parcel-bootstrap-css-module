import styles from './styles.scss';

const root = window.document.getElementById('root');

root.innerHTML = `
  <div>
    <p class="${styles.stylized}">This line should be bold and blue. Styles with (s)css-modules.</p>
    <div class="alert alert-primary" role="alert">
      This should be a blue primary alert box from Bootstrap, using "alert alert-primary".
    </div>
  </div>
`;
