import { Component, useState } from "react";



export default class Header extends Component{

     title=['Anasayfa','Kurumsal','İletişim']

        constructor(props){
            super(props)

            this.state={
               header:this.title[0]
            }
        }

        componentDidMount(){
           // this.baslikDegistir()
        }
        
        baslikDegistir=()=>{
           return this.title.map((x,index)=>{
              
                if(x!==this.state.header){
                  
                  return this.setState({header:x})
                }
                    
                
            })

        }

    render(){

        return(       
               
                <div style={{flex:1,flexDirection:'row',justifyContent:'flex-end',paddingTop:10,borderBottom:'1px solid #B3B3B3',height:60,backgroundColor:'#F4F4F4'}}>
                <div style={{display: 'inline',fontSize:20,fontWeight:600,alignItems:'center'}}>
                    {this.state.header}
                </div>
               <div style={{display: 'inline' ,float:'right'}}> 
                   <button onClick={()=>this.baslikDegistir()} style={{backgroundColor:'#92BA92' ,padding:10,marginRight:10,border:0,color:'white',fontSize:14,fontWeight:'medium'}}>{this.state.header==null?'tikla':this.state.header}</button>
                </div>
                </div>
           
        )
    }
}



