function Person(name) {

    this.name = name;
    this.greeting = function() {
      console.log('Oi! I\'m ' + this.name + '.');
    };

  }
  const salva = Person('Mini');
salva.name;
salva.greeting();
