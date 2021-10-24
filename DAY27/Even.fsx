// print even numbers from 1 to 100

[<EntryPoint>]
let main argv =
    let cards = [ 1 .. 100 ]
    let filteredList = List.filter(fun i-> i % 2 = 0) cards
    List.iter(fun i -> printf "%i " i) filteredList // item 2 item 4

