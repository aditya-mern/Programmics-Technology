import { Component } from "react"
import ListItem from "../ListItem"
import "./index.css"


const myList = [
    {
        id:"a",
        text:"My Learning",
    },
    {
        id:"b",
        text:"My Career",
    },
    {
        id:"c",
        text:"Tools",
    },
    {
        id:"d",
        text:"Resources",
    }
]
   


class InnerNav extends Component{
    
    state = {
        activeThumbnailId: myList[0].id,
      }
    
      setActiveThumbnailId = id => {
        this.setState({
          activeThumbnailId: id,
        })
      }
    render() {
    const {activeThumbnailId} = this.state
       return (
    <div className='inner-container-nav'>
    <ul className='list'>
{myList.map(each =>
(
    <ListItem key={each.key}
    text={each.text}
    details={each}
    isActive={activeThumbnailId === each.id}
    setActiveThumbnailId={this.setActiveThumbnailId}
    />
))}

    </ul>
</div>
  )
}
}

export default InnerNav