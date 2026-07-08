type SCardProps={
    name: string;
    age: number;
    role:string;
}
function StudentCard(props:SCardProps){
    return(
        <>
        <h1>name : {props.name}</h1>
        <h1>age : {props.age}</h1>
        <h1>role:{props.role}</h1>
        </>
    );
}
export default StudentCard;