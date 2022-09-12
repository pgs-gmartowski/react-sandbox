import React, {useId, useState, useTransition} from 'react';
import Navigation from '../../components/atoms/Navigation';
import Spinner from '../../components/atoms/Spinner';

export const React18Hooks = () => {
  const id = useId(); // useId hook - generetes ID (not for keys !!!)
  const [pending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    startTransition(() => {
      setCount(c => c + 1);
    })
  }

  return (
    <>
      <Navigation />
      {pending && <Spinner />}
      <div>
        <label htmlFor={`${id}--some-input`}>Some input</label>
        <input id={`${id}--some-input`} name={id} type={'text'} />
      </div>
      <div>
        <label htmlFor={`${id}--first-name`}>First Name</label>
        <input id={`${id}--first-name`} name={id} type={'text'} />
      </div>
      <div>
        <label htmlFor={`${id}--last-name`}>Last Name</label>
        <input id={`${id}--last-name`} name={id} type={'text'} />
      </div>
      <button onClick={handleClick}>{count}</button>
    </>
  );
}
