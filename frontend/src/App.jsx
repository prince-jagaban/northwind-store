import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react';

function App() {

  return (
    <>
      <header he>
        <Show when="signed-out">
          <SignInButton mode='modal'/>
          <SignUpButton mode='modal'/>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>

      <p className='text-red-400 font-black bg-blue-50'>hello world</p>
      <button className='btn btn-primary'>Click me</button>
    </>
  )
}

export default App;
