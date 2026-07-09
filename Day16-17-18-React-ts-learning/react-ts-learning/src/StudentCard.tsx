import Card from './Card';
type SCardProps={
    name: string;
    age: number;
    role:string;
};
function StudentCard(props:SCardProps){
    return(
        <Card>
            <h1>name : {props.name}</h1>
            <p>age : {props.age}</p>
            <p>role:{props.role}</p>
            <button>View Profile</button>
        </Card>
    );
}
export default StudentCard;