import React from 'react';
import { connect } from 'react-redux'
import { selectRiser } from "../redux/actions"
import { getAirflowDets } from "../redux/selectors"
import { Tabs, Tab } from "../components/Tabs"

import RiserDataContainer from "../containers/RiserDataContainer"

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
					columns={[
						{
							Header: "C",
							accessor: "C"
						},
						{
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
						}, {
							Header: "Exhaust Air flow (l/s)",
							accessor: 'exhaustAirFlow'
						}, {
							Header: "Exhaust Air Flow (w/Safety)\n(l/s)",
							accessor: "exhaustWithSafety"
						}, {
							Header: "Minimum Make-up Air Flow(l/s)",
							accessor: "minMakeupFlow"
						}, {
							Header: "Maximum Make-up Air Flow (l/s)",
							accessor: "maxMakeupFlow"
						}, {
							Header: "Check Figures (l/s/m2)",
							accessor: "checkOne"
						}, {
							Header: "Check Figures (l/s/vehicle)",
							accessor: "checkTwo",
						}
					]}
				/>
				<p> There are {Object.keys(props.risers).length} risers.</p>
				<p> There are {props.nCarparks} carpark spaces </p>
			</Tab>
			<Tab title="Selected Riser">
				<RiserDataContainer /> 
			</Tab>
			<Tab title="Settings">
				<p> Settings for the entire floor</p>
				<p> Vehicle Type Factor </p>
				
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