import React from 'react';
import { Path, Layer } from 'react-konva';

/**
 * Component that renders the floor
 */
const RenderFloor = (props) => {
	console.log(props); return (
		<Layer>
			<Path
				data={props.path}
				fill={CONST_FILL}
				// stroke={CONST_FILL}
			/>
		</Layer>
	)
}
export default RenderFloor;

const CONST_FILL = 'lightgrey'