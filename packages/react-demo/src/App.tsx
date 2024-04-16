import { useState } from 'react';

import Comp1 from './component/comp1';
import Comp2 from './component/comp2';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>顶级组件</div>
			<Comp1 content={<div><button>click</button></div>}></Comp1>
			<Comp2></Comp2>
		</>
	);
}

export default App;
