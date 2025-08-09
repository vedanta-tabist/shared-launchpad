import styles from './Example.module.css';

type ExampleProps = {
  label: string;
  onClick?: () => void;
};

export const Example: React.FC<ExampleProps> = ({ label, onClick }) => {
  const cognitoData = Object.keys(localStorage).reduce(
    (obj: { [key in string]: string }, key) => {
      if (key.startsWith('CognitoIdentityServiceProvider')) {
        obj[key] = localStorage.getItem(key) ?? '';
      }
      return obj;
    },
    {}
  );

  return (
    <>
      <div>
        Cognito data: {cognitoData ? JSON.stringify(cognitoData) : 'not exist'}
      </div>
      <button className={styles.button} onClick={onClick}>
        {label}
      </button>
    </>
  );
};
