import React,{useState} from "react"

 const ToDo=()=>{
    const [color,setColor]=useState(false)



   const toggle=()=>{
        
         setColor(!color)
   }






    return (<div>
        <div style={{color: color?'green':'red'}}>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</div>
        <button onClick={()=>toggle()} style={{backgroundColor:'#92BA92' ,padding:10,marginRight:10,border:0,color:'white',fontSize:14,fontWeight:'medium'}}>Tikla</button>
        </div>
        )
}

export default ToDo