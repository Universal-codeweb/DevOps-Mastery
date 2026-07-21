type GreetingProps ={
    name: string;
}
function Greetings(props:GreetingProps){
    return(
        <h1>Hello {props.name} 🥱</h1>
    );
}
export default Greetings;