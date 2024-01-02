// import React from 'react'
// import { connect } from 'react-redux'

// function ItemContainer(props) {
//     return (
//         <div>
//             <h2>Item -{props.item}</h2>
//         </div>
//     )
// }

// const mapStateToProps = (state, ownProps) => {
//     const itmeState = ownProps.cake ? state.cake.numOfCakes : state.ice.numOfIceCream
//     return {
//         item: itmeState
//     }
// }

// export default connect(mapStateToProps)(ItemContainer)


import React from 'react'
import { connect } from 'react-redux'
import { buyCake, byuIceCream } from './redux'


function ItemContainer(props) {
    return (
        <>
            <h2>Item - {props.item}</h2>
            <div>
                <button onClick={props.buyItem}>Buy Items</button>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.ice.numOfIceCream
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(byuIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer)