const Car = (props) => {
    let speedPercent = (100 * (props.carStats.speed - 200) / 300) + "%";
    let accPercent = (100 * (props.carStats.acc - 30) / 60) + "%";
    return (

        <div class="card" style={{width: "54rem", backgroundColor: "lightblue", margin: "20px"}}>
            <div class="card-body">
                <h4 class="card-title"><strong>{props.carStats.name}</strong></h4>
                <p>Class {props.carStats.class}</p>
                <p class="card-text">Top Speed - {props.carStats.speed}</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" style={{width: speedPercent}} role="progressbar" aria-valuenow={props.carStats.speed} aria-valuemin="200" aria-valuemax="500"></div>
                </div>
                <p class="card-text">Acceleration - {props.carStats.acc}</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" style={{width: accPercent}} role="progressbar" aria-valuenow={props.carStats.speed} aria-valuemin="200" aria-valuemax="500"></div>
                </div>
                <p class="card-text">Handling - {props.carStats.handling}</p>
                <p class="card-text">Nitro - {props.carStats.nitro}</p>

                <a href="#" class="btn btn-primary">More Information</a>
            </div>
        </div>
    )
}

export default Car
