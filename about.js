```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('use effect called');
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return(
        <div>
            <h1>About Page</h1>
            <p>The count is: {count}</p>
        </div>
    );
}
```