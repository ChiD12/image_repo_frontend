import React, { useState, FC , useRef, useEffect, useReducer } from 'react';
import { ItemResponse, GraphModalProps, Lines } from './../Interfaces'
import { serverUrl } from './../constants'

import Desmos from 'desmos'
import axios from 'axios';



export const GraphModal: FC<GraphModalProps> = (props): JSX.Element => {

    const mystyle = {
        width: "1200px",
        height: "900px"
      };

    const bgStyle = {
        width: "1200px",
        height: "50px",
        backgroundColor: "#282C34",
        marginBottom: "25px",
            
        borderRadius: '4px',
        // fontFamilly:  'Fira',
        
        color: 'white',
        padding: "5px",
        display: "flex",
        justifyContent: "center"

    };

    const refContainer = useRef(null);
    const [lines, setLines] = useState<Lines>();
    const [calc, setCalc] = useState(null);

    const endpoint = `${serverUrl}/graph/${props.imgToGraph}`;

    const sendGetRequest = () => {
        axios.get<Lines>(endpoint, {headers: {
            "Access-Control-Allow-Origin": "*"
          }})
        .then(response => {
            console.log(response.data);
            setLines( response.data );
        }).catch(error =>{
            console.log(error)
        })
    };



    useEffect(() => {
        sendGetRequest();

        let calculator = Desmos.GraphingCalculator(refContainer.current)
        calculator.setMathBounds({
            left: 0,
            right: 256,
            bottom: 0,
            top: 256
          });
          setCalc(calculator)
    }, [props.imgToGraph]);

    useEffect(() => {
        // sendGetRequest();
        if(refContainer.current !== null && calc !== null){
            // var calculator = Desmos.GraphingCalculator(refContainer.current);
            if(lines !== undefined){
                let counter = 0

                lines.data.map(line => {
                        calc.setExpression({ latex: line, color: Desmos.Colors.BLUE });
                        // if (counter%5 === 0) forceUpdate()
                        counter++;
                })
                console.log(calc.getState())
            }
            console.log(lines)
        }

    }, [lines]);


    return (
        <div>
            <div style = {bgStyle}>
                <p>Image created with Math Functions, depending on the detail of the Image this may take several minutes</p>
            </div>
            <div id="calculator" style={mystyle} ref={refContainer}></div>

        </div>
    );
}



export default GraphModal