type MayankProps ={
    name? : string 
}


export const Mayank = ( props : MayankProps ) => {
  return (
  <div> Hello {props.name} </div>
  )
}
