
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <header className="flex justify-content-between align-items-center  bg-auto bg-gray-900 ">
                <Link to="/">
                    <Image src='https://mis-ce.org.br/storage/settings/October2022/BbI5YwmwNWJ9dFE9QbxN.png' alt='imagem Logo' className='cursor-pointer m-3' />

                </Link>
                <Link to="/login">
                    <Button label='Login' className='border-round-md w-7 m-5' />
                </Link>




            </header>
        </>
    );
}

export default Header;