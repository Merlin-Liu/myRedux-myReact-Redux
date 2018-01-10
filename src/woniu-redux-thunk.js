

const thunk = ({dispatch,getState})=>next=>action=>{
  console.log(1111111)
  if (typeof action=='function') {
		return action(dispatch,getState)
	}
	return next(action)
}

export default thunk