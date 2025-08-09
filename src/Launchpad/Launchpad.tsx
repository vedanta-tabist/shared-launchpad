import { useState, useRef, useEffect } from 'react';
import { Form, Input } from 'antd';
import styles from './Launchpad.module.css';
import MenuIcon from './components/icons/MenuIcon';
import DpLogo from './components/icons/DpLogo';
import PmsLogo from './components/icons/PmsLogo';
import AiLogo from './components/icons/AiLogo';
import UmsLogo from './components/icons/UmsLogo';
import DcReservationLogo from './components/icons/DcReservationLogo';
import DcCmsLogo from './components/icons/DcCmsLogo';
import DcPdmLogo from './components/icons/DcPdmLogo';
import { getEnvUrls } from './utils/getEnvUrls';

type LaunchpadProps = {
  user: any;
};

export const Launchpad: React.FC<LaunchpadProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const [form] = Form.useForm();
  const toggleMenu = () => setIsOpen(!isOpen);
  const urls = getEnvUrls();

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
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [user, cognitoData]);

  async function redirectTo(targetOrigin: string, targetPath: string) {
    const formElement = document.querySelector('form');
    if (formElement) {
      await form.setFieldValue('redirect_url', targetPath);
      formElement.action = targetOrigin;
      formElement.submit();
    }
  }

  const menuItems = [
    {
      label: 'PMS',
      icon: <PmsLogo size={24} />,
      onClick: () => redirectTo(urls.PMS_URL, '/'),
    },
    {
      label: 'Dynamic Pricing',
      icon: <DpLogo size={24} />,
      onClick: () => redirectTo(urls.DP_URL, '/'),
    },
    {
      label: 'Review Management & Insights',
      icon: <AiLogo size={24} />,
      onClick: () => redirectTo(urls.REVIEW_MANAGEMENT_URL, '/'),
    },
    {
      label: 'Booking Modification Console',
      icon: <DcReservationLogo size={24} />,
      onClick: () => redirectTo(urls.DC_URL, '/reservation-management'),
    },
    {
      label: 'Mini-site CMS',
      icon: <DcCmsLogo size={24} />,
      onClick: () => redirectTo(urls.DC_URL, '/mini-site'),
    },
    {
      label: 'Property Data Management',
      icon: <DcPdmLogo size={24} />,
      onClick: () => redirectTo(urls.DC_URL, '/property-data-management'),
    },
    {
      label: 'User Management',
      icon: <UmsLogo size={24} />,
      onClick: () => redirectTo(urls.UMS_URL, '/users'),
    },
  ];

  return (
    <>
      <Form method="post" form={form} action="" style={{ display: 'none' }}>
        {Object.keys(cognitoData).map((key) => (
          <Form.Item key={key} name={key} initialValue={cognitoData[key]}>
            <Input type="hidden" name={key} />
          </Form.Item>
        ))}
        <Form.Item key="redirect_url" name="redirect_url" initialValue="">
          <Input type="hidden" name="redirect_url" />
        </Form.Item>
      </Form>
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
                <li key={index} className={styles.item} onClick={item.onClick}>
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <a
              className={styles.launchpadLink}
              onClick={() => redirectTo(urls.UMS_URL, '/')}
            >
              Go to Launchpad
            </a>
          </div>
        )}
      </div>
    </>
  );
};
