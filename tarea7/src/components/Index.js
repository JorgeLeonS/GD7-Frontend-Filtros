import React, { useState } from 'react';
import ButtonFilter from './ButtonFilter';
import * as data from '../Data';
import { Container, Row, Col, Table } from "react-bootstrap";
import './Index.css';


const Index =  () =>{

//     const [formas, setForma] = useState("none");
//   let imgsForma = data.ImgsForma;
//   let valorForma = data.ValorForma;

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
        //                 imgs={formas.imgsForma}
        //                 lbls={formas.valorForma}
        //                 ></ButtonFilter>
        //                  </div> 
        //              )
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

        // <div>
        // <div className="grid grid-cols-2 gap-6">
        //     <div>
        //         <div class="btn-group">
        //         <span className="text-base" sytle="color: green;">FORMA</span>
        //         {formas.map((forma, i) =>{
        //                 return(
        //                     <div key={i} class="btn-group">
        //                     <ButtonFilter
        //                     imgs={forma.imgsForma}
        //                     lbls={forma.valorForma}
        //                     ></ButtonFilter>
        //                     </div> 
        //                 )
        //                 })}
        //         </div>
        //     </div>
        // </div>
        // </div>
        // <div className="Container">
        // <div className="Column">
        //     <div className="Row1">
        //         <h1>FORMA</h1>
        //         {formas.map((forma, i) =>{
        //             return(
        //                 <div key={i}>
        //                 <ButtonFilter
        //                 imgs={forma.imgsForma}
        //                 lbls={forma.valorForma}
        //                 ></ButtonFilter>
        //                 </div> 
        //             )
        //         })}
        //     </div>
        // </div>
        // <div className = "Column">
        //     {cortes.map((corte, i) =>{
        //         return(
        //             <div key={i}>
        //             <ButtonFilter
        //             imgs={corte.imgsCortes}
        //             lbls={corte.valorCortes}
        //             ></ButtonFilter>
        //             </div> 
        //         )
        //     })}
        // </div>
        // </div>

        <div style={{padding: "5%"}}>
            <div className="grid grid-cols-2 gap-6">
                <div>
                <div style={{marginBottom: "5%"}}>
                    <h1>FORMA</h1>
                    {formas.map((forma, i) =>{
                        return(
                            <div key={i} className="grid grid-cols-6">
                            <ButtonFilter
                            imgs={forma.imgsForma}
                            lbls={forma.valorForma}
                            ></ButtonFilter>
                            </div> 
                        )
                        })}
                </div>

                <div style={{marginBottom: "5%"}}>
                    <h1>COLOR</h1>
                    {colores.map((color, i) =>{
                        return(
                            <div key={i} className="grid grid-cols-4">
                            <ButtonFilter
                            imgs={color.imgsColor}
                            lbls={color.valorColor}
                            ></ButtonFilter>
                            </div> 
                        )
                        })}
                </div>

                <div style={{marginBottom: "5%"}}>
                    <h1>CLARIDAD</h1>
                    {claridades.map((claridad, i) =>{
                        return(
                            <div key={i} className="grid grid-cols-4">
                            <ButtonFilter
                            imgs={claridad.imgsClaridad}
                            lbls={claridad.valorClaridad}
                            ></ButtonFilter>
                            </div> 
                        )
                        })}
                </div>
                </div>
                
                <div>
                <div style={{marginBottom: "5%"}}>
                    <h1>CORTE</h1>
                    {cortes.map((corte, i) =>{
                        return(
                            <div key={i} className="grid grid-cols-4">
                            <ButtonFilter
                            imgs={corte.imgsCortes}
                            lbls={corte.valorCortes}
                            ></ButtonFilter>
                            </div> 
                        )
                        })}
                </div>
                </div>
            </div>
        </div>
        


    )
    
}

export default Index;