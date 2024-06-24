
import { useState } from "react";
import SelfChoice from './components/SelfChoice'


export default function Home() {
  const [showSelfChoice, setShowSelfChoice] = useState(false);

  const handleLoginClick = () => {
    setShowSelfChoice(true);
  };

  return (
    <div>
      {!showSelfChoice ? (
        <>
          <div>Login</div>
          <button onClick={handleLoginClick}>Login</button>
        </>
      ) : (
        <SelfChoice />
      )}
    </div>
  );
}
