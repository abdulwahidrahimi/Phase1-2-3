import { useState } from 'react';
import styles from '../styles/Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);
  const isHigh = count > 5;

  return (
    <div className={styles.counter}>
      <p className={isHigh ? styles.highlight : ''}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
