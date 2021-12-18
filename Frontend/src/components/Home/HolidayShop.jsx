import "../../styles/holidayshop.scss"


export const HolidayShop = ({image,name,des,category1,category2,category3,category4}) =>{
    return (
        <>
         <div className="holidayshop-parent">
             <img src={image} alt={name} />
             <div className="font-holidayshop">{name}</div>
                <div>{des}</div>
                <div className="holidayshop-child">
                    <p>{category1}</p>
                    <p>{category2}</p>
                    <p>{category3}</p>
                    <p>{category4}</p>
                </div>
         </div>
        
        </>
    )
}