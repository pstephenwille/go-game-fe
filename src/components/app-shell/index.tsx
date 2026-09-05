import { MainNav } from '@/components/app-shell/main-nav';
import { Button } from '@heroui/react';
import { useQuery } from '@tanstack/react-query';
import { loggedInUserQuery } from '@/lib/user.query';
import { signInWithRedirect, signOut } from 'aws-amplify/auth';


export default () => {
  const { data } = useQuery(loggedInUserQuery);
  const user = data?.user;
  const handleSignin = async () => {
    sessionStorage.setItem('redirect_after_login', location.pathname + location.search);

    void (await signInWithRedirect({
      provider: 'Google',
      customState: window.location.pathname + window.location.search,
    }));
  };

  const handleSignout = async () => {
    try {
      void (await signOut());
    } catch (error) {
      console.log('%c...error', 'color:gold', error);
    }
  };

  const loginHandler = user ? handleSignout : handleSignin;
  const buttonText = user ? 'Sign out' : 'Sign in';

  return (
    <div>
      <MainNav />
      <Button onPress={loginHandler} >{buttonText}</Button>
    </div>
  )
}
