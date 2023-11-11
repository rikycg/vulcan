import { Skills } from './sections/skills.section';
import { People } from './sections/people.section';
import { Contact } from './sections/contact.section';
import { Init } from './sections/init.section';
import { Brands } from './sections/brands.section';
import { AboutMe } from './sections/about-me.section';
import { Nav } from '../../shared/ui/nav.ui';
import { Social } from './sections/social.section';

import { Menu } from './home.constants';
import { homeService } from './home.service';
import { InfoProvider } from './providers/info.provider';

export default async function Home() {
  const info = await homeService.getHomeData();

  return (
    <div className='bg-gray-dark max-w-7xl w-full h-full pb-8'>
      <InfoProvider data={info}>
        <header className='flex h-20 items-center justify-between p-8 w-full top-0 fixed max-w-7xl z-10'>
          <div className='py-2 px-8 text-gray-light border-2 rounded-sm'>
            <span className='uppercase'>{ info.profile.nickname }</span>
          </div>
          <div className='w-1/3 flex items-center text-gray-light gap-10 justify-end'>
            <Nav list={ Menu }>
              <Social />
            </Nav>
          </div>
        </header>
        
        <main className='flex h-full w-full mt-[80px]'>
          <aside className='w-16 hidden sm:flex justify-center'>
            <div className="fixed top-[30%] flex flex-col items-center">
              <Social />
              <span className='border-1 h-40 bg-gray-light w-px flex mt-5'></span>
            </div>
          </aside>

          <div className='flex flex-col h-full flex-1 p-8 gap-[50px]'>
            <Init />
            <Brands />
            <AboutMe />
            <Skills />
            <People />
            <Contact />
          </div>
        </main>

        <footer className='text-sm w-full text-center'>
          <p className='text-gray-light'>
            © 2023 Copyrights. Do you like this theme? You can get it <a href="#" className='text-warning'>here</a>.
          </p>
        </footer>
      </InfoProvider>
    </div>
  )
}
