import { useState, useRef, useEffect } from 'react';
import styles from './Launchpad.module.css';
import MenuIcon from './components/icons/MenuIcon';
import DpLogo from './components/icons/DpLogo';
import PmsLogo from './components/icons/PmsLogo';
import AiLogo from './components/icons/AiLogo';
import UmsLogo from './components/icons/UmsLogo';
import DcReservationLogo from './components/icons/DcReservationLogo';
import DcCmsLogo from './components/icons/DcCmsLogo';
import DcPdmLogo from './components/icons/DcPdmLogo';

type LaunchpadProps = {
  user: any;
};

export const Launchpad: React.FC<LaunchpadProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'PMS', icon: <PmsLogo size={24} /> },
    { label: 'Dynamic Pricing', icon: <DpLogo size={24} /> },
    { label: 'Review Management & Insights', icon: <AiLogo size={24} /> },
    {
      label: 'Booking Modification Console',
      icon: <DcReservationLogo size={24} />,
    },
    { label: 'Mini-site CMS', icon: <DcCmsLogo size={24} /> },
    { label: 'Property Data Management', icon: <DcPdmLogo size={24} /> },
    { label: 'User Management', icon: <UmsLogo size={24} /> },
  ];

  const cognitoData = Object.keys(localStorage).reduce(
    (obj: { [key in string]: string }, key) => {
      if (key.startsWith('CognitoIdentityServiceProvider')) {
        obj[key] = localStorage.getItem(key) ?? '';
      }
      return obj;
    },
    {}
  );

  useEffect(() => {
    console.log('Launchpad rendered for user:', user);
    console.log('Cognito Data:', JSON.stringify(cognitoData));
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [user, cognitoData]);

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <button className={styles.iconButton} onClick={toggleMenu}>
        <span className={styles.icon}>
          <MenuIcon size={24} />
        </span>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.sectionTitle}>Products</div>
          <ul className={styles.list}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.item}>
                <span className={styles.itemIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          <a className={styles.launchpadLink} href="#">
            Go to Launchpad
          </a>
        </div>
      )}
    </div>
  );
};
