import './Header.css'
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center mt-5 border-b-2 pb-2'>
            <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
            <img src={profile}></img>
        </header>
    );
};
export default Header;