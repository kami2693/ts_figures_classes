// Інтерфейс Figure
export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

// Клас Triangle
export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    // Перевірка на коректність сторін
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0.');
    }

    // Перевірка на трикутник (нерівність трикутника)
    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error('Invalid triangle');
    }
  }

  // Метод для обчислення площі трикутника за формулою Герона
  getArea(): number {
    const s = (this.a + this.b + this.c) / 2; // Напівпериметр
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100; // Округлення до сотих
  }
}

// Клас Circle
export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    // Перевірка на коректність радіуса
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }
  }

  // Метод для обчислення площі кола
  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100; // Округлення до сотих
  }
}

// Клас Rectangle
export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    // Перевірка на коректність ширини та висоти
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0.');
    }
  }

  // Метод для обчислення площі прямокутника
  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100; // Округлення до сотих
  }
}

// Функція getInfo
export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
