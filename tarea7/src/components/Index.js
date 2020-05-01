import React, { useState } from 'react';
import ButtonFilter from './ButtonFilter';
import RangeFilter from './RangeFilter';
import ButtonComp from './Button';
import * as data from '../Data';
import './Index.css';


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

    const[quilatajes, setQuilataje] = useState([0, 300]);
    const[precios, setPrecio] = useState([200, 5000000]);


    function ColorSelect(nValorColor) {
        setColor(nValorColor);
    }

    const selectedData = {
        formaSelected: formas.valorForma,
        colorSelected: colores.valorColor,
        claridadSelected: claridades.valorClaridad,
        corteSelected: cortes.valorClaridad,
        quilatajeSelected: quilatajes,
        precioSelected: precios,
        // quilatajeSelected : [][],
        // quilatajeSelected: quilatajes.val,
        // precioSelected: precios,
      };

    function FormaSelect(nValorForma) {
        selectedData.formaSelected = nValorForma;
    }

    function ColorSelect(nValorColor) {
        selectedData.colorSelected = nValorColor;
    }

    function ClaridadSelect(nValorClaridad) {
        selectedData.claridadSelected = nValorClaridad;
    }

    function CorteSelect(nValorCorte) {
        selectedData.corteSelected = nValorCorte;
    }

    function buscarData() {
        console.log(JSON.stringify(selectedData));
      }

      function LimpiarFiltros() {
        selectedData.formaSelected = "";
        selectedData.colorSelected = "";
        selectedData.claridadSelected = "";
        selectedData.corteSelected = "";
        selectedData.quilatajeSelected = "";
        selectedData.precioSelected = "";
        // setForma("none");
        // setColor("none");
        // setClaridad("none");
        // setCorte("none");
        // setQuilataje("none");
      }

    return(

        <div style={{padding: "5%"}}>
            <div className="grid grid-cols-2 gap-5">
                <div>
                <div style={{marginBottom: "5%"}}>
                    <h3>FORMA</h3>
                    {formas.map((forma, i) =>{
                        return(
                            <div key={i} className="grid grid-cols-6 grid-rows-2">

                            <ButtonFilter
                                imgs={forma.imgsForma}
                                lbls={forma.valorForma}
                                handler={FormaSelect}
                                selected={formas}
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
                            handler={ColorSelect}
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
                            handler={ClaridadSelect}
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
                            handler={CorteSelect}
                            ></ButtonFilter>
                            </div> 
                        )
                        })}
                </div>
                    <div style={{marginBottom: "5%"}}>
                        <h1>QUILATAJE</h1>
                        <div className="flex justify-between bg-center">
                            <div>
                                <img className="m-auto" src="/Cortes/Quilataje/pequeno.png" style={{marginTop: "5px"}}/>
                            </div>
                            <div>
                                <img className="m-auto" src="/Cortes/Quilataje/grande.png"/>
                            </div>
                        </div>
                        <RangeFilter
                        setValue={setQuilataje}
                        values={quilatajes}
                        min={0.00}
                        max={300.00} 
                        ></RangeFilter>
                    </div>
                    <div style={{marginBottom: "5%"}}>
                        <h1>PRECIO</h1>
                        <RangeFilter
                        setValue={setPrecio}
                        values={precios}
                        min={200}
                        max={5000000} 
                        ></RangeFilter>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button onClick={() => buscarData()}> 
                {/*NO SUPE COMO MANDAR EL ONCLICK DESDE EL COMPONENTE*/}
                <ButtonComp 
                    func = {"() => sendForm()"}
                    label={"BUSCAR"}
                    border={"solid 1px blue"}
                    backC={"blue"}
                    lblC={"white"}
                ></ButtonComp>
                </button>
                <button onClick={() => LimpiarFiltros()}>
                {/*NO SUPE COMO MANDAR EL ONCLICK DESDE EL COMPONENTE*/}
                <ButtonComp
                    label={"LIMPIAR FILTROS"}
                    border={"solid 1px blue"}
                    backC={"white"}
                    lblC={"blue"}
                ></ButtonComp>
                </button>
            </div>
        </div>
        


    )
    
}

export default Index;