
function RevenueCard(
    {
        title,
        showWarning,
        amount,
        orderCount,
        order
    }
) {
  return (
    <div className="bg-white rounded shadow-sm">
        <div>
            {title}
            ?
        </div>
        <div className="flex justify-betweem">
            <div>
                ${amount}
            </div>
            {
                order ? <div>
                    {orderCount} Orders {">"}
                </div> :
                null
            }
        </div>
    </div>
  )
}

export default RevenueCard