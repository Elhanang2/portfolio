import React, { Component } from 'react';
import "./Portfolio.css";

import {MDBCol,MDBView, MDBMask, MDBContainer,MDBRow} from "mdbreact";

class Portfolio extends Component {
    constructor(){
        super();
        this.state={

        }
        this.handleClick=this.handleClick.bind(this); 
    }
    handleClick(e){
        e.preventDefault();
        console.log("cliked")
    }
    
    render() { 
        return ( 
            <MDBContainer className="mt-5">
        <MDBRow className="mt-4">
                <MDBCol md="4">
                    <MDBView className="box" hover zoom >
                        {/*<h5 className="text-center"><strong>Shadow effect</strong></h5>*/}
                        <a href="https://secure-dusk-69272.herokuapp.com/" role="button">
                            <img
                                src="images/burger.jpg"
                                className="img-fluid image  rounded-circle"
                                style={{width:"350PX", height:"200px"}}
                                alt="burgerImage" 
                            />
                            <MDBMask className="flex-center">
                            <h5 className="purple-text h5 ">Eat-Da-Burger</h5>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>
                
                <MDBCol md="4">
                    <MDBView className="box" hover zoom >
                        {/*<h5 className="text-center"><strong>Shadow effect</strong></h5>*/}
                        <a href="https://fast-crag-98576.herokuapp.com/"  role="button">
                            <img
                                src="images/friends .jpg"
                                className="img-fluid image  rounded-circle"
                                style={{width:"350PX", height:"200px"}}
                                alt="friendsImage" 
                            />
                            <MDBMask className="flex-center">
                            <h5 className="purple-text h5 ">Friends Finder</h5>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>

                <MDBCol md="4">
                    <MDBView className="box" hover zoom >
                        {/*<h5 className="text-center"><strong>Shadow effect</strong></h5>*/}
                        <a href="https://elhanang2.github.io/TriviaGame/" role="button">
                            <img
                                src="images/trivia.jpg"
                                className="img-fluid image  rounded-circle"
                                style={{width:"350PX", height:"200px"}}
                                alt="triviaGameImage" 
                            />
                            <MDBMask className="flex-center">
                            <h5 className="purple-text h5 ">Trivia Game (quiz)</h5>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>

                <MDBCol md="4">
                    <MDBView className="box" hover zoom >
                        {/*<h5 className="text-center"><strong>Shadow effect</strong></h5>*/}
                        <a href="https://elhanang2.github.io/Train-Scheduler/" role="button">
                            <img
                                src="images/train.jpg"
                                className="img-fluid image  rounded-circle"
                                style={{width:"350PX", height:"200px"}}
                                alt="trainImage" 
                            />
                            <MDBMask className="flex-center">
                            <h5 className="purple-text h5 ">Train Scheduler</h5>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>

                <MDBCol md="4">
                    <MDBView className="box" hover zoom >
                        {/*<h5 className="text-center"><strong>Shadow effect</strong></h5>*/}
                        <a href="https://elhanang2.github.io/unit-4-game/" role="button">
                            <img
                                src="images/crystal.jpg"
                                className="img-fluid image  rounded-circle"
                                style={{width:"350PX", height:"200px"}}
                                alt="cristalImage" 
                            />
                            <MDBMask className="flex-center">
                            <h5 className="purple-text h5 ">Cristal collector game</h5>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>

                {/*<MDBCol md="4">
                    <MDBView className="box" hover zoom >
                        
                        <a href="https://elhanang2.github.io/unit-4-game-RPG-/" role="button">
                            <img
                                src="images/RPG.png"
                                className="img-fluid image  rounded-circle"
                                style={{width:"350PX", height:"200px"}}
                                alt="" 
                            />
                            <MDBMask className="flex-center">
                            <h5 className="purple-text h5 ">Star Wars RPG</h5>
                            </MDBMask>
                        </a>
                    </MDBView>
        </MDBCol>*/}

                <MDBCol md="4">
                    <MDBView className="box" hover zoom >
                        {/*<h5 className="text-center"><strong>Shadow effect</strong></h5>*/}
                        <a href="https://elhanang2.github.io/Word-Guess-Game/" role="button">
                            <img
                                src="images/wordGuess.jpg"
                                className="img-fluid image  rounded-circle"
                                style={{width:"350PX", height:"200px"}}
                                alt="" 
                            />
                            <MDBMask className="flex-center">
                            <h5 className="purple-text h5 ">Word Guess Game</h5>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>

                <MDBCol md="4">
                    <MDBView className="box" hover zoom >
                        {/*<h5 className="text-center"><strong>Shadow effect</strong></h5>*/}
                        <a href="https://elhanang2.github.io/GIPHYrepo/" >
                            <img
                                src="images/giphy.jpg"
                                className="img-fluid image  rounded-circle"
                                style={{width:"350PX", height:"200px"}}
                                alt="" 
                            />
                            <MDBMask className="flex-center">
                            <h5 className="purple-text h5 ">Giphy api to search</h5>
                            </MDBMask>
                        </a>
                    </MDBView>
                </MDBCol>
                </MDBRow>
                </MDBContainer>
                
         );
    }
}
 
export default Portfolio;