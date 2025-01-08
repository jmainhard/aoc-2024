// Advent of Code - Day 3 - Part One

export function part1(input: string): number {
  const split = input.split('mul');
  let result = 0;
  split.forEach((splitted) => {
    if (splitted.startsWith('(')) {
      const closeMul = splitted.indexOf(')');
      if (closeMul > 3 && closeMul < 9) {
        const [a, b] = splitted.slice(1, closeMul).split(',').map(Number);
        if (isNaN(a) || isNaN(b)) return;
        result += a * b;
      }
    }
  });
  return result;
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
