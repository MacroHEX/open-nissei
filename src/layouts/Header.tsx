import {Heart, LogOut, Newspaper, ShoppingBag, ShoppingCart, SquareUser, User} from 'lucide-react';
import {useLoginStore} from '../../store/userStore.ts';
import {Link} from 'react-router-dom';
import logo from '@/assets/logo.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";

export const Header = () => {
  const {firstname, clearLoginData} = useLoginStore();

  return (
    <header className='h-20 bg-white w-full flex items-center justify-around px-4 shadow-md mt-4'>
      <div className='flex items-center'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='h-12'/>
        </Link>
      </div>
      <div className='hidden md:flex justify-center items-center'>
        <div className='ml-4'>
          <input
            type='text'
            placeholder='Buscar en toda la tienda...'
            className='border rounded-l-lg px-4 py-2 w-96'
          />
          <button className='bg-[#fcb800] text-white px-4 py-2 rounded-r-lg'>
            Buscar
          </button>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <Heart className='w-6 h-6 hover:text-[#fcb800] hover:scale-110 inline-block cursor-pointer'/>
        <ShoppingBag className='w-6 h-6 hover:text-[#fcb800] hover:scale-110 inline-block cursor-pointer'/>
        {firstname ?
          <DropdownMenu>
            <DropdownMenuTrigger className='flex justify-center items-center gap-2 text-left'>
              <User className='w-6 h-6 hover:text-[#fcb800] hover:scale-110 inline-block cursor-pointer'/>
              <span className='hover:text-[#fcb800]'>Hola,<br/>{firstname}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator/>
              <DropdownMenuItem><SquareUser className='w-6 h-6 pr-2'/>Mi Perfil</DropdownMenuItem>
              <DropdownMenuItem><Newspaper className='w-6 h-6 pr-2'/>Mis Pedidos</DropdownMenuItem>
              <DropdownMenuItem><Heart className='w-6 h-6 pr-2'/>Mi Lista de Deseos</DropdownMenuItem>
              <DropdownMenuItem><ShoppingCart className='w-6 h-6 pr-2'/>Mi Carrito</DropdownMenuItem>
              <DropdownMenuItem onClick={() => clearLoginData()}>
                <LogOut className='w-6 h-6 pr-2'/>Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> :
          <div className='flex flex-col'>
            <Link to='/login' className='hover:text-[#fcb800] hover:scale-105 inline-block'>Inicia Sesión</Link>
            <Link to='/signup' className='hover:text-[#fcb800] hover:scale-105 inline-block'>Crea una cuenta</Link>
          </div>
        }
      </div>
    </header>
  );
};
