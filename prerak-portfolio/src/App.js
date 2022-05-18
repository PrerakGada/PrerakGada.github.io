import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Skills} from "./components/Skills/Skills";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<Home/>}/>
					<Route path="skills" element={<Skills/>}/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
