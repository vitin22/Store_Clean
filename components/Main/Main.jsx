import Headc from '@components/Main/Headc';
import Scripts from '@components/Main/Scripts';
import TopHeader from '@components/Main/TopHeader';
import Search from '@components/Main/Search';
import Navigation from '@components/Main/Navigation';
import HotDetail from '@components/Slide/HotDetail';
import Slider from '@components/Product/Slider';
import TopVisit from '@components/Main/TopVisit';
import Newletter from '@components/Main/NewLetter';
import Footer from '@components/Main/Footer';
import Empresas from '@components/Empresas/Empresas';

function Main(){
    return(
        <div>
		<Headc/>
		<header>
			<TopHeader/>
			<Search/>
		</header>
		
	<Navigation/>
	<Scripts/>
		<Empresas title="Empresas"/>
		<Slider title="New Products"/>
		<HotDetail/>
		<Slider title="Top selling"/>
		<TopVisit />
		<Newletter/>
		<Footer />
</div>
        )
}

export default Main;
