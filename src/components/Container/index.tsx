import axios from 'axios';
import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Container = () => {
  <QueryClientProvide client={queryClient}>
  </QueryClientProvide>

}

export default Container;
