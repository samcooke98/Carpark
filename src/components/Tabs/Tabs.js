//@flow
import * as React from 'react';
import TabButton from "./TabButton"
const Aux = ({children}) => (children)

type Props = {
	children: React.Node
}

type State = {
	openTab: number
}

class Tabs extends React.Component<Props, State> {
	state = {
		openTab: 0,
	}

	changeTab = (tabNumber: number) => this.setState({ openTab: tabNumber });

	renderTabButtons = () => {
		return React.Children.map(this.props.children, (tab, index) => (
			<TabButton
				active={this.state.openTab == index}
				onClick={() => this.changeTab(index)}
			>
				{tab.props.title}
			</TabButton>
		))
	}

	renderBody = () => {
		return React.Children.toArray(this.props.children)[this.state.openTab]
	}

	render() {
		return (
			<Aux>
				<div style={{height: '50px'}}>
					{this.renderTabButtons()}
				</div>
				<div style={{maxHeight: 'calc(100% - 50px)', overflowY: 'auto' }} > 
					{this.renderBody()}
				</div>
			</Aux>
		);
	}
}

export default Tabs;