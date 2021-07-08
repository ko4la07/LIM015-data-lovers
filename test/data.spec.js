import {topTen, filterType, moreWeaknesses,lessWeaknesses,highAttack, smallAttack,highDefense,smallDefense,highEscape,highStamina,highCp, highHp,averageAttack,averageStamina} from '../src/data.js';

// ------------------TEST TOP TEN----------------------

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

  it('debería retornar `ordenadoSpawn`', () => {
    expect(topTen(samplePokemonData)).toEqual(ordenadoSpawn);
  });
});

// -------------------TEST FILTRADO POR TIPO---------------------

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

  it('debería retornar `resultTypeGrass`', () => {
    expect(filterType(samplePokemonData,'grass')).toEqual(resultTypeGrass);
  });
});

// -------------------TEST WEAKNESSES---------------------
describe('moreWeaknesses', () => {
  const samplePokemonData = [
    {
      "name": "alakazam",
      "weaknesses": [
        "bug",
        "ghost",
        "dark"
      ]
    },
    {
      "name": "bulbasaur",
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ]
    }
  ];
  const resultMoreWeaknesses = [
    {
      "name": "bulbasaur",
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ]
    },
    {
      "name": "alakazam",
      "weaknesses": [
        "bug",
        "ghost",
        "dark"
      ]
    }

  ];
  it('is a function', () => {
    expect(typeof moreWeaknesses).toBe('function');
  });

  it('debería retornar `resultMoreWeaknesses`', () => {
    expect(moreWeaknesses(samplePokemonData)).toEqual(resultMoreWeaknesses);
  });
});

describe('lessWeaknesses', () => {
  const samplePokemonData = [
    {
      "name": "alakazam",
      "weaknesses": [
        "bug",
        "ghost",
        "dark"
      ]
    },
    {
      "name": "bulbasaur",
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ]
    }
  ];
  const resultLessWeaknesses = [
    {
      "name": "alakazam",
      "weaknesses": [
        "bug",
        "ghost",
        "dark"
      ]
    },
    {
      "name": "bulbasaur",
      "weaknesses": [
        "fire",
        "ice",
        "flying",
        "psychic"
      ]
    }
  ];
  it('is a function', () => {
    expect(typeof lessWeaknesses).toBe('function');
  });

  it('debería retornar `resultLessWeaknesses`', () => {
    expect(lessWeaknesses(samplePokemonData)).toEqual(resultLessWeaknesses);
  });
});

// ----------------------TEST ATTACK----------------------
const sampleData = [
  {
    "name": "bulbasaur",
    "stats": {
      "base-attack": "118",
      "base-defense": "111",
      "base-stamina": "128",
      "max-cp": "1115",
      "max-hp": "113"
    },
    "encounter": {
      "base-flee-rate": "0.1",
      "base-capture-rate": "0.2"
    }
  },
  {
    "name": "alakazam",
    "stats": {
      "base-attack": "271",
      "base-defense": "167",
      "base-stamina": "146",
      "max-cp": "3057",
      "max-hp": "127"
    },
    "encounter": {
      "base-flee-rate": "0.05",
      "base-capture-rate": "0.1"
    }
  }
];

describe('highAttack', () => {
  const resultHighAttack = [
    {
      "name": "alakazam",
      "stats": {
        "base-attack": "271",
        "base-defense": "167",
        "base-stamina": "146",
        "max-cp": "3057",
        "max-hp": "127"
      },
      "encounter": {
        "base-flee-rate": "0.05",
        "base-capture-rate": "0.1"
      }
    },
    {
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      }
    }
  ];

  it('is a function', () => {
    expect(typeof highAttack).toBe('function');
  });

  it('debería retornar `resultHighAttack`', () => {
    expect(highAttack(sampleData)).toEqual(resultHighAttack);
  });
});

describe('smallAttack', () => {
  const resultSmallAttack = [
    {
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      }
    },
    {
      "name": "alakazam",
      "stats": {
        "base-attack": "271",
        "base-defense": "167",
        "base-stamina": "146",
        "max-cp": "3057",
        "max-hp": "127"
      },
      "encounter": {
        "base-flee-rate": "0.05",
        "base-capture-rate": "0.1"
      }
    }
  ];

  it('is a function', () => {
    expect(typeof smallAttack).toBe('function');
  });

  it('debería retornar `resultSmallAttack`', () => {
    expect(smallAttack(sampleData)).toEqual(resultSmallAttack);
  });
});

