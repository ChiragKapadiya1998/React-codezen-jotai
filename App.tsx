import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'jotai';
import MainStackNavigator from './src/navigators/navigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <MainStackNavigator />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
