import styles from './Example.module.css';

type ExampleProps = {
  label: string;
  onClick?: () => void;
};

export const Example: React.FC<ExampleProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};
