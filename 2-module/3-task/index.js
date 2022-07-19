let calculator = {

  read(a, b) {
    this['a'] = a;
    this['b'] = b;
  },

  sum() {
    return calculator['a'] + calculator['b'];
  },

  mul() {
    return calculator['a'] * calculator['b'];
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
