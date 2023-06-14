import data from '../../data.js'
const List = ()=>{
    return(
        // <>
        //     <ul>
        //         {
        //             data.map((obj)=>{
        //                 <li>{obj.name}</li>
        //             })
        //         }
        //     </ul>

        // </>
        <>
        <ul>
            <li>

            {data.map((item)=>{
                return <li>{item.name}</li>
            })}
            </li>
        </ul>
        </>
    )
}
export default List;