import * as react from 'react';

type SetPreviewProps = {
  icon: react.ReactNode;
  name: string;
  href: string;
}
const SetPreview = ({ icon, name, href }: SetPreviewProps) => (
  <a href={href}>
    <div className='flex'>
      <div className='mr-2'>
        {icon}
      </div>
      <div>
        {name}
      </div>
    </div>
  </a>
);

export type SetPreviewGridProps = react.PropsWithChildren;
const SetPreviewGrid = ({ children }: SetPreviewGridProps) => (
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-11 gap-5 justify-center">
    {children}
  </div>
);

const Set = () => (
  <main>
    <SetPreviewGrid>
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
      <SetPreview icon={<i className='ss ss-blb'/>} name='Bloomburrow' href='/set/bloomburrow' />
    </SetPreviewGrid>
  </main>
);

export default Set;