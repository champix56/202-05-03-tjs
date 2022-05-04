import {MemeSVGViewer} from 'orsys-tjs-meme'
import { connect } from 'react-redux'

function mstp(s,o){
    return {
        meme:s.current,
        image:s.ressources.images.find(e=>e.id===s.current.imageId)
    }
}
function mdtp(dispatch){
    return{}
}
export default connect(mstp,mdtp)(MemeSVGViewer)