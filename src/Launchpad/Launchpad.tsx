import styles from './Launchpad.module.css';

type LaunchpadProps = {
  user: any;
};

export const Launchpad: React.FC<LaunchpadProps> = ({ user }) => {
  const cognitoData = Object.keys(localStorage).reduce(
    (obj: { [key in string]: string }, key) => {
      if (key.startsWith('CognitoIdentityServiceProvider')) {
        // eslint-disable-next-line no-param-reassign
        obj[key] = localStorage.getItem(key) ?? '';
      }
      return obj;
    },
    {}
  );

  return (
    <div className={styles.wrapper}>
      <div>User data: {user ? JSON.stringify(user) : 'not exist'}</div>
      <div>
        Cognito data: {cognitoData ? JSON.stringify(cognitoData) : 'not exist'}
      </div>
    </div>
  );
};
