import Header from '~/components/Layout/Components/Header';
import SideBar from './SideBar';

function defaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default defaultLayout;
