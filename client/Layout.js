import Header from "./components/Header";

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <main className="sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px)]">{children}</main>
        </div>
    );
}

export default Layout;