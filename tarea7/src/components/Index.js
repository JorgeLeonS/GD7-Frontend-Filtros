import React, { useState } from 'react';
import ButtonFilter from './ButtonFilter';
import * as data from '../Data';
import { Container, Row, Col, Table } from "react-bootstrap";


const Index =  () =>{

    const[formas, setForma] = useState([
        {imgsForma: data.ImgsForma, valorForma: data.ValorForma},
    ]);

    const[colores, setColor] = useState([
        {imgsColor: data.ImgsColor, valorColor: data.ValorColor},
    ]);

    const[claridades, setClaridad] = useState([
        {imgsClaridad: data.ImgsClaridad, valorClaridad: data.ValorClaridad},
    ]);

    const[cortes, setCorte] = useState([
        {imgsCortes: data.ImgsCorte, valorCortes: data.ValorCorte},
    ]);


    return(
        // <Container>
        //     <Row>
        //         <Col md={6}>
        //             <Row>
        //         <Col md={12}>
        //             {formas.map((forma, i) =>{
        //             return(
        //                 <div key={i}>
        //                 <ButtonFilter
        //                 imgs={forma.imgsForma}
        //                 lbls={forma.valorForma}
        //                 ></ButtonFilter>
        //                 </div>
        //             )
        //             })}
                    
        //         </Col>

        //         <Col md={12}>
        //             {colores.map((color, i) =>{
        //             return(
        //                 <div key={i}>
        //                 <ButtonFilter
        //                 imgs={color.imgsColor}
        //                 lbls={color.valorColor}
        //                 ></ButtonFilter>
        //                 </div>
        //             )
        //             })}
                    
        //         </Col>

        //         <Col md={12}>
        //             {claridades.map((claridad, i) =>{
        //             return(
        //                 <div key={i}>
        //                 <ButtonFilter
        //                 imgs={claridad.imgsClaridad}
        //                 lbls={claridad.valorClaridad}
        //                 ></ButtonFilter>
        //                 </div>
        //             )
        //             })}
                    
        //         </Col>
        //         </Row>
        //         </Col>
        //     </Row>
        // </Container>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>
      {formas.map((forma, i) =>{
                    return(
                        <div key={i}>
                        <ButtonFilter
                        imgs={forma.imgsForma}
                        lbls={forma.valorForma}
                        ></ButtonFilter>
                        //</div>
                    )
                    })}
                    </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    )
}
export default Index;