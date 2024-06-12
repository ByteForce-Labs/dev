import Image from "next/image";
import { Inter } from "next/font/google";
import { generatePassword } from '../password-generator/passwordGenerator';
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length, true, true, true);
    setPassword(newPassword);
  };
  return (
    <div>
    <h1>Random Password Generator</h1>
    <button className="" onClick={handleGeneratePassword}>Click to Generate Strong Password</button>
    {password && (
      <div>
        <strong>This is a Strong Password:</strong> {password}
      </div>
    )}
  </div>
);
};