// ----------------------TEST DEFENSE-----------------------
describe('highDefense', () => {
  const resultHighDefense = [
    {
      "name": "alakazam",
      "stats": {
        "base-attack": "271",
        "base-defense": "167",
        "base-stamina": "146",
        "max-cp": "3057",
        "max-hp": "127"
      },
      "encounter": {
        "base-flee-rate": "0.05",
        "base-capture-rate": "0.1"
      }
    },
    {
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      }
    }
  ];

  it('is a function', () => {
    expect(typeof highDefense).toBe('function');
  });

  it('debería retornar `resultHighDefense`', () => {
    expect(highDefense(sampleData)).toEqual(resultHighDefense);
  });
});

describe('smallDefense', () => {
  const resultSmallDefense = [
    {
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      }
    },
    {
      "name": "alakazam",
      "stats": {
        "base-attack": "271",
        "base-defense": "167",
        "base-stamina": "146",
        "max-cp": "3057",
        "max-hp": "127"
      },
      "encounter": {
        "base-flee-rate": "0.05",
        "base-capture-rate": "0.1"
      }
    }
  ];

  it('is a function', () => {
    expect(typeof smallDefense).toBe('function');
  });

  it('debería retornar `resultSmallDefense`', () => {
    expect(smallDefense(sampleData)).toEqual(resultSmallDefense);
  });
});

// -----------------------TEST MORE-----------------------
describe('highEscape', () => {
  const resultHighEscape = [
    {
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      }
    },
    {
      "name": "alakazam",
      "stats": {
        "base-attack": "271",
        "base-defense": "167",
        "base-stamina": "146",
        "max-cp": "3057",
        "max-hp": "127"
      },
      "encounter": {
        "base-flee-rate": "0.05",
        "base-capture-rate": "0.1"
      }
    }
  ];

  it('is a function', () => {
    expect(typeof highEscape).toBe('function');
  });

  it('debería retornar `resultHighEscape`', () => {
    expect(highEscape(sampleData)).toEqual(resultHighEscape);
  });
});

describe('highStamina', () => {
  const resultHighStamina = [
    {
      "name": "alakazam",
      "stats": {
        "base-attack": "271",
        "base-defense": "167",
        "base-stamina": "146",
        "max-cp": "3057",
        "max-hp": "127"
      },
      "encounter": {
        "base-flee-rate": "0.05",
        "base-capture-rate": "0.1"
      }
    },
    {
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      }
    }
  ];

  it('is a function', () => {
    expect(typeof highStamina).toBe('function');
  });

  it('debería retornar `resultHighStamina`', () => {
    expect(highStamina(sampleData)).toEqual(resultHighStamina);
  });
});

describe('highCp', () => {
  const resultHighCp = [
    {
      "name": "alakazam",
      "stats": {
        "base-attack": "271",
        "base-defense": "167",
        "base-stamina": "146",
        "max-cp": "3057",
        "max-hp": "127"
      },
      "encounter": {
        "base-flee-rate": "0.05",
        "base-capture-rate": "0.1"
      }
    },
    {
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      }
    }
  ];

  it('is a function', () => {
    expect(typeof highCp).toBe('function');
  });

  it('debería retornar `resultHighCp`', () => {
    expect(highCp(sampleData)).toEqual(resultHighCp);
  });
});

describe('highHp', () => {
  const resultHighHp = [
    {
      "name": "alakazam",
      "stats": {
        "base-attack": "271",
        "base-defense": "167",
        "base-stamina": "146",
        "max-cp": "3057",
        "max-hp": "127"
      },
      "encounter": {
        "base-flee-rate": "0.05",
        "base-capture-rate": "0.1"
      }
    },
    {
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
      "encounter": {
        "base-flee-rate": "0.1",
        "base-capture-rate": "0.2"
      }
    }
  ];

  it('is a function', () => {
    expect(typeof highHp).toBe('function');
  });

  it('debería retornar `resultHighHp`', () => {
    expect(highHp(sampleData)).toEqual(resultHighHp);
  });
});

// ---------------------------Average Attack---------------------------------

describe('averageAttack', () => {
  const sampleData = [
    {
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      }
    },
    {
      "name": "ivysaur",
      "stats": {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
        "max-cp": "1699",
        "max-hp": "134"
      }
    }
  ];

  it('is a function', () => {
    expect(typeof averageAttack).toBe('function');
  });

  it('debería retornar el valor promedio igual a `134.5`', () => {
    expect(averageAttack(sampleData)).toEqual(134.5);
  });
});

// ---------------------------Average Stamina---------------------------------

describe('averageStamina', () => {
  const sampleData = [
    {
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      }
    },
    {
      "name": "ivysaur",
      "stats": {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
        "max-cp": "1699",
        "max-hp": "134"
      }
    }
  ];

  it('is a function', () => {
    expect(typeof averageStamina).toBe('function');
  });

  it('debería retornar el valor promedio igual a `141.5`', () => {
    expect(averageStamina(sampleData)).toEqual(141.5);
  });
});