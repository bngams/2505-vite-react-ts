import type { Person } from "./Person";

type PropsType = {
    person: Person;
    displayMode: "full" | "short";
}  
export default function GreetingPerson(props: PropsType) {

    return (
        <>
        {props.displayMode === "full" ? (
            <div>
                <h1>Hello, {props.person.firstName} {props.person.lastName}!</h1>
                {props.person.isStudent && <p>Welcome, student!</p>}
            </div>
        ) : (
            <div>
                <h1>Hello, {props.person.firstName}!</h1>
            </div>
        )}
       </>
    )
}