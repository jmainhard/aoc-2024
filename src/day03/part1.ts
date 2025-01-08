// Advent of Code - Day 3 - Part One

export function part1(input: string): number {
  const split = input.split('mul');
  const sum = split.reduce((accum, mul) => {
    if (!mul.startsWith('(')) return accum;
    const closeMul = mul.indexOf(')');

    if (closeMul < 4 || closeMul > 8) return accum;
    const [a, b] = mul.slice(1, closeMul).split(',').map(Number);

    if (isNaN(a) || isNaN(b)) return accum;
    return accum + a * b;
  }, 0);
  return sum;
}

// search for valid mul based on position of closing parenthesis
// (1,1) (4)
// (11,1) (5)
// (111,1) (6)
// (1,11) (5)
// (1,111) (6)
// (11,11) (6)
// (11,111) (7)
// (111,111) (8)
// possible positions index: 4, 5, 6, 7, 8

// edge case. Closing parenthesis at correct index but invalid mul (Casues NaN):
// (432who()>where()@select()%}%what()}do()/who())}where(740,982)#-why():,
// (570why()who()-from()when()
