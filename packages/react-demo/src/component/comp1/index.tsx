import { ReactNode,FC } from 'react';
import Style from './comp1.module.scss';
interface Comp1Props {
	content: ReactNode
}

const Comp1: FC<Comp1Props> = props => {
	return <div className={Style.box}>
		Comp1
		{props.content}
	</div>;
}

export default Comp1;