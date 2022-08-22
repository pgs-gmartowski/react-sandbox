import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {FC, ReactElement} from 'react';

interface Props {
  children: (data: any) => ReactElement;
}

const Container: FC<Props> = (props) => {
  const {isError, isLoading, isFetched, data, error} = useQuery(['data'], async () => {
    return await axios.get('https://rickandmortyapi.com/api/character');
  });

  if (isFetched) {
    console.log(data, isError, error);
  }

  return (
    props.children(data)
  )
}

export default Container;
