import { MayankProps } from "./mayank.types"

export const Mayank = ( props : MayankProps ) => {
  return (
  <div> Hello {props.name ? props.name : "Hello"} </div>
  )
}
