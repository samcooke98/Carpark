//@flow
import React from 'react';


import { Circle, Layer } from 'react-konva';

type Props = {
	posX: number,
	posY: number,
	selected: bool,
	onClick: () => void,
}

const Riser = (props: Props) => (
	<Layer>
		<Circle
			fill={props.selected ? CONST_COLOUR : "green"} radius={props.selected ? CONST_RADIUS + 3 : CONST_RADIUS}
			shadowBlur={props.selected ? 5 : 0}
			x={props.posX} y={props.posY}
			onClick={props.onClick}

		/>
	</Layer>
)

export default Riser;

const CONST_RADIUS = 3
const CONST_COLOUR = 'blue'
