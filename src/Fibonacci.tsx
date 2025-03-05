import React, { useState } from 'react';

const Fibonacci: React.FC = () => {
  const [sequence, setSequence] = useState<number[]>([0, 1]);//Primeros dos números de la secuencia

  const handleClick = () => {

    //Suma los valores del último y penúltimo elementos del array sequence
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    setSequence([...sequence, nextNumber]);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <ul>
        {sequence.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fibonacci;
