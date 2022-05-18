import {Outlet} from 'react-router-dom'
import './Layout.scss'
import SideNav from "../SideNav/SideNav";

const Layout = () => {
	return (
		<div className="App">
			<SideNav/>
			<div className="page">
				<span className="tags top-tags top1">&lt;html&gt;</span>
				<br/>
				<span className="tags top2">&lt;body&gt;</span>
				
				<Outlet/>
				<span className="tags bottom-tags">
          &lt;/body&gt;
					<br/>
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
			</div>
		</div>
	)
}

export default Layout
