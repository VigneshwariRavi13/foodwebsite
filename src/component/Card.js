function Card({name, ...props}) {
    return (
< div style = {{ width: "300px", height: "100px", backgroundColor: "blue", margin: "10px", padding: "10px" }
} >
    <h1 style={{ color: "white" }}>{name}</h1>
</div >
    )
}
export default Card;