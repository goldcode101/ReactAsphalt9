const Car = (props) => {
    return (

        <div class="card" style={{width: "54rem", backgroundColor: "lightblue"}}>
            <div class="card-body">
                <h4 class="card-title"><strong>{props.carStats.name}</strong></h4>
                <p>Class {props.carStats.class}</p>
                <p class="card-text">Top Speed - {props.carStats.speed}</p>
                <p class="card-text">Acceleration - {props.carStats.acc}</p>
                <p class="card-text">Handling - {props.carStats.handling}</p>
                <p class="card-text">Nitro - {props.carStats.nitro}</p>

                <a href="#" class="btn btn-primary">More Information</a>
            </div>
        </div>
    )
}

export default Car
