import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Launchpad.module.css';

type LaunchpadProps = {
  user: any;
};

export const Launchpad: React.FC<LaunchpadProps> = ({ user }) => {
  // const [permissions, setPermissions] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (user) {
  //     const fetchData = async () => {
  //       try {
  //         const token = user?.signInUserSession?.accessToken?.jwtToken;
  //         const { data } = await axios.get(
  //           `https://user-auth.dev.tabist.co.jp/api/v0.1/users/${user.username}/permissions`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         setPermissions(data);
  //       } catch (err) {
  //         console.error('API error:', err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }
  // }, [user]);

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
      {/* <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>{JSON.stringify(permissions)}</div>
        )}
      </div> */}
      <div>User data: {user ? JSON.stringify(user) : 'not exist'}</div>
      <div>
        Cognito data: {cognitoData ? JSON.stringify(cognitoData) : 'not exist'}
      </div>
    </div>
  );
};
