import React from 'react'
import { connect } from 'react-redux'
import { byuIceCream } from './redux'

function iceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCream - {props.numOfIceCream}</h2>
            <button onClick={props.byuIceCream}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.ice.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        byuIceCream: () => dispatch(byuIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer)