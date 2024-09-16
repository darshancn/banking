import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName : 'Darshan', lastName : 'C N', email : 'darshancn002@gmail.com' }

  return (
    <section className='home'>
      <div className='home-content'>
       
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and mange your account and transactions efficiently"
          /> 
        </header>

        <TotalBalanceBox 
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1250.35}
        />
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:1231.34} , {currentBalance:1231.34}]}
      />

    </section>
  )
}     

export default Home