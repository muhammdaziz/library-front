import Home from "../pages/home";
import Page from "../pages/page";
import InitialLoader from "../services/initialLoader";

class LayoutManager extends Comment{
    getLayout = (pathname) => {
        if (pathname === '/')
            return 'home';
        if (/^\/login(?=\/|$)/i.test(pathname))
            return 'auth';

        return 'main';
    }

    getLayouts = () => {
        return {
            main: Home,
            auth: InitialLoader,
            home: Page,
        }
    }

    render() {
        const {children, location: {pathname}} = this.props;
        const Layout = this.getLayouts()[this.getLayout(pathname)];
        return (
            <>
                <Layout>
                    {children}
                </Layout>
            </>
        );
    }
}

export default LayoutManager;