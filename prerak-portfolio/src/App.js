import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Skills} from "./components/Skills/Skills";
import Layout from "./components/Layout/Layout";
import {Template} from "./components/Template/Template";

function App() {
	return (
		<>
			<Routes>
				{/*<Route path="/" element={<Layout/>}>*/}
				{/*	<Route path="skills" element={<Skills/>}/>*/}
				{/*</Route>*/}
				<Route path={'/'} element={<Template/>}/>
			</Routes>
		</>
	);
}

export default App;
