import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text="Learn React" description="This is the dummy description of Learn React"/>
      <Todo text="Master React" description="This is the dummy description of Master React"/>
      <Todo text="Explore the full React course" description="This is the dummy description of Explore the full React course"/>
    </div>
  );
}

export default App;
