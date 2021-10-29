/*
There is a catch here because of the static method GetPerson(), can you figure out?
*/

using Bogus;
using System;
using System.Collections.Generic;
using System.Linq;

namespace console
{
    public class ExLinq
    {
        public static string[] Cities = new[] {"Canoas", "Itapema", "Goiania", "Sao Paulo", "Gramado", "Curitiba", "Campinas", "Campos do Jordao"};
        public static List<Person> GetPersons()
        {
            var f = new Faker<Person>()
                .RuleFor(x => x.Id, u => u.UniqueIndex)
                .RuleFor(x => x.FirstName, u => u.Name.FirstName())
                .RuleFor(x => x.LastName, u => u.Name.LastName())
                .RuleFor(x => x.City, u => u.PickRandom(Cities))
                ;
            return f.Generate(100);
        }

        public void TestLookUp()
        {
            var list = GetPersons();

            var lookupResult = list.ToLookup(z => z.City);

            foreach (var item in lookupResult)
            {
                Console.WriteLine($"City group: {item.Key}");

                foreach (var person in item)
                {
                    Console.WriteLine($"ID: {person.Id}  --> Firstname {person.FirstName} - Lastname {person.LastName}");
                }
            }
        }

        public void TestGroupby()
        {
            var list = GetPersons();

            var lookupResult = list.GroupBy(z => z.City);

            foreach (var item in lookupResult)
            {
                Console.WriteLine($"City group: {item.Key}");

                foreach (var person in item)
                {
                    Console.WriteLine($"ID: {person.Id}  --> Firstname {person.FirstName} - Lastname {person.LastName}");
                }
            }
        }

    }

    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }        
        public string City { get; set; }        
    }
}

/*
Usage, in program.cs:
static void Main(string[] args)
        {
            ExLinq list = new ExLinq();

            Console.WriteLine("\n Now using tolookup");

            list.TestLookUp();

            Console.WriteLine("\n Now using groupby");

            list.TestGroupby();

}

Result:

City group: Campos do Jordao
ID: 0  --> Firstname Adelbert - Lastname Bernhard
ID: 3  --> Firstname Amaya - Lastname Padberg
ID: 5  --> Firstname Kailee - Lastname Davis
City group: Itapema
ID: 1  --> Firstname Cristobal - Lastname Wilderman
City group: Canoas
ID: 2  --> Firstname Annabell - Lastname Nader
City group: Gramado
ID: 4  --> Firstname Freeman - Lastname Parker
City group: Campinas
ID: 6  --> Firstname Jabari - Lastname Purdy
ID: 7  --> Firstname Marcel - Lastname Hackett
ID: 8  --> Firstname Christop - Lastname Hilll
City group: Sao Paulo
ID: 9  --> Firstname Jasper - Lastname Williamson

 Now using groupby
City group: Curitiba
ID: 10  --> Firstname Yasmine - Lastname Schmitt
ID: 11  --> Firstname Dorothy - Lastname Wisozk
ID: 12  --> Firstname Granville - Lastname Connelly
ID: 16  --> Firstname Marvin - Lastname Labadie
City group: Sao Paulo
ID: 13  --> Firstname Victor - Lastname Lakin
City group: Gramado
ID: 14  --> Firstname Haskell - Lastname Williamson
ID: 19  --> Firstname Cary - Lastname Barrows
City group: Campos do Jordao
ID: 15  --> Firstname Norbert - Lastname Blick
ID: 17  --> Firstname Britney - Lastname Harvey
City group: Campinas
ID: 18  --> Firstname Andreanne - Lastname Heaney







*/

