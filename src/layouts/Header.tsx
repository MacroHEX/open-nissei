import {Heart, ShoppingBag, User} from 'lucide-react';
import {useLoginStore} from '../../store/userStore.ts';
import {Link} from 'react-router-dom';

export const Header = () => {
  const {firstname} = useLoginStore();

  return (
    <header className='h-20 bg-white w-full flex items-center justify-between px-4 shadow-md mt-4'>
      <div className='flex items-center'>
        <Link to='/'>
          <img src='' alt='Logo' className='h-8'/>
        </Link>
      </div>
      <div className='hidden md:flex justify-center items-center'>
        <div className='ml-4'>
          <input
            type='text'
            placeholder='Buscar en toda la tienda...'
            className='border rounded-l-lg px-4 py-2 w-64'
          />
          <button className='bg-[#fcb800] text-white px-4 py-2 rounded-r-lg'>
            Buscar
          </button>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <Heart className='w-6 h-6 hover:text-[#fcb800] hover:scale-110 inline-block cursor-pointer'/>
        <ShoppingBag className='w-6 h-6 hover:text-[#fcb800] hover:scale-110 inline-block cursor-pointer'/>
        <User className='w-6 h-6 hover:text-[#fcb800] hover:scale-110 inline-block cursor-pointer'/>
        {firstname
          ? <span>Hola,<br/>{firstname}</span>
          : <div className='flex flex-col text-xs'>
            <Link to='/login' className='hover:text-[#fcb800] hover:scale-105 inline-block'>Inicia Sesión</Link>
            <Link to='/signup' className='hover:text-[#fcb800] hover:scale-105 inline-block'>Crea una cuenta</Link>
          </div>
        }
      </div>
    </header>
  );
};
