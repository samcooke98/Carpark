//Main 
import React from "react";

import FloorContainer from '../containers/FloorContainer'
import RiserContainer from "../containers/RiserContainer";
import DebugContainer from "../containers/DebugContainer";
import InfoContainer from "../containers/InfoContainer"
import { Stage } from 'react-konva'

class AppComponent extends React.Component {
	state = {
		scale: 1
	}

	render() {
		return (
			<div>
				<h1> Hello</h1>
				<Stage width={window.innerWidth} height='500' scale={this.state.scale}>
					<FloorContainer />
					<RiserContainer/>
				</Stage>
				
				<InfoContainer/>
				<DebugContainer/>

			</div>
		)
	}
}

export default AppComponent;
