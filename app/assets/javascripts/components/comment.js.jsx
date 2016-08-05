var Comment = React.createClass({
	propTypes: {
		user_id: React.PropTypes.number,
		comment: React.PropTypes.string,
		rank: React.PropTypes.number
	},

	render(){
	 return(
		 <div>
		 	<div> User ID: {this.props.user_id} </div>
		 	<div> Comment: {this.props.comment} </div>
		 	<div> Rank: {this.props.rank}</div>
		 </div>
	 )
	}
});