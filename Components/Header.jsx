import Link from 'next/link';
import { ConnectButton } from 'web3uikit';

export default function Header() {
    return (
        <>
            <div className='header'>
                <ConnectButton></ConnectButton>
                <Link className='header-link header-item-button' href="/subgraph">SUBGRAPH</Link>
                <Link className='header-link header-item-button' href="/">Home</Link>
            </div>
        </>
    );
}