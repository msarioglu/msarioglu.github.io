import navStyles from '@/template/navigation/index.module.scss'
import Home from '@/pages/home';
import About from '@/pages/about';
import Skills from '@/pages/skills';
import Projects from '@/pages/projects';
import ScrollSpy from "react-ui-scrollspy";

export default function Index() {
    return (
        <ScrollSpy
            activeClass={navStyles['active-item']}
            scrollThrottle={30}
            useBoxMethod={false}
            updateHistoryStack={false}
            >
            <Home />
            <About />
            <Skills />
            <Projects />
        </ScrollSpy>
    )
}