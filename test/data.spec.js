import {topTen, filterType} from '../src/data.js';

// ----------TEST TOP TEN ------------

describe('topTen', () => {
  const samplePokemonData = {"pokemon": [
    {
      "name": "charmander",
      "spawn-chance": "0.253",
    },
    {
      "name": "alakazam",
      "spawn-chance": "0.0073",
    }
  ] };
  const ordenadoSpawn = [
    {"name": "charmander", "spawn-chance": "0.253"},
    {"name": "alakazam", "spawn-chance": "0.0073"}
  ];

  it('is a function', () => {
    expect(typeof topTen).toBe('function');
  });

  it('returns `ordenadoSpawn`', () => {
    expect(topTen(samplePokemonData)).toEqual(ordenadoSpawn);
  });
});

// ----------------TEST FILTRADO POR TIPO---------------------

describe('filterType', () => {
  const samplePokemonData = {"pokemon": [
    {
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"
      ]
    },
    {
      "name": "alakazam",
      "type": [
        "psychic"
      ]
    }
  ] };
  const resultTypeGrass = [
    {
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"
      ]
    }
  ];
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it('returns `resultTypeGrass`', () => {
    expect(filterType(samplePokemonData,'grass')).toEqual(resultTypeGrass);
  });
});

// ------------TEST FILTRADOS-----------------------


// -------------------------------------------------------------

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
