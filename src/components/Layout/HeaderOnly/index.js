import Header from '~/components/Layout/Components/Header';

function defaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
        </div>
    );
}

export default defaultLayout;
