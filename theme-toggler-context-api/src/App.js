import './App.css';
import { ThemeProvider } from './contexts/theme-context';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button'
import { Card } from './components/card/card';

function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
      <Card>
            <h1>Título Card 1</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </Card>
      <Card>
            <h1>Título Card 2</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, quas eveniet nisi laboriosam accusantium atque adipisci.</p>
      </Card>
      <Card>
            <h1>Título Card 3</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, quas eveniet nisi laboriosam accusantium atque adipisci. Deleniti natus, eos minima adipisci provident qui cupiditate quos quibusdam quae magni nobis mollitia.</p>
      </Card>
    </ThemeProvider>
  );
}

export default App;