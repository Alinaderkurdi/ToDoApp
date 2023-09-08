import React , { useEffect} from "react";


const useGetTime = ()=>{
    
    const date = new Date()
    const time = [date.getHours().toString(), date.getMinutes().toString(), date.getDay(), date.getSeconds().toString()]
    const  [ hours, minutes ] = time

    useEffect(()=>{
      console.log('use effect run')
        let meridiem

        if(hours > 12 ){
            meridiem = 'PM'
        }else if ( hours > 0 ){
            meridiem = 'AM'
        }

    }, [minutes, hours ])

   // const getMeridiem = ()=>{
    //    let meridiem
   //     if(hours > 12 ){
    //        meridiem = 'PM'
    //    }else if ( hours > 0 ){
   //         meridiem = 'AM'
   //     }
   //  return meridiem
  //  }
 //   const meridiem = getMeridiem()

    return [ hours, minutes ,]
}


export default useGetTime;