import {connect} from 'react-redux'
import Clock from './clock'
import Counter from './counter'

import { Button} from 'antd'
function Examples ({ lastUpdate, light }) {
  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <Button>sa</Button>
      
    </div>
  )
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)
