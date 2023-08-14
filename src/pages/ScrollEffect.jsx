import React from 'react'
import useScrollPosition from '../customeHooks/useScrollPosition';
export default function ScrollEffect() {
    const cyndaPosition = useScrollPosition(0.5); // parallax scroll effect
    const rowletPosition = useScrollPosition(0.001); // fade effect
    const oshawottPosition = useScrollPosition(1); // horizontal scroll effect
  
    console.log("from first",cyndaPosition);
    return (
      <div className="App">
        <div className="bg1" style={{ backgroundPositionY: cyndaPosition }}>
        <img src='https://img.freepik.com/premium-photo/mountain-landscape-with-lake-mountain-background_260899-1821.jpg?w=1380' style={{width:'100%',height:"800px"}}/>
        </div>
        <div className="bg2" style={{ opacity: rowletPosition }}>
          <img src='https://img.freepik.com/premium-photo/fog-forest-mountains-summer-ecology-nature_260899-1554.jpg' style={{width:'100%',height:"800px"}}/>
        </div>
        <div className="bg3" style={{ backgroundPositionX: oshawottPosition}}>
          <img src='https://img.freepik.com/premium-photo/road-2023-road-leads-mountains-sunrise-background-2023_260899-1396.jpg'style={{width:'100%',height:"800px"}}/>
        </div>
      </div>
    );
  }
 