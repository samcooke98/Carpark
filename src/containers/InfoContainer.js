import React from 'react';
import { connect } from 'react-redux'
import { selectRiser } from "../redux/actions"
import { getAirflowDets } from "../redux/selectors"
import { Tabs, Tab } from "../components/Tabs"

import ReactTable from "react-table";
import "react-table/react-table.css";

const InfoPane = (props) => !console.log(props) && (
	<div>
		<h3> Info </h3>
		<Tabs>
			<Tab title="General">
				<ReactTable
					defaultPageSize={1}
						
					data={[props.airflow]}
					columns={[{
						Header: "Qa",
						accessor: 'qa',
					},
					{
						Header: "Qb",
						accessor: 'qb',
					},
					{ 
						Header: "Qc",
						accessor: 'qc'
					}
					]}
				/>
				<p> There are {Object.keys(props.risers).length} risers.</p>
				<p> There are {props.nCarparks} carpark spaces </p>
				<p> The Required airflow is: {JSON.stringify(props.airflow)}</p>
			</Tab>
			<Tab title="Output">
				<p> Output </p>
			</Tab>
			<Tab title="Settings">
				<p> TODO: </p>

			</Tab>
		</Tabs>
	</div>
)



const mapStateToProps = (state, ownProps) => ({
	risers: state.risers,
	airflow: getAirflowDets(state),
	nCarparks: state.numberOfParks
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	select: (id) => dispatch(selectRiser(id))

})

const InfoContainer = connect(mapStateToProps, mapDispatchToProps)(InfoPane)

export default InfoContainer