export default function Animals(){
    const animals = ["Dog", "Cat", "Elephant", "Tiger", "Giraffe", "Alligator", "Hyena", "Zebra"]

    return animals.map((animal) => <li key={animal}>{animal}</li>)
}
