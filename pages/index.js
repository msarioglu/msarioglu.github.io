import navStyles from '@/template/navigation/index.module.scss'
import Home from '@/pages/home';
import About from '@/pages/about';
import ScrollSpy from "react-ui-scrollspy";

export default function Index() {
    return (<>
        <ScrollSpy
            activeClass={navStyles['active-item']}
            offsetBottom={80}
            scrollThrottle={1}
            useBoxMethod
            >
            <Home />
            <About />
        </ScrollSpy>
    </>)
}