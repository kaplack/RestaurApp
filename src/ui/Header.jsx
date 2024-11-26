import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="font-serif flex items-center justify-between border-b border-s-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Cosa Nostra
      </Link>
      <div className="flex items-center gap-2">
        <SearchOrder />
        <Username />
      </div>
    </header>
  );
}

export default Header;
