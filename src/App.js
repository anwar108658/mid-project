import './App.css';
import Nav from './component/common/Nav/Nav';
import Body from './component/common/Secondpart/Body';
import Card from './component/common/Card/Card';
import Description from './component/common/Description/Description';
import Description2 from './component/common/Description2/Description2';
import Peragraph from './component/common/Pergraph/peragraph';
import Navunder from './component/common/Navunder/Navunder';
import Throughbody from './component/common/Throughbody/Throughbody';
import Threelogo from './component/common/Threelogo/Threelogo';
import Userform from './component/common/Userform/Userform';
import Foot from './component/common/Foot/Foot';
function App() {
  return <>
  <Nav></Nav>
  <Navunder></Navunder>
  <Card></Card>
  <Description></Description>
  <Description2></Description2>
  <center><Peragraph>Look It Happen When Preparet ion More opertunites</Peragraph>
  <p style={{fontSize :23}}>Senica</p></center>
  <Throughbody></Throughbody>
  <Threelogo></Threelogo>
  <Userform></Userform>
  <Foot></Foot>
  </>
}
                                                 
export default App;
