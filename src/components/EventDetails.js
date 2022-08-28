function EventDetails ({e}) {

return (
    <div>
        {e.concerts.map((e) => { 
                return (
                    <div>
                    <><p>{e.max}</p><p>{e.min}</p><h3>{e.name}</h3></>
                    </div>
                )
            })}
    </div>
)
   
}

export default EventDetails;

